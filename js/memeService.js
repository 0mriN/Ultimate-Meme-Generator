'use strict'
var gImgs = [
    { id: 1, url: 'meme-imgs/meme-imgs (square)/1.jpg', keywords: ['angry'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/2.jpg', keywords: ['cute,puppy,puppies'] }
]
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
    // renderMeme()
}