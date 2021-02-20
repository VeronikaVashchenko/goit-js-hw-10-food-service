import './styles.css';
import template from './gallery-items.hbs';
import menu from './menu.json';

const refs = {
  menuList: document.querySelector('.js-menu'),
};

const markUp = template(menu);
refs.menuList.insertAdjacentHTML('beforeend', markUp);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const changeTheme = document.querySelector('#theme-switch-toggle');

changeTheme.addEventListener('change', savedChangeTheme);
const themeShow = document.querySelector('body');

function defaultTheme() {
  if (localStorage.getItem('Theme') === Theme.DARK) {
    themeShow.classList.add(Theme.DARK);
    changeTheme.checked = true;
    themeShow.classList.remove(Theme.LIGHT);
  } else {
    localStorage.setItem('Theme', 'light-theme');
    themeShow.classList.add(Theme.LIGHT);
  }
}
defaultTheme();

function savedChangeTheme(e) {
  console.log(e);
  if (e.target.checked) {
    themeShow.classList.add(Theme.DARK);
    themeShow.classList.remove(Theme.LIGHT);
    localStorage.setItem('Theme', 'dark-theme');
  } else if (!e.target.checked) {
    themeShow.classList.add(Theme.LIGHT);
    themeShow.classList.remove(Theme.DARK);
    localStorage.setItem('Theme', 'light-theme');
  }
}
