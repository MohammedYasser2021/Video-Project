let switchBtn = document.querySelector('.switch-btn')
let video = document.querySelector('.video-container')

// video and switches
switchBtn.addEventListener('click', function () {
  if (!this.classList.contains('slide')) {
    this.classList.add('slide')
    video.pause()
  } else {
    this.classList.remove('slide')
    video.play()
  }
})

// preloader

let preloader = document.querySelector('.preloader')

window.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    preloader.classList.add('hide-preloader')
  }, 3000)
})
