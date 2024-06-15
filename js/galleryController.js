'use strict'
var gImgs = [
    { id: 1, url: 'meme-imgs/meme-imgs (square)/1.jpg', keywords: ['angry', 'men'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/2.jpg', keywords: ['cute', 'animal'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/3.jpg', keywords: ['cute', 'baby', 'animal'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/4.jpg', keywords: ['cute', 'animal'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/5.jpg', keywords: ['cute', 'angry', 'baby'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/6.jpg', keywords: ['funny', 'men'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/7.jpg', keywords: ['cute', 'baby', 'funny'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/8.jpg', keywords: ['men'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/9.jpg', keywords: ['cute', 'baby', 'funny'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/10.jpg', keywords: ['men', 'funny'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/11.jpg', keywords: ['men', 'funny'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/12.jpg', keywords: ['men'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/13.jpg', keywords: ['men'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/14.jpg', keywords: ['men'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/15.jpg', keywords: ['men', 'funny'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/16.jpg', keywords: ['men', 'funny'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/17.jpg', keywords: ['men'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/18.jpg', keywords: ['funny'] }
]

function renderGallery() {
    var galleryContainer = document.querySelector('.gallery-container')
    galleryContainer.innerHTML = ''

    gImgs.forEach(function (img) {
        var elImg = document.createElement('img')
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
    var galleryContainer = document.querySelector('.gallery-container')
    var searchContainer = document.querySelector('.search-container')
    galleryContainer.style.display = 'none'
    searchContainer.style.display = 'none'
    var editorContainer = document.querySelector('.editor-container')
    editorContainer.style.display = 'block'
    resetMemeText()
    gSelectedImg = elImg
    coverCanvasWithImg(elImg)
    renderMeme()
    var galleryLi = document.querySelector('.gallery');
    var aboutLi = document.querySelector('.about');
    galleryLi.classList.remove('li-active');
    aboutLi.classList.remove('li-active');


}

function toggleGallery() {
    var galleryContainer = document.querySelector('.gallery-container')
    var searchContainer = document.querySelector('.search-container')
    galleryContainer.style.display = 'grid'
    searchContainer.style.display = 'flex'
    var editorContainer = document.querySelector('.editor-container')
    editorContainer.style.display = 'none'
    var galleryLi = document.querySelector('.gallery');
    var aboutLi = document.querySelector('.about');
    aboutLi.classList.remove('li-active');
    galleryLi.classList.add('li-active');
}


function toggleAbout() {
    var aboutLi = document.querySelector('.about');
    aboutLi.classList.add('li-active');
    var galleryLi = document.querySelector('.gallery');
    galleryLi.classList.remove('li-active');

}