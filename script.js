// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika domuken burger di klik
document.querySelector('#hamburger-menu').oneclik = () => {
    navbarNav.classList.toggle('active');
}

// Klik diluar Slidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})
