'use strict'

function renderMeme() {
    var currMeme = getMeme()
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    coverCanvasWithImg(gSelctedImg)
    drawText(currMeme.lines[currMeme.selectedLineIdx].txt, gMeme.textX, gMeme.textY, currMeme.lines[currMeme.selectedLineIdx].size)
}

function drawText(text, x = 120, y = 50, fontSize = 20) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = gMeme.lines[0].color
    gCtx.fillStyle = gMeme.lines[0].color
    gCtx.font = fontSize + 'px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    // console.log('gMeme:', gMeme);
}

function onTextColor(color) {
    gMeme.lines[0].color = color
    renderMeme()
}


function increaseFontSize() {
    var currMeme = getMeme();
    currMeme.lines[0].size += 2; // 
    renderMeme();
}

function decreaseFontSize() {
    var currMeme = getMeme();
    if (currMeme.lines[0].size > 2) {
        currMeme.lines[0].size -= 2;
    }
    renderMeme()
}