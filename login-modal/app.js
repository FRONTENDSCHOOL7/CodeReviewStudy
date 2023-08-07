const loginBtn = document.querySelector(".login-btn");

const userId = document.querySelector(".user-id");
const userPwd = document.querySelector(".user-pwd");
const firstErrorMsg = document.createElement("p");
const secondErrorMsg = document.createElement("p");

const loginBtnHandler = (event) => {
  event.preventDefault();

  const createErrorMsg = (element, className, text, nodeBehindErrorMsg) => {
    element.classList.add(className);
    element.innerText = text;
    userPwd.parentNode.insertBefore(element, nodeBehindErrorMsg);
  };

  const removeErrorMsg = (errorMsg) => {
    if (errorMsg.parentNode) {
      errorMsg.parentNode.removeChild(errorMsg);
    } else {
      return;
    }
  };

  if (!userId.value.trim()) {
    // 아이디 미입력 시
    userId.classList.add("focus");
    createErrorMsg(
      firstErrorMsg,
      "first-error-msg",
      "아이디를 입력해주세요.",
      userPwd
    );
    return;
  } else if (userId.value.trim() && !userPwd.value.trim()) {
    // 비밀번호 미입력 시
    userId.classList.remove("focus");
    removeErrorMsg(firstErrorMsg);
    userPwd.classList.add("focus");
    createErrorMsg(
      secondErrorMsg,
      "second-error-msg",
      "비밀번호를 입력해주세요.",
      userPwd.nextSibling
    );
    return;
  } else if (userId.value !== "weniv07" && userPwd.value !== "frontend07!") {
    // 아이디와 비밀번호 불일치 시
    userPwd.classList.remove("focus");
    createErrorMsg(
      secondErrorMsg,
      "second-error-msg",
      "아이디 혹은 비밀번호가 일치하지 않습니다.",
      userPwd.nextSibling
    );
  } else {
    removeErrorMsg(secondErrorMsg);
    alert("로그인 성공!");
  }
};

loginBtn.addEventListener("click", loginBtnHandler);
