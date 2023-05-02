window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav_link');
  
    links.forEach(link => {
      link.addEventListener('click', () => {
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
      });
    });
  
    const splide = new Splide('.splide', {
      type: 'loop',
      interval: '7000',
      height: 'auto',
      gap: '1rem',
      autoWidth: true,
    });
    splide.mount();
  });
  