(() => {
  const openModalBtns = document.querySelectorAll('[data-modal-open]');
  const closeModalBtns = document.querySelectorAll('[data-modal-close]');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal-open');
      const modal = document.querySelector(`[data-modal="${modalId}"]`);
      if (modal) modal.classList.add('is-open');
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('[data-modal]');
      if (modal) modal.classList.remove('is-open');
    });
  });

  const params = new URLSearchParams(window.location.search);
  const modalToOpen = params.get('modal');
  if (modalToOpen) {
    const modal = document.querySelector(`[data-modal="${modalToOpen}"]`);
    if (modal) modal.classList.add('is-open');
  }
})();
