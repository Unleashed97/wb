const modalQr = document.querySelector('.modal--qr')
const modalOpenBtnList = document.getElementsByClassName('buyout-item-btn-qr')
const modalClose = modalQr.querySelector('.modal__close')

for (let modalOpenBtn of modalOpenBtnList) {
    modalOpenBtn.addEventListener('click', (e) => {
        e.stopPropagation()

        modalQr.classList.add('active')
        document.body.classList.add('fixed')
    })
}

modalClose.addEventListener('click', () => {
    modalQr.classList.remove('active')
    document.body.classList.remove('fixed')
})

window.addEventListener('click', (e) => {
    if (e.target === modalQr) {
        modalQr.classList.remove('active')
        document.body.classList.remove('fixed')
    }
})
