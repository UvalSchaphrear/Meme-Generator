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
  document.querySelector('.gallery-container').style.visibility = 'hidden';
  document.querySelector('canvas').style.visibility = 'visible';
  document.querySelector('.editor').style.visibility = 'visible';
}

function toggleGallery() {
  var elGallery = document.querySelector('.gallery-container');
  var elCanvas = document.querySelector('canvas');
  var elEditor = document.querySelector('.editor');
  // console.log(gallery);
  if (elGallery.style.visibility === 'hidden') {
    elGallery.style.visibility = 'visible';
    elEditor.style.visibility = 'hidden';
    elCanvas.style.visibility = 'hidden';
  }
}

// function toggleMemes() {
//   var elGallery = document.querySelector('.gallery-container');
//   var elCanvas = document.querySelector('canvas');
//   var elEditor = document.querySelector('.editor');
//   if (elCanvas.style.visibility === 'hidden') {
//     elGallery.style.visibility = 'hidden';
//     elEditor.style.visibility = 'visible';
//     elCanvas.style.visibility = 'visible';
//   }
// }

// function toggleAbout() {}
