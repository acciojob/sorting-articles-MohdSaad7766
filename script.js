const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
  'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
  'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

function stripArticle(bandName) {
  return bandName.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => {
  const bandA = stripArticle(a);
  const bandB = stripArticle(b);
  return bandA.localeCompare(bandB);
});

let ul = document.createElement('ul');

for (let value of sortedBands) {
  let li = document.createElement('li');
  li.innerText = value;
  ul.appendChild(li);
}

document.appendChild(ul); 

