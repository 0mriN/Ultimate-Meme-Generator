'use strict'
var gImgs = [
    { id: 1, url: 'meme-imgs/meme-imgs (square)/1.jpg', keywords: ['angry'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/2.jpg', keywords: ['cute,puppy,puppies'] }
]

function renderGallery() {
    var galleryContainer = document.querySelector('.gallery-container')
    galleryContainer.innerHTML = ''
    gImgs.forEach(function (img) {
        var elImg = document.createElement('img')
        console.log(elImg);
        elImg.src = img.url
        elImg.alt = 'meme-Image'
        elImg.addEventListener('click', function () {
            onSelectImg(this)
        })
        galleryContainer.appendChild(elImg)
    })
}

function coverCanvasWithImg(elImg) {
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function onSelectImg(elImg) {
    resetMemeText()
    gSelctedImg = elImg
    coverCanvasWithImg(elImg)
    renderMeme()
}
