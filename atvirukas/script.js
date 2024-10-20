onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  document.addEventListener('DOMContentLoaded', () => {
    const flowerElement = document.querySelector('.flower__leafs'); 
    flowerElement.addEventListener('animationend', () => {
      const myButton = document.querySelector('.mygtukas');
      myButton.style.visibility = 'visible';
      myButton.style.opacity = '1';
    });
  });