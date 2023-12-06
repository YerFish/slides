function slidesPlugin(activeSlide) {
    const slides = document.querySelectorAll(".slide")

  slides[activeSlide].classList.add("active")

    for (const slide of slides) {
        slide.addEventListener("click", () => {
            clearActiveClasses()

            slide.classList.add('active')
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove("active")
        })
    }
}

slidesPlugin(0) //сюда передаем элемент по умолчанию от 0 до количества всего (их 4 здесь от 0)