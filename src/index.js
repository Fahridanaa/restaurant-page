import './style.css';
import { makeMenuPage } from './menu.js';

let content = document.getElementById('content');
let main = document.createElement('div');
main.setAttribute('id', 'main');

let makeNavBar = () => {
  let links = ['Home', 'Menu', 'Contact'];

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

let makeHomePage = () => {
    let mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'main-content');

    let mainTitle = document.createElement('div');
    mainTitle.setAttribute('id', 'main-title');
    mainTitle.innerHTML = 'Welcome to Restaurant';

    let mainSubtitle = document.createElement('div');
    mainSubtitle.setAttribute('id', 'main-subtitle');
    mainSubtitle.innerHTML = 'The best food in the world';

    mainContent.appendChild(mainTitle);
    mainContent.appendChild(mainSubtitle);

    main.appendChild(mainContent);
    return mainContent;
}

let makePage = (index) => {
  content.innerHTML = '';
  main.innerHTML = '';
  
  content.appendChild(makeNavBar());

  if(index == 0) {
    main.appendChild(makeHomePage());
  }else {
    main.appendChild(makeMenuPage());
  }

  content.appendChild(main);
};

makePage(0);




