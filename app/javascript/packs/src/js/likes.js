const token = document.querySelector("meta[name=csrf-token]").content 
const headers =  {"Content-Type": "application/json", "X-CSRF-Token": token}


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".actions .like").forEach(button => {
    button.addEventListener("click", like)
  })
})


async function like(event) {
  try {
    const resp = await fetch("/likes", {
      method: "POST",
      headers,
      body: JSON.stringify({})
    })

    const data = await resp.json()

  } catch (error) {
    console.log(error)
  }
}

