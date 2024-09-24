window.addEventListener('load', () => {
    const textElement = document.querySelector('.banner-text');
    const imgElement = document.querySelector('.banner-img');
  
    // Trigger reflow to reset animations
    textElement.style.animation = 'none';
    imgElement.style.animation = 'none';
  
    // Trigger animations after reflow
    setTimeout(() => {
      textElement.style.animation = 'slideInLeft 1s ease-in-out 1s';
      imgElement.style.animation = 'slideInRight 1s ease-in-out 1s';
    }, 0);
  });