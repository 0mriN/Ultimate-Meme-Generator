'use strict'

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Your Text',
            size: 20,
            color: 'red'
        }
    ]
}


function getMeme() {
    return gMeme
}

function setLineTxt(text) {
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