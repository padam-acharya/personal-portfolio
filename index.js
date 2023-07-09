
const spanEl = document.getElementById("dev")
const spanEl2 = document.getElementById("designer")

const navBarEl = document.querySelector(".nav-bar")
const heroEl = document.querySelector(".hero")

const portfolioHeadingEl = document.querySelector(".portfolio-heading")
const liEls = document.querySelectorAll(".nav-links>li")

const projectCarouselEl = document.querySelectorAll(".project-carousel")
const imgEls = document.querySelectorAll(".project-carousel img")

const prevEl = document.querySelector(".left")
const nextEl = document.querySelector(".right")


const progressBar = document.querySelectorAll(".progress-bar")
const skillPercentage = document.querySelectorAll(".skill-percentage")

const aboutSectionEl = document.getElementById("about-section")
const aboutImgContainerEl = document.querySelector(".about-img-container")
const aboutInfoEl = document.querySelector(".about-info")

const listContainerEl = document.querySelector(".list-container")
const aboutTechInfoEl = document.querySelector(".about-tech-info")
const skillSectionEl = document.getElementById("skills-section")

const contactInfoDetailEl = document.querySelector(".contact-info")
const contactMeSectionEl = document.getElementById("contact-me-section")

const hamburgerEl = document.querySelector(".hamburger")

const navLinksEl = document.querySelector(".nav-links")

const scrollTopEl = document.querySelector(".scroll-to-top")

const scrollTopBtnEl = document.querySelector(".scroll-top-btn")



let currentProject = 0

const duration = {
    duration: 1100,
}

const arr = ['Developer', 'Designer', 'Fresher']

let carrerIndex = 0
let value = ''
let index = 0

// hamburger-menu
let isShown = false
const sideBarEl = document.createElement("div")
document.body.append(sideBarEl)

sideBarEl.innerHTML = `<li><a href="#header-section">Home</a></li>
                <li><a href="#about-section">About</a></li>
                <li><a href="#projects-section">Projects</a></li>
                <li><a href="#skills-section">Skills</a></li>
                <li><a href="#contact-me-section">Contact</a></li>
                <li class="icons">
                <a href="https://github.com/padam-acharya"><i class="fa-brands fa-github" target="_blank"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/padam-acharya-026127280/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </li>`

sideBarEl.style.display = "none"

hamburgerEl.addEventListener("click", () => {
    console.log("clicked")
    if (!isShown) {
        isShown = true
        sideBarEl.style.display = "block"
        sideBarEl.classList.add("sidebar")
    }
    else {
        isShown = false
        sideBarEl.style.display = "none"
        sideBarEl.classList.remove("sidebar")

    }
})


window.addEventListener("scroll", () => {

    // close hamburger on scroll
    if (isShown) {
        isShown = false
        sideBarEl.style.display = "none"
        sideBarEl.classList.remove("sidebar")
        // hamburgerEl.innerHTML = `<i class="fa-solid fa-bars "></i>`
    }

    if (window.scrollY > heroEl.offsetTop) {
        navBarEl.classList.add("sticky-blue")
        portfolioHeadingEl.style.color = "white"
        scrollTopEl.style.display = "flex"
    }
    else {
        navBarEl.classList.remove("sticky-blue")
        portfolioHeadingEl.style.color = "blue"
        scrollTopEl.style.display = "none"
    }

    if (window.scrollY > aboutSectionEl.offsetTop - aboutSectionEl.offsetHeight) {
        aboutImgContainerEl.classList.add("left-fade")
        aboutInfoEl.classList.add("right-fade")
    }
    else {
        aboutImgContainerEl.classList.remove("left-fade")
        aboutInfoEl.classList.remove("right-fade")
    }

    if (window.scrollY > skillSectionEl.offsetTop - skillSectionEl.offsetHeight) {
        listContainerEl.classList.add("left-fade")
        aboutTechInfoEl.classList.add("right-fade")
    }
    else {

        listContainerEl.classList.remove("left-fade")
        aboutTechInfoEl.classList.remove("right-fade")
    }

    if (window.scrollY > contactMeSectionEl.offsetTop - contactMeSectionEl.offsetHeight - 120) {
        contactInfoDetailEl.classList.add("ping-animation")
    }
    else {

        contactInfoDetailEl.classList.remove("ping-animation")

    }


})

function showText() {
    if (carrerIndex === arr.length) {
        carrerIndex = 0
        value = ''
    }
    value += arr[carrerIndex][index]
    spanEl.textContent = value
    spanEl2.textContent = value
    if (index === arr[carrerIndex].length - 1) {
        index = 0
        carrerIndex++
        value = ''
    }
    else {
        index++
    }


    setTimeout(showText, 200)

}

function waveAnimation() {

    liEls.forEach(liEl => {
        i = 1

        liEl.classList.add('wave-animation')


        i++

        // i= i++  
    })

}

function displayProgress() {
    let i = 0
    progressBar.forEach(item => {

        const skillBarPer = skillPercentage[i].textContent
        const progressEl = document.createElement("div")
        progressEl.style.width = skillBarPer
        progressEl.style.height = 5 + 'px'
        progressEl.style.backgroundColor = "blue"
        item.appendChild(progressEl)
        i++
    })
}

let currentImage = 1
let timeout

prevEl.addEventListener("click", () => {
    console.log("clicked")
    currentImage--
    clearTimeout(timeout)
    updateProject()
})

nextEl.addEventListener("click", () => {
    currentImage++
    clearTimeout(timeout)
    updateProject()
})

function updateProject() {
    if (currentImage < 1) {
        currentImage = imgEls.length
    }
    if (currentImage > imgEls.length) {
        currentImage = 1
    }

    projectCarouselEl[0].style.transform = `translate(-${(currentImage - 1) * 100}%)`
    projectCarouselEl[1].style.transform = `translate(-${(currentImage - 1) * 100}%)`

    timeout = setTimeout(() => {
        currentImage++
        updateProject()
    }, 2000)
}


function stopOnHover() {
    Array.from(projectCarouselEl).forEach(item => {
        ['mouseover', 'touchstart'].forEach(event =>
            item.addEventListener(event, () => {
                console.log('mouseover')
                clearTimeout(timeout)
            })
        )

        if ('ontouchend' in document.documentElement) {
            ['mouseout', 'touchend'].forEach(event =>
                item.addEventListener(event, () => {
                    console.log('mouseout');
                    clearTimeout(timeout);

                    timeout = setTimeout(() => {
                        currentImage++;
                        updateProject();
                    }, 1000);
                })
            );
        } else {
            item.addEventListener('mouseout', () => {
                console.log('mouseout');
                clearTimeout(timeout);

                timeout = setTimeout(() => {
                    currentImage++;
                    updateProject();
                }, 1000);
            });
        }
    })
}

// h3El.animate(fadeIn,{duration: 800})
// h1El.animate(fadeIn,duration)
// h4El.animate(fadeIn,{duration: 1400})

showText()
waveAnimation()
displayProgress()
updateProject()
stopOnHover()