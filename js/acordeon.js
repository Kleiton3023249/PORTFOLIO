const acordeonSection = document.querySelectorAll('.acordeon .trigger')

acordeonSection.forEach((bottom) => {
    bottom.addEventListener('click', () => {
        const acordeon = bottom.parentElement
        const isOpen = acordeon.classList.contains('open')

        if(isOpen) {
            acordeon.classList.remove('open')
        }
        else {
            acordeon.classList.add('open')
        }
    })
})

