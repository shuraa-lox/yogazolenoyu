window.onload = function () {
    const slider = document.getElementById("slider");
    const images = document.querySelectorAll(".slider img");
    const dotsContainer = document.getElementById("dots");

    if (slider && images.length > 0 && dotsContainer) {
        //точки
        images.forEach((img, i) => {
            let dot = document.createElement("div");
            dot.className = "dot";
            if (i === 0) dot.classList.add("active");
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll(".dot");

        //скролл
        slider.addEventListener("scroll", function () {
            const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;

            let closestIndex = 0;
            let closestDistance = Infinity;

            images.forEach((img, i) => {
                const imgCenter = img.offsetLeft + img.offsetWidth / 2;
                const distance = Math.abs(sliderCenter - imgCenter);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = i;
                }
            });

            dots.forEach(dot => dot.classList.remove("active"));
            dots[closestIndex].classList.add("active");
        });
    }

    //картинка на весь экран
    const imagesAll = document.querySelectorAll("img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const close = document.querySelector(".close");
    
    if (lightbox && lightboxImg && close) {
    
        imagesAll.forEach(function (img) {
            img.addEventListener("click", function () {
                lightbox.style.display = "block";
                lightboxImg.src = this.src;
            });
        });
    
        close.onclick = function () {
            lightbox.style.display = "none";
        };
    
        lightbox.onclick = function (e) {
            if (e.target !== lightboxImg) {
                lightbox.style.display = "none";
            }
        };
    }

};