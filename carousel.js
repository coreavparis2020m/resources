        let overlay = document.querySelector('.overlay');
        let carousel = document.querySelector('.carousel');
        let slides = document.querySelectorAll('.carousel .slide');
        let imgs = document.querySelectorAll('.carousel .slide img');
        let arrowLeft = document.querySelector('.arrow-left');
        let arrowRight = document.querySelector('.arrow-right');

        function resetCarouselSizes() {
            cont = 0;

            carousel.style.height = '90vh';
            height = carousel.offsetHeight;

            arrowLeft.style.display = 'none';
            arrowRight.style.display = 'none';

            slides.forEach((elem, i) =>{
                elem.style.left = carousel.offsetWidth * -i + 'px';
            });

            slides.forEach(elem => {
                elem.style.height = carousel.offsetHeight + 'px';
                elem.style.transition = '900ms';
            });

            imgs.forEach(elem => {
                if(elem.offsetHeight < height) {
                    height = elem.offsetHeight;
                }
            });

            carousel.style.height = height + 'px';
            arrowRight.style.display = 'block';
        }

        function nextSlide() {
            cont ++;
            arrowRight.style.pointerEvents = 'none';
            arrowLeft.style.pointerEvents = 'none';
            setTimeout(()=>{
                arrowRight.style.pointerEvents = 'auto';
                arrowLeft.style.pointerEvents = 'auto';
            },900);
            
            if(cont === slides.length - 1) {
                arrowRight.style.display = 'none';
            } else {
                arrowRight.style.display = 'block';
            }
            if(cont !== 0) {
                arrowLeft.style.display = 'block';
            } else {
                arrowLeft.style.display = 'none';
            }

            slides.forEach((elem) => {
                elem.style.height = height + 'px';
                elem.style.left = elem.offsetLeft + carousel.offsetWidth + 'px';
            });
        }

        function prevSlide() {
            cont --;
            arrowRight.style.pointerEvents = 'none';
            arrowLeft.style.pointerEvents = 'none';
            setTimeout(()=>{
                arrowRight.style.pointerEvents = 'auto';
                arrowLeft.style.pointerEvents = 'auto';
            },900);
            if(cont === slides.length - 1) {
                arrowRight.style.display = 'none';
            } else {
                arrowRight.style.display = 'block';
            }
            if(cont !== 0) {
                arrowLeft.style.display = 'block';
            } else {
                arrowLeft.style.display = 'none';
            }
            slides.forEach((elem) => {
                elem.style.left = elem.offsetLeft - carousel.offsetWidth + 'px';
            });
        }

        function openModal() {
            overlay.style.display = "block";
            carousel.style.display = "block";
            resetCarouselSizes();
        }

        function closeModal() {
            carousel.style.display = "none";
            overlay.style.display = "none";
        }