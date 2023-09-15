let menu = [
  {
    name: 'Fillet Mignon',
    price: 50,
    description: 'Grilled to perfection, served with garlic mashed potatoes and sautéed asparagus.',
    image: 'url(../src/img/fillet-mignon.jpg)'
  },
  {
    name: 'Pan-Seared Sea Bass',
    price: 40,
    description: 'Served with lemon butter sauce, couscous, and roasted vegetables.',
    image: 'url(../src/img/Pan-Seared-Sea-Bass.jpg)'
  },
  {
    name: 'Vegetarian Stuffed Bell Peppers',
    price: 30,
    description: 'Bell peppers stuffed with quinoa, black beans, and vegetables, topped with cheese.',
    image: 'url(../src/img/Simply-Recipes-Vegetarian-Stuffed-Peppers.webp)'
  },
  {
    name: 'Carpaccio Salmón',
    price: 30,
    description: 'Slices of fresh salmon served with capers, red onion, and lemon vinaigrette.',
    image: 'url(../src/img/carpaccio-salmon.jpg)'
  },
  {
    name: 'Crispy Calamari',
    price: 20,
    description: 'Tender calamari rings lightly fried and served with a zesty marinara sauce.',
    image: 'url(../src/img/crispy-calamari-recipe-6.jpg)'
  },
  {
    name: 'Lobster Bisque',
    price: 20,
    description: 'Creamy lobster bisque with a hint of sherry.',
    image: 'url(../src/img/lobster.jpg)'
  }
]

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