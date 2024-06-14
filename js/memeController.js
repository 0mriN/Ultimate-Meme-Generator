'use strict'

function renderMeme() {
    var currMeme = getMeme()
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    coverCanvasWithImg(gSelctedImg)
    currMeme.lines.forEach(function (line, index) {
        if (line.isDrag) {
            gCtx.lineWidth = 2
            gCtx.strokeStyle = 'white'
            var textWidth = gCtx.measureText(line.txt).width
            var textHeight = gCtx.measureText(line.txt).height
            // var textHeight = line.size
            var x = line.pos.x - textWidth / 2 - 5
            var y = line.pos.y - textHeight / 2 - 15
            gCtx.strokeRect(x, y, textWidth + 10, textHeight + 10)
            // gCtx.strokeRect(line.pos.x - 5, line.pos.y - 15, gCtx.measureText(line.txt).width + 10, line.size + 10)
        }
        drawText(line.txt, line.pos.x, line.pos.y, line.size)
        // drawText(currMeme.lines[currMeme.selectedLineIdx].txt, gMeme.textX, gMeme.textY, currMeme.lines[currMeme.selectedLineIdx].size)
    })
}

function drawText(text, x, y, fontSize) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = gMeme.lines[0].color
    gCtx.fillStyle = gMeme.lines[0].color
    gCtx.font = fontSize + 'px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onTextColor(color) {
    gMeme.lines[0].color = color
    renderMeme()
}


function increaseFontSize() {
    var currMeme = getMeme()
    var selectedLineIdx = currMeme.selectedLineIdx
    currMeme.lines[selectedLineIdx].size += 2
    renderMeme();
}

function decreaseFontSize() {
    var currMeme = getMeme()
    var selectedLineIdx = currMeme.selectedLineIdx
    if (currMeme.lines[selectedLineIdx].size > 2) {
        currMeme.lines[selectedLineIdx].size -= 2
    }
    renderMeme()
}