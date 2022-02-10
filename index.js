function Navbar(){
    let hamburguer = document.querySelector('.hamburguer')
    let menu = document.querySelector('.navbar')
    // let navLinks = document.querySelectorAll('.link')
    let activeClass = 'active'

    // criando a class activeClass
    function handleClick(){
        menu.classList.toggle(activeClass)
        hamburguer.classList.toggle(activeClass)
    }

    hamburguer.addEventListener('click', handleClick)
}

Navbar()