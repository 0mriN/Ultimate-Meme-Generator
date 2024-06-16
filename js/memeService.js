'use strict'

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Your Text',
            size: 20,
            color: 'black',
            strokeColor:'black',
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
    var currMeme = getMeme()
    currMeme.lines.forEach(function (line) {
        line.txt = ''
    })
}

function addLine(text = 'Your Text Here', size = 20, color = 'black', pos) {
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
    clearInput()
}

function clearInput() {
    document.querySelector('.editor-container input[type="text"]').value = ''
}

function addNewLine(ev) {
    ev.preventDefault()
    clearInput()
    var inputField = document.querySelector('.editor-container input[type="text"]')
    var text = inputField.value || 'Your Text Here'
    var size = 20
    var color = 'black'
    var pos = getEvPos(ev)

    addLine(text, size, color, pos)
    text = ''
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
    }
    return pos
}

function setTextDrag(isDrag) {
    var currMeme = getMeme()
    if (currMeme.selectedLineIdx !== -1) {
        currMeme.lines.forEach((line, index) => {
            line.isDrag = (index === currMeme.selectedLineIdx) && isDrag
        })
        renderMeme()
    }
}

function switchLine() {
    var currMeme = getMeme()
    currMeme.selectedLineIdx = (currMeme.selectedLineIdx + 1) % currMeme.lines.length
    currMeme.lines.forEach((line, index) => {
        line.isDrag = index === currMeme.selectedLineIdx
    })
    renderMeme()
}

function saveMemes() {
    localStorage.setItem('savedMemes', JSON.stringify(gMeme.lines))
}

function loadMemes() {
    var savedMemes = JSON.parse(localStorage.getItem('savedMemes'))
    console.log('savedMemes:', savedMemes)
    if (savedMemes) {
        gMeme.lines = savedMemes
        console.log('Loaded memes:', gMeme.lines)
        renderMeme()
    }
}

function clearSavedMemes() {
    localStorage.removeItem('savedMemes')
}