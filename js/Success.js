function done() {
    const homeScreen = document.getElementById('home-screen')
    homeScreen.classList.add('hidden')

    const headerHidden = document.getElementById('header-hidden')
    headerHidden.classList.add('hidden')

    // const footerHidden = document.getElementById('footer-hidden')
    // footerHidden.classList.add('hidden')

    const successScreen = document.getElementById('success')
    successScreen.classList.remove('hidden')

}


