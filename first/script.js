


const buttonAccordian = document.querySelectorAll('.butn');
let activeButton = null;
let activeIcon = null;

buttonAccordian.forEach((button) => {
  const icon = button.querySelector('i');

  button.addEventListener('click', () => {
    if (activeButton && activeButton !== button) {
      activeIcon.classList.remove('rotate-icon');
    }
    
    icon.classList.toggle('rotate-icon');

    if (icon.classList.contains('rotate-icon')) {
      activeButton = button;
      activeIcon = icon;
    } else {
      activeButton = null;
      activeIcon = null;
    }
  });
});

