import './style.css';
import { makeMenuPage } from './menu.js';
import { makeHomePage } from './home.js';
import { makeAboutPage } from './about.js';

let content = document.createElement('div');
content.setAttribute('id', 'content');
let main = document.createElement('div');
main.setAttribute('id', 'main');

let makeNavBar = () => {
  let links = ['Home', 'Menu', 'About'];

  let nav = document.createElement('div');
  nav.setAttribute('id', 'nav');

  let navLinks = document.createElement('div');
  navLinks.setAttribute('id', 'nav-links');

  let logo = document.createElement('div');
  logo.setAttribute('id', 'logo');
  logo.innerHTML = 'Restaurant';

  for (let i = 0; i < links.length; i++) {
    navLinks.appendChild(document.createElement('a'));
    navLinks.children[i].setAttribute('href', '#');
    navLinks.children[i].innerHTML = links[i];
    navLinks.children[i].addEventListener('click', () => {makePage(i);});
  }
  
  nav.appendChild(logo);
  nav.appendChild(navLinks);

  return nav;
}

let makePage = (index) => {
  content.innerHTML = '';
  main.innerHTML = '';
  
  content.appendChild(makeNavBar());

  if(index == 0) {
    main.appendChild(makeHomePage());
  }else if(index == 1) {
    main.appendChild(makeMenuPage());
  }else {
    main.appendChild(makeAboutPage());
  }

  content.appendChild(main);
};

document.body.appendChild(content);
makePage(0);




