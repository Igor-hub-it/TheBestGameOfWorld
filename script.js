let modalWindowCreateNewGame = document.querySelector(".modal-window_create-new-game")
let btnCreateNewGame = document.querySelector(".button_create-game")
let btnCloseModalWindow = document.querySelector(".modal-window_close")

btnCreateNewGame.addEventListener('click', openModalWindow)
btnCloseModalWindow.addEventListener('click', closeModalWindow)

function openModalWindow() {
  modalWindowCreateNewGame.style.display = "inline"
}

function closeModalWindow() {
  modalWindowCreateNewGame.style.display = "none"
}