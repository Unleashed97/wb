'use strict'

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
    const removeBtnList = document.getElementsByClassName(
        'vykup__list-item-remove-btn',
    )

    // handle remove item
    function handleRemove(btn) {
        btn.closest('.vykup__list-item').remove()

        if (removeBtnList.length === 0) {
            emptyListBlock.classList.add('active')
            listWrapper.classList.remove('active')
        }

        sumItemPrice()
    }

    for (let btn of removeBtnList) {
        btn.addEventListener('click', () => handleRemove(btn))
    }

    // copy item
    const copyBtnList = document.getElementsByClassName(
        'vykup__list-item-copy-btn',
    )

    for (let btn of copyBtnList) {
        function handleCopy(btn) {
            const vykupItem = btn.closest('.vykup__list-item')

            const duplicate = vykupItem.cloneNode(true)

            // add eventlistener to remove btn of duplicate
            duplicate
                .querySelector('.vykup__list-item-remove-btn')
                .addEventListener('click', () => handleRemove(duplicate))

            // add eventlistener to copy btn of duplicate
            duplicate
                .querySelector('.vykup__list-item-copy-btn')
                .addEventListener('click', () => handleCopy(duplicate))

            // add amount increase listener
            const amountAddBtn = duplicate.querySelector(
                '.vykup__list-item-amount-add',
            )

            amountAddBtn.addEventListener('click', () =>
                handleAmountAddListener(amountAddBtn),
            )

            // add amount decrease listener
            const amountRemoveBtn = duplicate.querySelector(
                '.vykup__list-item-amount-remove',
            )

            amountRemoveBtn.addEventListener('click', () =>
                handleAmountRemoveListener(amountRemoveBtn),
            )

            // add gender listener
            const genderBlock = duplicate.querySelector('.gender')

            const genderButtons = genderBlock.querySelectorAll('button')

            genderButtons.forEach((btn) =>
                btn.addEventListener('click', () => handleGender(btn)),
            )

            vykupItem.after(duplicate)
            sumItemPrice()
        }

        btn.addEventListener('click', () => handleCopy(btn))
    }

    // gender
    const genderBlockList = document.getElementsByClassName('gender')

    function handleGender(btn) {
        btn.closest('.gender')
            .querySelectorAll('button')
            .forEach((btn) => btn.classList.remove('active'))

        btn.classList.add('active')
    }

    for (let genderBlock of genderBlockList) {
        const genderButtons = genderBlock.querySelectorAll('button')

        genderButtons.forEach((btn) =>
            btn.addEventListener('click', () => handleGender(btn)),
        )
    }

    // amount
    const amountAddBtns = document.querySelectorAll(
        '.vykup__list-item-amount-add',
    )
    const amountRemoveBtns = document.querySelectorAll(
        '.vykup__list-item-amount-remove',
    )

    // handle Add amount listener
    function handleAmountAddListener(addBtn) {
        const amountValueField = addBtn
            .closest('.amount')
            .querySelector('.vykup__list-item-amount')

        amountValueField.innerText = Number(amountValueField.innerText) + 1
        sumItemPrice()
    }
    amountAddBtns.forEach((addBtn) =>
        addBtn.addEventListener('click', () => handleAmountAddListener(addBtn)),
    )

    // handle remove amount listener
    function handleAmountRemoveListener(removeBtn) {
        const amountValueField = removeBtn
            .closest('.amount')
            .querySelector('.vykup__list-item-amount')

        if (amountValueField.innerText > 1) {
            amountValueField.innerText = Number(amountValueField.innerText) - 1
        }
        sumItemPrice()
    }
    amountRemoveBtns.forEach((removeBtn) =>
        removeBtn.addEventListener('click', () =>
            handleAmountRemoveListener(removeBtn),
        ),
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

    // data collection
    const vykupCreateBtn = document.querySelector('.vykup__create-btn')

    vykupCreateBtn.addEventListener('click', function (e) {
        e.preventDefault()

        const vykupList = document.querySelector('.vykup__list')
        const vykupItemList =
            vykupList.getElementsByClassName('vykup__list-item')

        let buyoutGroup = []

        for (let vykupItem of vykupItemList) {
            let art = vykupItem.querySelector('.vykup__list-item-art').innerText
            let price = vykupItem
                .querySelector('.vykup__list-item-price')
                .innerText.replace(/\D+/g, '')

            let count = vykupItem.querySelector(
                '.vykup__list-item-amount',
            ).innerText
            let gender = vykupItem.querySelector(
                '.gender > button.active',
            ).innerText

            let query = vykupItem
                .querySelector('.vykup__list-item-search-query')
                .value.trim()

            let pvz

            let size

            buyoutGroup.push({ art, price, count, gender, query })
        }
    })
}

handleVykup()
