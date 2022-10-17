const buyoutItemMainList = document.getElementsByClassName('buyout__item-main')

for (let buyoutItemMain of buyoutItemMainList) {
    buyoutItemMain.addEventListener('click', () => {
        const buyoutItem = buyoutItemMain.closest('.buyout__item')

        buyoutItem.classList.toggle('active')
    })
}

// status of payment
