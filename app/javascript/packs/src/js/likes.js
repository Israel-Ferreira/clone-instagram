const token = document.querySelector("meta[name=csrf-token]").content 
const headers =  {"Content-Type": "application/json", "X-CSRF-Token": token}


document.addEventListener("DOMContentLoaded", () => {
  console.log("Carregou")
  setClickEvent(".action .like", like)
  setClickEvent(".action .dislike", dislike)
})



function setClickEvent(selector, calllback){
  document.querySelectorAll(selector).forEach(button => {
    button.addEventListener("click", calllback)
  })
}



async function like(event) {
  const actionElement = event.target.closest(".action")
  const {postId} = actionElement.dataset
  try {
    const resp = await fetch("/likes", {
      method: "POST",
      headers,
      body: JSON.stringify({like: {post_id: postId}})
    })

    const data = await resp.json()
    console.log(data)
    handleLikeFeature({...data}, actionElement)

  } catch (error) {
    console.log(error)
  }
}


async function dislike(event) {
  const actionElement = event.target.closest(".action")
  const {likeId} = actionElement.dataset
  try {
    const resp = await fetch(`/likes/${likeId}`, { method: "DELETE", headers})

    const data = await resp.json()
    console.log(data)
    handleLikeFeature({...data}, actionElement)

  } catch (error) {
    console.log(error)
  }
}


function handleLikeFeature({id, successful}, actionElement) {
  if(successful){
    actionElement.dataset.likeId = id
    actionElement.querySelectorAll(".like, .dislike").forEach(div => {
      div.classList.toggle("hidden");
    })
  }
}