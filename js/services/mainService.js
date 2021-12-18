'use strict';

//*****checking*****//
var gCanvas;
var gCtx;
const gTouchEvs = ['touchstart', 'touchmove', 'touchend'];
//*****checking*****//

var gKeywords = { happy: 12, 'funny puk': 1 };

var gImgs = [
  {
    id: 1,
    url: './img/imgs(square)/1.jpg',
    keywords: ['happy'],
  },
  {
    id: 2,
    url: './img/imgs(square)/2.jpg',
    keywords: ['sad'],
  },
  {
    id: 3,
    url: './img/imgs(square)/3.jpg',
    keywords: ['sad'],
  },
  {
    id: 4,
    url: './img/imgs(square)/4.jpg',
    keywords: ['sad'],
  },
  {
    id: 5,
    url: './img/imgs(square)/5.jpg',
    keywords: ['sad'],
  },
  {
    id: 6,
    url: './img/imgs(square)/6.jpg',
    keywords: ['sad'],
  },
  {
    id: 7,
    url: './img/imgs(square)/7.jpg',
    keywords: ['sad'],
  },
  {
    id: 8,
    url: './img/imgs(square)/8.jpg',
    keywords: ['sad'],
  },
  {
    id: 9,
    url: './img/imgs(square)/9.jpg',
    keywords: ['sad'],
  },
  {
    id: 10,
    url: './img/imgs(square)/10.jpg',
    keywords: ['sad'],
  },
  {
    id: 11,
    url: './img/imgs(square)/11.jpg',
    keywords: ['sad'],
  },
  {
    id: 12,
    url: './img/imgs(square)/12.jpg',
    keywords: ['sad'],
  },
  {
    id: 13,
    url: './img/imgs(square)/13.jpg',
    keywords: ['sad'],
  },
  {
    id: 14,
    url: './img/imgs(square)/14.jpg',
    keywords: ['sad'],
  },
  {
    id: 15,
    url: './img/imgs(square)/15.jpg',
    keywords: ['sad'],
  },
  {
    id: 16,
    url: './img/imgs(square)/16.jpg',
    keywords: ['sad'],
  },
  {
    id: 17,
    url: './img/imgs(square)/17.jpg',
    keywords: ['sad'],
  },
  {
    id: 18,
    url: './img/imgs(square)/18.jpg',
    keywords: ['sad'],
  },
];

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'Top text',
      size: 30,
      align: 'center',
      color: 'white',
      stroke: 'black',
      font: 'Impact',
      posX: 200,
      posY: 40,
    },
    {
      txt: 'Bottom text',
      size: 30,
      align: 'center',
      color: 'white',
      stroke: 'black',
      font: 'Impact',
      posX: 200,
      posY: 380,
    },
  ],
};

// memeService.setImg();

function getMeme() {
  return gMeme;
}

function getImages() {
  return gImgs;
}

function getImgById(imgId) {
  const meme = gImgs.find(img => {
    return imgId === img.id;
  });
  return meme;
}

function setLineTxt(text) {
  const meme = getMeme();
  meme.lines[meme.selectedLineIdx].txt = text;
}

function increaseTextSize() {
  if (!gMeme.lines.length) return;
  if (!gMeme.lines[gMeme.selectedLineIdx]) gMeme.selectedLineIdx = 0;
  gMeme.lines[gMeme.selectedLineIdx].size += 5;
}

function decreaseTextSize() {
  if (!gMeme.lines.length) return;
  if (!gMeme.lines[gMeme.selectedLineIdx]) gMeme.selectedLineIdx = 0;
  gMeme.lines[gMeme.selectedLineIdx].size -= 5;
}

function switchLines() {
  document.querySelector('.input-text').value = '';
  var selectedLineIdx = gMeme.selectedLineIdx;
  if (selectedLineIdx === gMeme.lines.length - 1) {
    gMeme.selectedLineIdx = 0;
  } else {
    gMeme.selectedLineIdx++;
  }
}

function alignLeft() {
  // gMeme.lines[gMeme.selectedLineIdx].posX = 0;
  if (!gMeme.lines.length) return;
  if (!gMeme.lines[gMeme.selectedLineIdx]) gMeme.selectedLineIdx = 0;

  gCtx.textAlign = 'end';
  gMeme.lines[gMeme.selectedLineIdx].align = 'end';
}
function alignCenter() {
  // gMeme.lines[gMeme.selectedLineIdx].posX = 0;
  if (!gMeme.lines.length) return;
  if (!gMeme.lines[gMeme.selectedLineIdx]) gMeme.selectedLineIdx = 0;

  gCtx.textAlign = 'center';
  gMeme.lines[gMeme.selectedLineIdx].align = 'center';
}
function alignRight() {
  // gMeme.lines[gMeme.selectedLineIdx].align = 0;
  if (!gMeme.lines.length) return;
  if (!gMeme.lines[gMeme.selectedLineIdx]) gMeme.selectedLineIdx = 0;
  gCtx.textAlign = 'start';
  gMeme.lines[gMeme.selectedLineIdx].align = 'start';
}

function addLine() {
  // console.log(gMeme.lines[gMeme.selectedLineIdx].posY);
  // if (gMeme.lines[0].txt === '') return;
  if (gMeme.lines.length > 2) return;
  gMeme.lines.splice(1, 0, {
    txt: 'Middle Text',
    size: 30,
    align: 'center',
    color: 'white',
    stroke: 'black',
    font: 'Impact',
    posX: gCanvas.width / 2,
    posY: gCanvas.height / 2,
  });
  gMeme.selectedLineIdx = 1;
}

function removeLine() {
  if (gMeme.lines.length === 1) gMeme.selectedLineIdx = 0;
  document.querySelector('.input-text').value = '';
  // gMeme.lines[gMeme.selectedLineIdx].txt = '';
  gMeme.lines.splice(gMeme.selectedLineIdx, 1);
  if (!gMeme.lines[gMeme.selectedLineIdx]) gMeme.selectedLineIdx = 0;
}

function changeFont(font) {
  if (!gMeme.lines.length) return;
  if (!gMeme.lines[gMeme.selectedLineIdx]) gMeme.selectedLineIdx = 0;
  gMeme.lines[gMeme.selectedLineIdx].font = font;
}

function moveTextUp() {
  if (!gMeme.lines.length) return;
  if (!gMeme.lines[gMeme.selectedLineIdx]) gMeme.selectedLineIdx = 0;
  gMeme.lines[gMeme.selectedLineIdx].posY -= 5;
}
function moveTextDown() {
  if (!gMeme.lines.length) return;
  if (!gMeme.lines[gMeme.selectedLineIdx]) gMeme.selectedLineIdx = 0;
  gMeme.lines[gMeme.selectedLineIdx].posY += 5;
}

function changeStrokeColor(value) {
  if (!gMeme.lines.length) return;
  if (!gMeme.lines[gMeme.selectedLineIdx]) gMeme.selectedLineIdx = 0;
  gMeme.lines[gMeme.selectedLineIdx].stroke = value;
}

function changeColor(value) {
  if (!gMeme.lines.length) return;
  if (!gMeme.lines[gMeme.selectedLineIdx]) gMeme.selectedLineIdx = 0;
  gMeme.lines[gMeme.selectedLineIdx].color = value;
}

function downloadCanvas(elLink) {
  const data = gCanvas.toDataURL();
  elLink.href = data;
  elLink.download = 'my-img.jpg';
}
