const handleVykup = () => {
    // items list
    const emptyListBlock = document.querySelector('.vykup__empty-list')
    const listWrapper = document.querySelector('.vykup__list-wrapper')
    const vykupListItems = document.querySelectorAll(
        '.vykup__list > .vykup__list-item',
    )

    if (vykupListItems.length) {
        emptyListBlock.classList.remove('active')
        listWrapper.classList.add('active')
    } else {
        emptyListBlock.classList.add('active')
        listWrapper.classList.remove('active')
    }

    // remove item
    const removeVykupItemRemoveBtns = document.querySelectorAll(
        '.vykup__list-item-remove-btn',
    )

    removeVykupItemRemoveBtns.forEach((removeBtn) =>
        removeBtn.addEventListener('click', () => {
            removeBtn.closest('.vykup__list-item').remove()

            const vykupListItems = document.querySelectorAll(
                '.vykup__list > .vykup__list-item',
            )

            if (vykupListItems.length === 0) {
                emptyListBlock.classList.add('active')
                listWrapper.classList.remove('active')
            }

            sumItemPrice()
        }),
    )

    // amount
    const amountAddBtns = document.querySelectorAll(
        '.vykup__list-item-amount-add',
    )
    const amountRemoveBtns = document.querySelectorAll(
        '.vykup__list-item-amount-remove',
    )

    amountAddBtns.forEach((addBtn) =>
        addBtn.addEventListener('click', () => {
            const amountValueField = addBtn
                .closest('.amount')
                .querySelector('.vykup__list-item-amount')

            amountValueField.innerText = Number(amountValueField.innerText) + 1
            sumItemPrice()
        }),
    )

    amountRemoveBtns.forEach((removeBtn) =>
        removeBtn.addEventListener('click', () => {
            const amountValueField = removeBtn
                .closest('.amount')
                .querySelector('.vykup__list-item-amount')

            if (amountValueField.innerText > 1) {
                amountValueField.innerText =
                    Number(amountValueField.innerText) - 1
            }
            sumItemPrice()
        }),
    )

    function sumItemPrice() {
        const vykupTotal = document.querySelector('.vykup__list-bottom-total')
        const serviceTotal = document.querySelector(
            '.vykup__list-bottom-services-total',
        )

        const vykupListItems = document.querySelectorAll(
            '.vykup__list > .vykup__list-item',
        )

        let resultVykupTotal = 0

        let resultServiceTotal = 0

        vykupListItems.forEach((vykupItem) => {
            const amount = vykupItem.querySelector(
                '.vykup__list-item-amount',
            ).innerText
            const price = vykupItem.querySelector(
                '.vykup__list-item-price',
            ).innerText

            resultVykupTotal += amount * parseInt(price)

            resultServiceTotal += amount * 75
        })

        vykupTotal.innerText = resultVykupTotal
        serviceTotal.innerText = resultServiceTotal
    }

    sumItemPrice()
}

handleVykup()
