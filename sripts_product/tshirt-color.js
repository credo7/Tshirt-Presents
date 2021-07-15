(function(){
    const controlls = document.querySelectorAll(".color__link");
    const activeClass = 'color__select__active';
    const secondActiveClass = 'tshirt__img-active';
    const controllsTwo = document.querySelectorAll(".color__select__link");
    const tshirtImgs = document.querySelectorAll(".tshirt__img");

    controlls.forEach(function(control){
        control.addEventListener("click", function(e) {
            e.preventDefault();

            controllsTwo.forEach(function(link) {
                link.closest('.color__select__link').classList.remove(activeClass);
            });

            tshirtImgs.forEach(function(img){
                img.closest('.tshirt__img').classList.remove(secondActiveClass);
            })

            let i = 0;

            while (i <= 6) {
                if (control == controlls[i]) {
                    break;
                }
                i++;
            }
            
            controllsTwo[i].classList.add(activeClass);
            tshirtImgs[i].classList.add(secondActiveClass);
        })
    })
})();