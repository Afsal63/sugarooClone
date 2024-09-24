// Get Form by its id
const form = document.getElementById("google-form");
const googleAppScriptUrl = "https://script.google.com/macros/s/AKfycbwCTXKAmYF6g31xAEmpUeUptftt_A9vd10xhzOXwFq5s8tT7MAGhXKDPqfucjfmhmasdg/exec";


const successMessage = document.getElementById("success-message");
const submitButton = document.getElementById("submit-button");


function showSuccessMessage() {
  successMessage.style.display = "block"; 
  setTimeout(() => {
    successMessage.classList.add("show");  
  }, 10); 
 
  form.reset();

  setTimeout(() => {
    successMessage.classList.remove("show");  
  }, 3000);
}

// Hide the message completely after the fade-out transition
successMessage.addEventListener("transitionend", () => {
  if (!successMessage.classList.contains("show")) {
    successMessage.style.display = "none";  
  }
});
form.addEventListener("submit", (e) => {
    submitButton.style.display='none'
  e.preventDefault();

  try {
    fetch(googleAppScriptUrl, {
      method: "POST",
      mode: "no-cors",
      body: new FormData(form),
    }).then(() => {
      console.log("success");
      showSuccessMessage();  
      submitButton.style.display= 'inline-block'
    });
  } catch (error) {
    submitButton.style.display= 'inline-block'
    console.log(error);
  }
});