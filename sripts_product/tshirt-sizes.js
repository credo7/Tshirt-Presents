(function(){
    const controlls = document.querySelectorAll(".sizes__elem__link");
    const activeClass = 'sizes__elem__link__selected';

    controlls.forEach(function(control){
        control.addEventListener("click", function(e) {
            e.preventDefault();

            let i = 0;

            while (i <= 6) {
                if (control == controlls[i]) {
                    break;
                }
                i++;
            }

            if (i === 0 || i === 1 || i === 7) {
                return;
            }

            controlls.forEach(function(link) {
                link.closest('.sizes__elem__link').classList.remove(activeClass);
            });

            control.closest('.sizes__elem__link').classList.add(activeClass);
        })
    })
})();