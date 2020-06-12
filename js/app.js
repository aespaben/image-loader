function reset() {
  document.querySelector('span').style.display = 'none';

  document.querySelector('.spinner').classList.remove('disappear');
  document.querySelector('.round').classList.remove('appear');

  for(const element of document.querySelector('.round').children) {
    element.remove();
  }
}

function fetch_img() {
  reset();

  fetch('https://picsum.photos/600/600')
  .then(res => res.url)
  .then(url => {
    let img = new Image();
    img.onload = () => {
      document.querySelector('.round').appendChild(img);
      document.querySelector('.round').classList.add('appear');
      document.querySelector('.spinner').classList.add('disappear');
    }
    img.src = url;

  })
  .catch(err => {
    console.error(err);
    document.querySelector('span').innerHTML = 'Problema de conectividad con el servidor.';
    
    document.querySelector('span').style.display = 'inline';

    document.querySelector('.spinner').classList.add('disappear');
  });
}

fetch_img();

document.querySelector('a').addEventListener('click', (e) => {
  e.preventDefault();

  fetch_img();
});