const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.recipe')

for (let recipe of recipes) {
    recipe.addEventListener('click', function() {
        const img_name = recipe.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `/assets/${img_name}.png`
    })
}

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
})