let makeMenuPage = () => {
  let contentMenu = document.createElement('div');
  contentMenu.setAttribute('id', 'content-menu');

  for (let index = 0; index < 6; index++) {
    contentMenu.appendChild(document.createElement('div'));
    contentMenu.children[index].setAttribute('class', `card-menu ${index}`);
  }

  return contentMenu;
}

export { makeMenuPage };