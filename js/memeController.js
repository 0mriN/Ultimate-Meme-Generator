'use strict'

function renderMeme(text) {
    var currMeme = getMeme()
    setLineTxt(text)
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    coverCanvasWithImg(gSelctedImg)
    drawText(currMeme.lines[currMeme.selectedLineIdx].txt, gMeme.textX, gMeme.textY)
}

function drawText(text, x = 120, y = 50) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'gMeme.lines[0].color'
    gCtx.fillStyle = 'gMeme.lines[0].color'
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

