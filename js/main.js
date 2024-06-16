'use strict'
var gElCanvas
var gCtx
var gSelectedImg
var gStartPos
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    addListeners()
    resizeCanvas()
}

function downloadCanvas(elLink) {
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'my-img'
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
    // window.addEventListener('resize', () => {
    //     resizeCanvas()
        renderMeme()
    // })
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchend', onUp)
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function onDown(ev) {
    const pos = getEvPos(ev)
    const clickedLineIdx = isTextClicked(pos)
    if (clickedLineIdx !== -1) {
        gMeme.selectedLineIdx = clickedLineIdx
        setTextDrag(true)
        gStartPos = pos
        document.body.style.cursor = 'move'
        renderMeme()
    }
}

function isTextClicked(clickedPos) {
    var currMeme = getMeme()

    var clickedLineIndex = -1

    currMeme.lines.forEach(function (line, index) {
        var textWidth = gCtx.measureText(line.txt).width
        var textHeight = line.size
        var x = line.pos.x - textWidth / 2
        var y = line.pos.y - textHeight / 2

        if (
            clickedPos.x >= x &&
            clickedPos.x <= x + textWidth &&
            clickedPos.y >= y &&
            clickedPos.y <= y + textHeight
        ) {

            clickedLineIndex = index
        }
    })


    return clickedLineIndex;

}

function onMove(ev) {
    if (!gStartPos) return
    const pos = getEvPos(ev)
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    moveText(dx, dy)
    gStartPos = pos
}

function onUp(ev) {
    setTextDrag(false)
    gStartPos = null
    document.body.style.cursor = 'default'
}

function moveText(dx, dy) {
    var currMeme = getMeme()
    var selectedLineIdx = currMeme.selectedLineIdx
    currMeme.lines[selectedLineIdx].pos.x += dx
    currMeme.lines[selectedLineIdx].pos.y += dy
    renderMeme()
}