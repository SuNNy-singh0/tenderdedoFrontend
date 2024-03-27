import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const reviewdata = [
    {
        name: "Rahul Tyagi",
        img: `/images/download.jpeg`,
        review: 'my project complete before deadline , constractor is skilled and awesome'
    },
    {
        name: "Shivam mishra",
        img: `/images/3.jpeg`,
        review: 'my project complete before deadline , constractor is skilled and awesome'
    },
    {
        name: "Aman goel",
        img: `/images/5.jpeg`,
        review: 'my project complete before deadline , constractor is skilled and awesome'
    },
    {
        name: "namita thapar",
        img: `/images/1.jpeg`,
        review: 'my project complete before deadline , constractor is skilled and awesome'
    },
    {
        name: "muskan thakur",
        img: `/images/2.jpeg`,
        review: 'my project complete before deadline , constractor is skilled and awesome'
    },
    {
        name: "Alakh panday",
        img: `/images/6.jpeg`,
        review: 'my project complete before deadline , constractor is skilled and awesome'
    }

];

function Slider() {
    useEffect(() => {
        const swiper = new Swiper(".slide-container", {
            slidesPerView: 3,
            spaceBetween: 25,
            loop: true,
            centerSlide: true,
            fade: true,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                520: {
                    slidesPerView: 2,
                },
                950: {
                    slidesPerView: 3,
                },
            },
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <div className="slide-container swiper">
            <div className="swiper-wrapper">
                {reviewdata.map((review, index) => (
                    <div className="swiper-slide" key={index}>
                        <div className="image-content">
                            <span className="overlay"></span>
                            <div className="card-image">
                                <img src={review.img} alt="" className="card-img" />
                            </div>
                        </div>
                        <div className="card-content">
                            <h2 className="name">{review.name}</h2>
                            <p className="description">{review.review}</p>
                            <button className="button">View More</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </div>
    );
}

export default Slider;
