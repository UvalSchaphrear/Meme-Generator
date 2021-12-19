'use strict';

function onInit() {
  gCanvas = document.querySelector('#my-canvas');
  gCtx = gCanvas.getContext('2d');
  renderGallery();
  renderMeme();
}

function renderMeme() {
  const meme = getMeme();
  drawImgFromlocal(meme);
  if (!gMeme.lines.length) return;
  if (!gMeme.lines[gMeme.selectedLineIdx]) gMeme.selectedLineIdx = 0;
}

function drawText(txt, x, y, idx) {
  const meme = getMeme();
  gCtx.lineWidth = 2;
  gCtx.fillStyle = `${meme.lines[idx].color}`;
  gCtx.font = `${gMeme.lines[idx].size}px ${gMeme.lines[idx].font}`;
  gCtx.strokeStyle = `${meme.lines[idx].stroke}`;
  gCtx.textAlign = `${gMeme.lines[idx].align}`;
  gCtx.strokeText(txt, x, y, gCanvas.width);
  gCtx.fillText(txt, x, y, gCanvas.width);

  gCtx.stroke();
}

function drawImgFromlocal(currMeme) {
  const currImg = getImgById(currMeme.selectedImgId);
  var img = new Image();
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    const line = currMeme.lines.map((line, lineIdx) => {
      return drawText(line.txt, gCanvas.width / 2, line.posY, lineIdx);
    });
  };
  img.src = currImg.url;
}

function onTextChange(text) {
  setLineTxt(text);
  renderMeme();
}

function onImgSelect(imgId) {
  hideGallery();
  setImg(imgId);
  renderMeme();
}

function onChageColor(value) {
  changeColor(value);
  renderMeme();
}

function onChageStrokeColor(value) {
  changeStrokeColor(value);
  renderMeme();
}

function onIncreaseText() {
  increaseTextSize();
  renderMeme();
}

function onDecreaseText() {
  decreaseTextSize();
  renderMeme();
}

function onSwitchLines() {
  switchLines();
}

function onAlignLeft() {
  alignLeft();
  renderMeme();
}

function onAlignCenter() {
  alignCenter();
  renderMeme();
}

function onAlignRight() {
  alignRight();
  renderMeme();
}

function onAddLine() {
  addLine();
  renderMeme();
}

function onDeleteLine() {
  removeLine();
  renderMeme();
}

function onChangeFont(font) {
  changeFont(font);
  renderMeme();
}

function onMoveUp() {
  moveTextUp();
  renderMeme();
}

function onMoveDown() {
  moveTextDown();
  renderMeme();
}

function onDownloadImage(img) {
  console.log(this);
  downloadCanvas(img);
}

function toggleMenu() {
  document.body.classList.toggle('menu-open');
}
