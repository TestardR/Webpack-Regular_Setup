// import sum from './sum';
// import './image_viewer';

// console.log(sum(4, 5));

const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  System.import('./image_viewer').then(module => {
    module.default();
  });
};

document.body.appendChild(button);
