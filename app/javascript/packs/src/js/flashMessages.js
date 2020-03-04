import Toastify from 'toastify-js'


document.addEventListener('DOMContentLoaded', () => {
  const dataSet = document.body.dataset.flashMessages 
  const messages = JSON.parse(dataSet)

  const backgroundColor = {
    alert: "#f44336",
    error: "#f44336",
    notice: "#009688"
  }

  messages.forEach(flashMessage => {
    const [type, message]=  flashMessage

    Toastify({
      text: message,
      duration: 3000,
      close: true,
      backgroundColor: backgroundColor[type],
      stopOnFocus: true
    }).showToast();
  })

})




