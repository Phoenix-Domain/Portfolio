'use strict';

// Uncheck the menu toggle checkbox to close the menu after a link is clicked
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menu-toggle').checked = false;
  });
});

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelectorAll('nav a');

// Close menu and remove scroll lock when any nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.checked = false;
    document.body.classList.remove('no-scroll');
  });
});

// Add or remove scroll lock based on toggle state
menuToggle.addEventListener('change', () => {
  if (menuToggle.checked) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
});

// Form interaction for success-message
function showThankYouMessage(formId, messageId) {
  const form = document.getElementById(formId);
  const message = document.getElementById(messageId);

  form.addEventListener('submit', function () {
    setTimeout(() => {
      form.reset();
      message.hidden = false;
      message.classList.add('show');

      // Hide the message again after 5 seconds
      setTimeout(() => {
        message.classList.remove('show');
        message.hidden = true;
      }, 5000);
    }, 200);
  });
}

showThankYouMessage('contact-form', 'contact-thankyou');

document.querySelector('.copyright').innerHTML =
  `© ${new Date().getFullYear()} <span class="myName">Batubo Victory</span><br> All rights reserved.`;
