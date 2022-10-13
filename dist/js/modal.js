const handleModal = () => {
    const openModalBtn = document.getElementById('controls__form-btn-plus')
    const modal = document.querySelector('.modal')
    const closeBtn = document.querySelectorAll('#modal-close, #modal-close-btn')

    openModalBtn.addEventListener('click', () => {
        modal.classList.add('active')
        document.body.classList.add('fixed')
    })

    closeBtn.forEach((btn) =>
        btn.addEventListener('click', () => {
            document.body.classList.remove('fixed')
            modal.classList.remove('active')
        }),
    )

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.classList.remove('fixed')
            modal.classList.remove('active')
        }
    })

    // switcher
    const switcher = document.querySelector('.modal__switcher')
    const switcherBtns = switcher.querySelectorAll('button')
    const switcherContentBtn1 = document.querySelector(
        '.modal__switcher-content-btn--1',
    )
    const switcherContentBtn2 = document.querySelector(
        '.modal__switcher-content-btn--2',
    )

    const switcherRemoveActive = () => {
        switcherBtns.forEach((btn) => btn.classList.remove('active'))
        switcherContentBtn1.classList.remove('active')
        switcherContentBtn2.classList.remove('active')
    }

    switcherBtns.forEach((btn, index) =>
        btn.addEventListener('click', () => {
            switcherRemoveActive()
            btn.classList.add('active')
            if (index === 0) {
                switcherContentBtn1.classList.add('active')
            } else switcherContentBtn2.classList.add('active')
        }),
    )
}

handleModal()
