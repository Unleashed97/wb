const handlerBurger = () => {
    const burger = document.querySelector('.burger')

    const sidebar = document.querySelector('.sidebar')

    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        sidebar.classList.toggle('active')

        document.body.classList.toggle('fixed')
    })
}

handlerBurger()
