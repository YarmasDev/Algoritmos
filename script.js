document.addEventListener("DOMContentLoaded", () => {
    const supportForm = document.getElementById("support-form")
    const chatInput = document.getElementById("chat-input")
    const sendChatButton = document.getElementById("send-chat")
    const chatMessages = document.getElementById("chat-messages")
    const accordionHeaders = document.querySelectorAll(".accordion-header")
  
    supportForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const issue = document.getElementById("issue").value
  
      // Simular envío de formulario
      supportForm.innerHTML = `<p class="success-message">Gracias por tu mensaje, ${name}. Te contactaremos pronto en ${email} sobre tu problema.</p>`
    })
  
    sendChatButton.addEventListener("click", sendChatMessage)
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendChatMessage()
      }
    })
  
    function sendChatMessage() {
      const message = chatInput.value.trim()
      if (message) {
        addChatMessage("Usuario", message)
        chatInput.value = ""
        setTimeout(() => {
          addChatMessage("Soporte", "Gracias por tu mensaje. Un agente de soporte te atenderá pronto.")
        }, 1000)
      }
    }
  
    function addChatMessage(sender, message) {
      const messageElement = document.createElement("div")
      messageElement.classList.add("chat-message")
      messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`
      chatMessages.appendChild(messageElement)
      chatMessages.scrollTop = chatMessages.scrollHeight
    }
  
    accordionHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling
        header.classList.toggle("active")
        if (header.classList.contains("active")) {
          content.style.maxHeight = content.scrollHeight + "px"
        } else {
          content.style.maxHeight = 0
        }
      })
    })
  
    // Verificar si el widget de chat está cargado
    function checkWidgetLoaded() {
      if (window.FreshworksWidget) {
        console.log("Widget de chat cargado correctamente")
        document.getElementById("live-chat").style.display = "none"
      } else {
        console.log("Widget de chat no cargado, mostrando chat alternativo")
        document.getElementById("live-chat").style.display = "block"
      }
    }
  
    // Esperar a que el widget se cargue (ajusta el tiempo según sea necesario)
    setTimeout(checkWidgetLoaded, 5000)
  })
  
  