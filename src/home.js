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

  return mainContent;
}

export { makeHomePage };