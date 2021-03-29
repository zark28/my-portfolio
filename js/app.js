
const humbNav = document.querySelector('.humberger');
const miniNav = document.querySelector('#menu');
const links = document.querySelectorAll('.navlink')

// humberger menu
const activateMenu = () =>{
    miniNav.classList.toggle('active2')
}

humbNav.addEventListener('click',activateMenu)

// active link

const activeNav = (e)=>{
    // e.preventDefault()
links.forEach(link => {
        
            link.classList.remove('active')
            e.target(link.classList.remove('active'))

        
    });
}