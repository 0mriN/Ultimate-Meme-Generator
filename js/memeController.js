'use strict'

function renderMeme(text) {
    getMeme(text)
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    coverCanvasWithImg(gSelctedImg)
    drawText(gMeme.text,gMeme.textX,gMeme.textY)
}

function drawText(text, x = 120, y = 50) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'blue'
    gCtx.fillStyle = 'black'
    gCtx.font = '40px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    // console.log('gMeme:', gMeme);
}

function coverCanvasWithImg(elImg) {
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function onSelectImg(elImg) {
    gSelctedImg = elImg
    coverCanvasWithImg(elImg)
}

