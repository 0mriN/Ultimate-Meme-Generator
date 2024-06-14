'use strict'


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Your Text',
            size: 20,
            color: 'black',
            pos: { x: 120, y: 40 },
            isDrag: false
        }
    ]
}


function getMeme() {
    return gMeme
}

function setLineTxt(text, lineIdx) {
    var currMeme = getMeme()
    var selectedLineIdx = currMeme.selectedLineIdx

    currMeme.lines[selectedLineIdx].txt = text
    renderMeme()
}

function resetMemeText() {
    var currMeme = getMeme();
    currMeme.lines.forEach(function (line) {
        line.txt = ''
    })
}

function addLine(text, size, color, pos) {
    var currMeme = getMeme()
    var lineHeight = 50
    var newY = lineHeight * (currMeme.lines.length + 1)
    currMeme.lines.push({
        txt: text,
        size: size,
        color: color,
        pos: { x: pos.x + 85, y: pos.y + newY },
        isDrag: false,
        y: newY
    })
    currMeme.selectedLineIdx = currMeme.lines.length - 1
    renderMeme()
}



function addNewLine(ev) {
    var text = document.querySelector('.editor-container input[type="text"]').value
    var prevText = gMeme.lines[gMeme.selectedLineIdx].txt
    var size = 20
    var color = 'blue'
    var pos = getEvPos(ev)

    addLine(text, size, color, pos)

    setLineTxt(prevText, 0)

}

function getEvPos(ev) {

    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }

    if (TOUCH_EVS.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
        console.log('pos:', pos)
    }
    return pos
}

function setTextDrag(isDrag) {
    gMeme.lines.isDrag = isDrag
    console.log('gMeme.lines.isDrag:', gMeme.lines.isDrag);

}


function switchLine() {
    var currMeme = getMeme()
    var selectedLineIndex = currMeme.selectedLineIdx
    currMeme.lines.forEach(function (line, index) {
        line.isDrag = (index === selectedLineIndex)
    })
    currMeme.selectedLineIdx = (selectedLineIndex + 1) % currMeme.lines.length
}