import { getAllData } from "../api/base_firebase.js";

const SwiperConfig = () => {
    new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

}


const cardWrapper = document.querySelector('.card-wrapper');
document.addEventListener("DOMContentLoaded", async () => {
    //GET-ALL-DATA
    try {
        await getAllData().then(async (response) => {
            cardWrapper.innerHTML = '';
            response.forEach((doc) => {
                cardWrapper.innerHTML += ` <div class="card swiper-slide">
        <div class="image-content">
            <span class="overlay"></span>

            <div class="card-image">
                <img src=${doc.data().img} alt="" class="card-img">
            </div>
        </div>

        <div class="card-content">
            <h2 class="name">${doc.data().name}</h2>
            <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>

            <button class="button">View More</button>
        </div>
    </div>`
            });
            await SwiperConfig();
        });
    } catch (error) {
        console.error(`${error}: Firebase error!!`);
    }
});