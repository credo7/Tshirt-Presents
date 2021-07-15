(function(){
    const secondControlls = document.querySelectorAll('.product__types__li');
    const secondActiveClass = 'product__types__li-active';
    const controlls = document.querySelectorAll(".filter__link");
    const activeClass = 'filter__item--active';

    controlls.forEach(function(control){
        control.addEventListener("click", function(e) {
            e.preventDefault();

            controlls.forEach(function(link) {
                link.closest(".filter__item").classList.remove(activeClass);
              });

              control.closest(".filter__item").classList.add(activeClass);

              let i = 0;

            while (i <= 6) {
                if (control == controlls[i]) {
                    break;
                }
                i++;
            }

            secondControlls.forEach(function(control){
                control.closest('.product__types__li').classList.remove(secondActiveClass);
            })

            secondControlls[i].classList.add(secondActiveClass);
            
        })
    })

})();