const modal = document.getElementById('modal');
const openBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn');
const loginForm = document.getElementById('login-form');

const loginBtn = document.getElementById('loginBtn');
const idInput = document.querySelector('.text-id');
const pwInput = document.querySelector('.text-pw');

const message = document.createElement("p");
message.classList.add("message");


/* input 하단에 경고메시지추가 & input border 빨간색 */
function inputCheck(input) {
    input.after(message);
    input.focus();
    let focusInput = document.querySelector('.login-form >input:focus');
    focusInput.style.borderColor = "red";
}

/* 경고메시지&border-color 초기화 */
function inputReset(input) {
    input.removeAttribute("style");
    let message = document.querySelector('.message');
    let parent = message.parentElement;
    parent.removeChild(message);
}


/* open-modal */
openBtn.addEventListener("click", function(e) {
    e.preventDefault();
    modal.classList.add('active');

    /* login check */   
    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();
        if(idInput.value === "" && pwInput.value === ""){
            inputCheck(idInput);
            message.innerHTML = "아이디를 입력해 주세요.";
        }else if(idInput.value === ""){
            inputCheck(idInput);
            message.innerHTML = "아이디를 입력해 주세요.";
        }else if(pwInput.value === ""){
            inputCheck(pwInput);
            message.innerHTML = "비밀번호를 입력해 주세요.";
        }else {
            inputCheck(pwInput);
            message.innerHTML = "아이디 혹은 비밀번호가 일치하지 않습니다.";
        }

        //idInput에 값이 입력되었을때
        idInput.addEventListener("change", function(e) {
            inputReset(idInput);
        })

        //pwInput에 값이 입력되었을때
        pwInput.addEventListener("change", function(e) {
            inputReset(pwInput);
        })
    })
})

/* close-modal */
closeBtn.addEventListener("click", function(e) {
    loginForm.reset();
    modal.classList.remove('active');
    inputReset(idInput);
    inputReset(pwInput);
})