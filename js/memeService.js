'use strict'


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Your Text',
            size: 20,
            color: 'black'
        },
        {
            txt: 'Your Text',
            size: 20,
            color: 'black'
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

function addLine(text, size, color) {
    var currMeme = getMeme()
    var lineHeight = 50
    var newY = lineHeight * (currMeme.lines.length + 1)
    currMeme.lines.push({
        txt: text,
        size: size,
        color: color,
        y: newY
    })
    currMeme.selectedLineIdx = currMeme.lines.length - 1
    renderMeme()
}



function addNewLine() {
    var text = document.querySelector('.editor-container input[type="text"]').value
    var prevText = gMeme.lines[gMeme.selectedLineIdx].txt
    var size = 20
    var color = 'blue'

    addLine(text, size, color)

    setLineTxt(prevText, 0)

}