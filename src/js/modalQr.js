const modalQr = document.querySelector('.modal--qr')
const modalOpenBtnList = document.getElementsByClassName('buyout-item-btn-qr')
const modalClose = modalQr.querySelector('.modal__close')

for (let modalOpenBtn of modalOpenBtnList) {
    modalOpenBtn.addEventListener('click', (e) => {
        e.stopPropagation()

        const buyoutItem = modalOpenBtn.closest('.buyout__item')
        const status = buyoutItem.querySelector('.buyout__item-status-value')

        status.innerHTML = 'создание'
        status.classList.add('pending')

        const controlsBlock = modalOpenBtn.closest(
            '.buyout__item-main-controls',
        )

        controlsBlock.classList.add('hidden')

        const controlsBlockProcessing = buyoutItem.querySelector(
            '.buyout__item-main-controls--processing',
        )

        controlsBlockProcessing.classList.remove('hidden')

        setTimeout(() => {
            controlsBlockProcessing.classList.add('hidden')
            status.innerText = 'Ожидание оплаты'
            status.classList.add('pending')

            buyoutItem
                .querySelector('.buyout__item-main-controls--pending')
                .classList.remove('hidden')
        }, 1000)

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

        const buyoutControlsPending = btnPay.closest(
            '.buyout__item-main-controls--pending',
        )

        const buyoutItem = btnPay.closest('.buyout__item')

        const status = buyoutItem.querySelector('.buyout__item-status-value')

        status.innerText = 'Ожидание оплаты'

        setTimeout(() => {
            buyoutControlsPending.classList.add('hidden')

            const buyoutControlsPaid = buyoutItem.querySelector(
                '.buyout__item-main-controls--paid',
            )

            buyoutControlsPaid.classList.remove('hidden')

            status.innerText = 'Оплачено'
            status.classList.add('paid')
        }, 1000)
    })
}
