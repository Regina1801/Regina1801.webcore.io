const body = document.body;
const burger = document.querySelector('.upper-menu__btn-burger');
const btnClose = document.querySelector('.main-menu__btn-burger-close');
const sidebar = document.querySelector('.sidebar-left');
const overlay = document.querySelector('.overlay');
const dataNameContainers = document.querySelectorAll('[data-container]');
const btnReadMore = document.querySelectorAll('.read-more');
const dataNameModal = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');
const modalFeedback = document.querySelector('.modal__feedback');
const modalCallback = document.querySelector('.modal__callback');
const btnFeedback = document.querySelector('.main-menu__btn-chat');
const btnCallback = document.querySelector('.main-menu__btn-call');
const closeModalFeedback = document.querySelector('.modal__feedback-close-btn');
const closeModalCallback = document.querySelector('.modal__callback-close-btn');

btnCallback.addEventListener("click", function () {
  modalFeedback.classList.add('visibility-hidden');
  //modalFeedback.style.display = "none";
  modal.classList.add('modal--open');
  modalCallback.classList.add('modal__callback--open');
  overlay.classList.add('overlay--open');
  body.classList.add('disable-scroll');
});

btnFeedback.addEventListener("click", function () {
  modalCallback.classList.add('visibility-hidden');
  modalCallback.style.display = "none";
  modal.classList.add('modal--open');
  modalFeedback.classList.add('modal__feedback--open');
  overlay.classList.add('overlay--open');
  body.classList.add('disable-scroll');
});

closeModalFeedback.addEventListener("click", function () {
  modal.classList.remove('modal--open');
  //modalFeedback.classList.remove('modal__feedback--open');
  closeOverlay();
});

closeModalCallback.addEventListener("click", function () {
  modal.classList.remove('modal--open');
  //modalCallback.classList.remove('modal__callback--open');
  closeOverlay();
});

function showLeftSidebar() {
  sidebar.classList.add('sidebar-left--open');
  overlay.classList.add('overlay--open');
}

function removeLeftSidebar() {
  sidebar.classList.remove('sidebar-left--open');
  overlay.classList.remove('overlay--open');
}

burger.addEventListener('click', () => {
  showLeftSidebar();
})

btnClose.addEventListener('click', () => {
  removeLeftSidebar();
})

function openMore(name) {
  [...dataNameContainers].forEach(container => {
    return container.dataset.container === name ? container.classList.toggle('open') : '';
  })
}

function changeBtn(btn) {
  if (!btn.classList.contains('read-more--open')) {
    btn.classList.add('read-more--open');
    btn.textContent = "Скрыть"
  } else {
    btn.classList.remove('read-more--open');
    btn.textContent = "Показать все"
  }
}

document.addEventListener('click', (e) => {
  openMore(e.target.dataset.name);

  if (e.target.classList.contains('read-more')) {
    changeBtn(e.target)
  }
})

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    closeOverlay()
  }
})

function closeOverlay() {
  [...dataNameModal].forEach(modalEl => {
    modal.classList.remove('modal--open');
    modalEl.classList.remove('modal-wrapper--open');
    body.classList.remove('disable-scroll');
    overlay.classList.remove('overlay--open');
  });
  sidebar.classList.remove('sidebar-left--open');
}



