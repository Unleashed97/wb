const modalQr = document.querySelector('.modal--qr')
const modalOpenBtnList = document.querySelectorAll('.buyout-item-btn-qr')
const modalClose = modalQr.querySelector('.modal__close')

for (let modalOpenBtn of modalOpenBtnList) {
    modalOpenBtn.addEventListener('click', (e) => {
        e.stopPropagation()

        const buyoutItem = modalOpenBtn.closest('.buyout__item')
        const status = buyoutItem.querySelector('.buyout__item-status-value')

        status.innerText = 'Ожидание оплаты'
        status.classList.add('pending')

        const controlsBlock = modalOpenBtn.closest(
            '.buyout__item-main-controls',
        )
        console.log(controlsBlock)
        controlsBlock.classList.add('hidden')

        buyoutItem
            .querySelector('.buyout__item-main-controls--pending')
            .classList.remove('hidden')

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

const btnPayList = document.getElementsByClassName('buyout-item-btn-pay')

for (let btnPay of btnPayList) {
    btnPay.addEventListener('click', (e) => {
        e.stopPropagation()
        btnPay.disabled = true

        btnPay.nextElementSibling.innerHTML = 'Проверка оплаты'

        const buyoutItem = btnPay.closest('.buyout__item')

        const status = buyoutItem.querySelector('.buyout__item-status-value')

        status.innerText = 'Ожидание оплаты'
    })
}
