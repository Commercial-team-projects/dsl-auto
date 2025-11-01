document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.sidebar-list-item a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document
    .querySelectorAll('.sidebar-list-item')
    .forEach(li => li.classList.remove('current'));

  items.forEach(link => {
    const li = link.closest('.sidebar-list-item');
    const href = link.getAttribute('href').replace('./', '');
    if (href === currentPage) li.classList.add('current');
  });
});
