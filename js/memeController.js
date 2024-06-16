'use strict'

function renderMeme() {
    var currMeme = getMeme()
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    coverCanvasWithImg(gSelectedImg)

    currMeme.lines.forEach(function (line, index) {
        var isSelected = index === currMeme.selectedLineIdx
        var isDragging = line.isDrag
        drawText(line.txt, line.pos.x, line.pos.y, line.size, line.color, line.strokeColor, isSelected, isDragging)
    })
}

function drawText(text, x, y, fontSize, color, strokeColor, isSelected, isDrag) {
    gCtx.font = `${fontSize}px Arial`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.strokeStyle = strokeColor
    gCtx.fillStyle = color
    gCtx.fillText(text || 'Your Text Here', x, y)
    gCtx.strokeText(text || 'Your Text Here', x, y)
    if (isSelected || isDrag) {
        gCtx.strokeStyle = 'white'
        gCtx.lineWidth = 2
        var textWidth = gCtx.measureText(text || 'Your Text Here').width
        var textHeight = fontSize
        gCtx.strokeRect(x - textWidth / 2 - 5, y - textHeight / 2 - 5, textWidth + 10, textHeight + 10)
    }
}

function onTextColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
    renderMeme()
}

function onStrokeColor(strokeColor) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = strokeColor
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

function deleteLine() {
    if (gMeme.lines.length === 0) return
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    renderMeme()
}

function saveMeme() {
    console.log('hello');
}