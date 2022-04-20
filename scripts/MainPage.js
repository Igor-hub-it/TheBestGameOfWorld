let modalWindowCreateNewGame = document.querySelector(".modal-window_create-new-game")
let btnCreateNewGame = document.querySelector(".button_create-game")
let btnCloseNewGameModalWindow = document.querySelector(".modal-window-creating_close")

let btnJoinModalWindow = document.querySelector(".button_join-game")
let modalwindowJoinToGame = document.querySelector(".modal-window_join-to-game")
let btnCloseJoinModalWindow = document.querySelector(".modal-window-join_close")

let btnlogIn = document.querySelector(".log_in")
let btnOpenLoginMWFromAuth = document.querySelector(".sign-in_log-in")
let modalWindowReg = document.querySelector(".modal-window_log-in")
let btnCloseRegModalWindow = document.querySelector(".log-in_close")
let btnEndRegistration = document.querySelector(".log-in_registration")

let btnOpenAuthorizationMW = document.querySelector(".sign_in")
let btnOpenAuthFromLogin = document.querySelector(".log-in_sign-in")
let btnOpenAuthFromCreateNewGameMW = document.querySelector(".modal-window-creating_sign-in")
let btnOpenAuthFromJoin = document.querySelector(".modal-window-join_sign-in")
let AuthorizationMW = document.querySelector(".modal-window_sign-in")
let btnCloseAuthorizationMW = document.querySelector(".sign-in_close")
let btnEndAuth = document.querySelector(".sign-in_continue")

btnCreateNewGame.addEventListener('click', openNewGameModalWindow)
btnCloseNewGameModalWindow.addEventListener('click', closeModalWindows)

btnJoinModalWindow.addEventListener('click', openJoinModalWindow)
btnCloseJoinModalWindow.addEventListener('click', closeModalWindows)

btnlogIn.addEventListener('click', openRegModalWindow)
btnOpenLoginMWFromAuth.addEventListener('click', openRegModalWindow)
btnCloseRegModalWindow.addEventListener('click', closeModalWindows)
btnEndRegistration.addEventListener('click', closeModalWindows)

btnOpenAuthorizationMW.addEventListener('click', openAuthModalWindow)
btnOpenAuthFromLogin.addEventListener('click', openAuthModalWindow)
btnOpenAuthFromCreateNewGameMW.addEventListener('click', openAuthModalWindow)
btnOpenAuthFromJoin.addEventListener('click', openAuthModalWindow)
btnCloseAuthorizationMW.addEventListener('click', closeModalWindows)
btnEndAuth.addEventListener('click', closeModalWindows)

// модалка для создания новой игры
function openNewGameModalWindow() {
  closeModalWindows()
  modalWindowCreateNewGame.style.display = "inline"
}

// модалка для присоединения к существующей игре
function openJoinModalWindow() {
  closeModalWindows()
  modalwindowJoinToGame.style.display = "inline"
}

// модалка для регистрации
function openRegModalWindow() {
  closeModalWindows()
  modalWindowReg.style.display = "inline"
}

// модалка для авторизации
function openAuthModalWindow() {
  closeModalWindows()
  AuthorizationMW.style.display = "inline"
}

function closeModalWindows() {
  modalwindowJoinToGame.style.display = "none"
  AuthorizationMW.style.display = "none"
  modalWindowReg.style.display = "none"
  modalWindowCreateNewGame.style.display = "none"
} 