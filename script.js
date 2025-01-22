document.addEventListener("DOMContentLoaded", () => {
    const supportForm = document.getElementById("support-form")
    const accordionHeaders = document.querySelectorAll(".accordion-header")
  
    supportForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const issue = document.getElementById("issue").value
  
      // Simular envío de formulario
      supportForm.innerHTML = `<p class="success-message">Gracias por tu mensaje, ${name}. Te contactaremos pronto en tu correo  "${email}" sobre tu problema.</p>`
    })
  
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
  })
  
  
