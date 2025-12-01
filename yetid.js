// Basic YetID account storage using localStorage
let users = JSON.parse(localStorage.getItem("YetID_Users") || "[]");

// ---------- CREATE ACCOUNT ----------
function YetID_Register(){
  const username = document.getElementById("newUser").value;
  const password = document.getElementById("newPass").value;

  if(!username || !password) return alert("Enter username + password");

  if(users.find(u => u.user === username))
    return alert("Username already taken");

  users.push({ user: username, pass: password });
  localStorage.setItem("YetID_Users", JSON.stringify(users));

  alert("Account created! Log in now.");
  location.href = "login.html";
}

// ---------- LOGIN ----------
function YetID_Login(){
  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;

  const found = users.find(u => u.user === username && u.pass === password);

  if(found){
    localStorage.setItem("YetID_Session", username);
    alert("Welcome back " + username + "!");
    // redirect to your AI site/dashboard later
    // location.href = "../app/index.html";
  } else {
    alert("Incorrect login");
  }
}
