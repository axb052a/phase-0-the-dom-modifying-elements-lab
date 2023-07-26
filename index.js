// Write your code here!
document.querySelector('main#main').remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');

const yourName = "Anthony Beltran"; 
newHeader.textContent = `${yourName} is the champion`;

document.body.appendChild(newHeader);
