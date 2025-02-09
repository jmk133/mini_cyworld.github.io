const login = document.querySelector("#login-form");
const id = login.querySelector("#id");
const pw = login.querySelector("#pw");
const welcome = document.querySelector("#welcome");
const btn = document.querySelector("#login-btn");
const temp = document.querySelector("#todo");

function handleLogin(event){
    event.preventDefault();
    const idName = id.value;
    const pwName = pw.value;

    localStorage.setItem("idName",idName);
    localStorage.setItem("pwName",pwName);
    greeting(idName);
}

function greeting(id){
    welcome.innerText = `Welcome ${id}!`;
    welcome.classList.remove("hidden");
    login.classList.add("hidden");
    
    let existingLogout = document.querySelector("#logout");
    if (existingLogout) {
        existingLogout.remove();
    }
    
    const logout = document.createElement("button");
    logout.id = "logout";
    logout.innerText = "Log-out";
    document.body.appendChild(logout);
    logout.addEventListener("click",clearInfo);

    // 로그인하면 입력 칸 보이기
    temp.classList.remove("hidden");
}

function clearInfo(){
    const logoutForm = document.querySelector("#logout");
    if (logoutForm) {
        logoutForm.classList.add("hidden");
    }
    welcome.classList.add("hidden");
    login.classList.remove("hidden");
    localStorage.clear();

    // 로그아웃하면 입력 칸 숨기기기
    temp.classList.add("hidden");
}


const savedId = localStorage.getItem("idName");
const savedPw = localStorage.getItem("pwName");

if (!savedId || !savedPw){
    login.addEventListener("submit",handleLogin);
} else {
    greeting(savedId);
}