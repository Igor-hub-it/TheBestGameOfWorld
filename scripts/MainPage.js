let modalWindowCreateNewGame = document.querySelector(".modal-window_create-new-game")
let btnCreateNewGame = document.querySelector(".button_create-game")
let btnCloseNewGameModalWindow = document.querySelector(".modal-window-creating_close")

let btnJoinModalWindow = document.querySelector(".button_join-game")
let modalwindowJoinToGame = document.querySelector(".modal-window_join-to-game")
let btnCloseJoinModalWindow = document.querySelector(".modal-window-join_close")

let btnlogIn = document.querySelector(".log_in")
let modalWindowReg = document.querySelector(".modal-window_log-in")
let btnCloseRegModalWindow = document.querySelector(".log-in_close")

let btnOpenAuthorizationMW = document.querySelector(".sign_in")
let AuthorizationMW = document.querySelector(".modal-window_sign-in")
let btnCloseAuthorizationMW = document.querySelector(".sign-in_close")

btnCreateNewGame.addEventListener('click', openNewGameModalWindow)
btnCloseNewGameModalWindow.addEventListener('click', closeModalWindows)

btnJoinModalWindow.addEventListener('click', openJoinModalWindow)
btnCloseJoinModalWindow.addEventListener('click', closeModalWindows)

btnlogIn.addEventListener('click', openRegModalWindow)
btnCloseRegModalWindow.addEventListener('click', closeModalWindows)

btnOpenAuthorizationMW.addEventListener('click', openAuthModalWindow)
btnCloseAuthorizationMW.addEventListener('click', closeModalWindows)

// модалка для создания новой игры
function openNewGameModalWindow() {
  modalWindowCreateNewGame.style.display = "inline"
}

// модалка для присоединения к существующей игре
function openJoinModalWindow() {
  modalwindowJoinToGame.style.display = "inline"
}

// модалка для регистрации
function openRegModalWindow() {
  modalWindowReg.style.display = "inline"
}

// модалка для авторизации
function openAuthModalWindow() {
  AuthorizationMW.style.display = "inline"
}

function closeModalWindows() {
  modalwindowJoinToGame.style.display = "none"
  AuthorizationMW.style.display = "none"
  modalWindowReg.style.display = "none"
  modalWindowCreateNewGame.style.display = "none"
} 