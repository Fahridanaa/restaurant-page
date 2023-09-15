import FilletMignon from './img/fillet-mignon.jpg';
import PanSeared from './img/Pan-Seared-Sea-Bass.jpg';
import vegetarian from './img/vegetarian-stuffed-peppers.jpg';
import carpaccioSalmon from './img/carpaccio-salmon.jpg';
import calamari from './img/fried-calamari.jpg';
import lobster from './img/lobster.jpg';


let menu = [
  {
    name: 'Fillet Mignon',
    price: 50,
    description: 'Grilled to perfection, served with garlic mashed potatoes and sautéed asparagus.',
    image: FilletMignon
  },
  {
    name: 'Pan-Seared Sea Bass',
    price: 40,
    description: 'Served with lemon butter sauce, couscous, and roasted vegetables.',
    image: PanSeared
  },
  {
    name: 'Vegetarian Stuffed Bell Peppers',
    price: 30,
    description: 'Bell peppers stuffed with quinoa, black beans, and vegetables, topped with cheese.',
    image: vegetarian
  },
  {
    name: 'Carpaccio Salmón',
    price: 30,
    description: 'Slices of fresh salmon served with capers, red onion, and lemon vinaigrette.',
    image: carpaccioSalmon
  },
  {
    name: 'Crispy Calamari',
    price: 20,
    description: 'Tender calamari rings lightly fried and served with a zesty marinara sauce.',
    image: calamari
  },
  {
    name: 'Lobster Bisque',
    price: 20,
    description: 'Creamy lobster bisque with a hint of sherry.',
    image: lobster
  }
]

let makeMenuPage = () => {
  let contentMenu = document.createElement('div');
  contentMenu.setAttribute('id', 'content-menu');

  for (let index = 0; index < menu.length; index++) {
    let imgElement = document.createElement('img');
    imgElement.src = menu[index].image;
    
    contentMenu.appendChild(document.createElement('div'));
    contentMenu.children[index].setAttribute('class', `card-menu ${index}`);
    
    
    contentMenu.children[index].appendChild(document.createElement('h2')).textContent = menu[index].name;
    contentMenu.children[index].appendChild(imgElement);
    contentMenu.children[index].appendChild(document.createElement('p')).textContent = menu[index].description;
    contentMenu.children[index].appendChild(document.createElement('p')).textContent = `$${menu[index].price}`;
  }

  return contentMenu;
}

export { makeMenuPage };