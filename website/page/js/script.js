const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const itemTab = document.querySelector('.item-tab');
const menuItems = document.querySelectorAll('.menu-list li a');
const tableContainers = document.querySelectorAll('.table-container');
const contentContainer = document.querySelector('.content-container');

menuButton.addEventListener('click', function() {
  menu.classList.toggle('show');
  itemTab.classList.toggle('show');

  if (menu.classList.contains('show')) {
    contentContainer.classList.add('content-shift');
  } else {
    contentContainer.classList.remove('content-shift');
  }
});

menuItems.forEach(item => {
  item.addEventListener('click', function(event) {
    event.preventDefault();

    const target = this.getAttribute('href').substring(1);

    tableContainers.forEach(container => {
      container.style.display = 'none';
    });

    const targetContainer = document.getElementById(target);

    if (targetContainer) {
      targetContainer.style.display = 'block';
    }
  });
});

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('span-active');
};

const handleFocusOut = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
  }
};

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length >= 8) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
};

inputs.forEach(input => {
  input.addEventListener('focus', handleFocus);
  input.addEventListener('focusout', handleFocusOut);
  input.addEventListener('input', handleChange);
});

document.addEventListener('DOMContentLoaded', function() {
  const gerenciamentoUnidadesLink = document.querySelector('a[href="#GerenciamentoUnidades"]');
  
  gerenciamentoUnidadesLink.addEventListener('click', function(event) {
    event.preventDefault();
    window.open("file:///E:/progamação/vs%20code/html%20e%20css/projeto3.0/login.page/indexlogin.html", "_blank");
  });
});
