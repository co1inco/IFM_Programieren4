import { setLanguage as applyLanguage } from "./languages/translations.js";

window.setLanguage = applyLanguage;

const browser_lang = navigator.language;
console.log("Detected language:", browser_lang);
window.setLanguage(browser_lang);


document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  
  const response = await fetch('/myapp/data/user/login', {
    method: 'POST',
    body: new URLSearchParams({
        'username': formData.username,
        'password': formData.password
    }),
    credentials: 'include' // Sends/receives cookies
  });
  
  // const response = await fetch('/myapp/data/user/login', {
  //   method: 'POST',
  //   body: formData,
  //   credentials: 'include' // Sends/receives cookies
  // });
  
  if (response.ok) {
    // Update UI to show logged-in state
    localStorage.setItem("isLoggedIn", true);
    updateUserLoggedIn();
  } else {
    // Show error message
    alert('Login failed');
  }
});

document.getElementById("logoutButton").addEventListener('click', async (e) => {
    localStorage.setItem("isLoggedIn", false);
    updateUserLoggedOut();
});


function updateUserLoggedIn() {
    document.getElementById("login-area").style.visibility = "collapse";
    document.getElementById("logout-area").style.visibility = "visible";
}

function updateUserLoggedOut() {
    document.getElementById("login-area").style.visibility = "visible";
    document.getElementById("logout-area").style.visibility = "collapse";
}

if (localStorage.getItem("isLoggedIn")) {
    updateUserLoggedIn();
}