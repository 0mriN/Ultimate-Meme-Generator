'use strict'
var gImgs = [
    { id: 1, url: 'meme-imgs/meme-imgs (square)/1.jpg', keywords: ['angry', 'men'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/2.jpg', keywords: ['cute', 'animal'] },
    { id: 3, url: 'meme-imgs/meme-imgs (square)/3.jpg', keywords: ['cute', 'baby', 'animal'] },
    { id: 4, url: 'meme-imgs/meme-imgs (square)/4.jpg', keywords: ['cute', 'animal'] },
    { id: 5, url: 'meme-imgs/meme-imgs (square)/5.jpg', keywords: ['cute', 'angry', 'baby'] },
    { id: 6, url: 'meme-imgs/meme-imgs (square)/6.jpg', keywords: ['funny', 'men'] },
    { id: 7, url: 'meme-imgs/meme-imgs (square)/7.jpg', keywords: ['cute', 'baby', 'funny'] },
    { id: 8, url: 'meme-imgs/meme-imgs (square)/8.jpg', keywords: ['men'] },
    { id: 9, url: 'meme-imgs/meme-imgs (square)/9.jpg', keywords: ['cute', 'baby', 'funny'] },
    { id: 10, url: 'meme-imgs/meme-imgs (square)/10.jpg', keywords: ['men', 'funny'] },
    { id: 11, url: 'meme-imgs/meme-imgs (square)/11.jpg', keywords: ['men', 'funny'] },
    { id: 12, url: 'meme-imgs/meme-imgs (square)/12.jpg', keywords: ['men'] },
    { id: 13, url: 'meme-imgs/meme-imgs (square)/13.jpg', keywords: ['men'] },
    { id: 14, url: 'meme-imgs/meme-imgs (square)/14.jpg', keywords: ['men'] },
    { id: 15, url: 'meme-imgs/meme-imgs (square)/15.jpg', keywords: ['men', 'funny'] },
    { id: 16, url: 'meme-imgs/meme-imgs (square)/16.jpg', keywords: ['men', 'funny'] },
    { id: 17, url: 'meme-imgs/meme-imgs (square)/17.jpg', keywords: ['men'] },
    { id: 18, url: 'meme-imgs/meme-imgs (square)/18.jpg', keywords: ['funny'] }
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
    var uploadContainer = document.querySelector('.upload-container')
    uploadContainer.style.display = 'block'
    galleryContainer.style.display = 'none'
    searchContainer.style.display = 'none'
    var editorContainer = document.querySelector('.editor-container')
    editorContainer.style.display = 'grid'
    resetMemeText()
    gSelectedImg = elImg
    coverCanvasWithImg(elImg)
    renderMeme()
    var galleryLi = document.querySelector('.gallery')
    var aboutLi = document.querySelector('.about')
    galleryLi.classList.remove('li-active')
    aboutLi.classList.remove('li-active')
}

function toggleGallery() {
    var galleryContainer = document.querySelector('.gallery-container')
    var searchContainer = document.querySelector('.search-container')
    var uploadContainer = document.querySelector('.upload-container')
    var editorContainer = document.querySelector('.editor-container')
    uploadContainer.style.display = 'none'
    galleryContainer.style.display = 'grid'
    searchContainer.style.display = 'flex'
    editorContainer.style.display = 'none'
    var galleryLi = document.querySelector('.gallery')
    var aboutLi = document.querySelector('.about')
    var savedLi = document.querySelector('.saved')
    aboutLi.classList.remove('li-active')
    savedLi.classList.remove('li-active')
    galleryLi.classList.add('li-active')
}

function toggleAbout() {
    var savedLi = document.querySelector('.saved')
    var aboutLi = document.querySelector('.about')
    aboutLi.classList.add('li-active')
    var galleryLi = document.querySelector('.gallery')
    galleryLi.classList.remove('li-active')
    savedLi.classList.remove('li-active')

}

function toggleSaved(){
    var galleryContainer = document.querySelector('.gallery-container')
    var searchContainer = document.querySelector('.search-container')
    var editorContainer = document.querySelector('.editor-container')
    galleryContainer.style.display = 'none'
    searchContainer.style.display = 'none'
    editorContainer.style.display = 'none'
    var galleryLi = document.querySelector('.gallery')
    var aboutLi = document.querySelector('.about')
    var savedLi = document.querySelector('.saved')
    aboutLi.classList.remove('li-active')
    galleryLi.classList.remove('li-active')
    savedLi.classList.add('li-active')
    // loadMemes()
}

function onSetFilter(filterText) {
    var input = document.querySelector('.search-container input[type="search"]')
    input.value = filterText
    filterText = filterText.toLowerCase()
    var filteredImgs = gImgs.filter(function (img) {
        return img.keywords.some(function (keyword) {
            return keyword.toLowerCase().includes(filterText)
        })
    })
    renderFilteredGallery(filteredImgs)

    var clickedButton = document.querySelector('.filter-container button[data-clicks]:hover')
    if (clickedButton) {
        var currentClicks = parseInt(clickedButton.getAttribute('data-clicks')) || 0
        currentClicks++
        clickedButton.style.fontSize = (14 + currentClicks) + 'px'
        clickedButton.setAttribute('data-clicks', currentClicks)
    }
}

function renderFilteredGallery(imgs) {
    var galleryContainer = document.querySelector('.gallery-container')
    galleryContainer.innerHTML = ''

    imgs.forEach(function (img) {
        var elImg = document.createElement('img')
        elImg.src = img.url
        elImg.alt = 'meme-Image'
        elImg.addEventListener('click', function () {
            onSelectImg(this)
        })
        galleryContainer.appendChild(elImg)
    })
}