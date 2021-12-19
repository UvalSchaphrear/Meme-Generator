'use strict';

function renderGallery() {
  const images = getImages();
  const strHtml = images.map((img, idx) => {
    return `<img class="gallery-img" onclick="onImgSelect(${
      img.id
    })" src="./img/imgs(square)/${idx + 1}.jpg" alt="" ">`;
  });
  document.querySelector('.gallery-container').innerHTML = strHtml.join('');
}

function hideGallery() {
  document.querySelector('.gallery-container').style.display = 'none';
  document.querySelector('canvas').style.display = 'block';
  document.querySelector('.editor').style.display = 'flex';
}

function toggleGallery() {
  var elGallery = document.querySelector('.gallery-container');
  var elCanvas = document.querySelector('canvas');
  var elEditor = document.querySelector('.editor');
  var elAbout = document.querySelector('.about');
  if (elGallery.style.display !== 'block') {
    elGallery.style.display = 'grid';
    elEditor.style.display = 'none';
    elCanvas.style.display = 'none';
    elAbout.style.display = 'none';
  }
  toggleMenu();
}

function toggleAbout() {
  var elGallery = document.querySelector('.gallery-container');
  var elCanvas = document.querySelector('canvas');
  var elEditor = document.querySelector('.editor');
  var elAbout = document.querySelector('.about');
  if (elAbout.style.display !== 'block') {
    console.log(elAbout.style.display);
    elAbout.style.display = 'block';
    elGallery.style.display = 'none';
    elEditor.style.display = 'none';
    elCanvas.style.display = 'none';
  } else {
    elGallery.style.display = 'grid';
    elEditor.style.display = 'none';
    elCanvas.style.display = 'none';
    elAbout.style.display = 'none';
  }
  toggleMenu();
}
