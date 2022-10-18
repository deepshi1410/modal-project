'use strict';
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeModalButton = document.querySelector('.close-modal')
// a node list will be there with all the elements that atches the selector
const openModalButtons = document.querySelectorAll('.show-modal')
const closeModal = () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}
const openModal = () => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}
for (let i = 0; i < openModalButtons.length; i++) {
  openModalButtons[i].addEventListener('click', openModal)
}
closeModalButton.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (ev) {
  if (ev.key == 'Escape') {
    if (!modal.classList.contains('hidden'))
      closeModal()
  }
})
