// Get the navbar element
const navbar = document.querySelector('.nvbr');

let prevScrollPos = window.pageYOffset;

// Add scroll event listener
window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    navbar.classList.remove('hidden');
  } else {
    // Scrolling down
    navbar.classList.add('hidden');
  }

  prevScrollPos = currentScrollPos;
});
