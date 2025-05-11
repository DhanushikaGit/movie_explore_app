import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay"; // Import the CSS for autoplay
import tmdbApi, { movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import "./hero-slide.scss";

const HeroSlide = () => {
    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 };
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, { params });
                setMovieItems(response.results.slice(0, 4));
            } catch {
                console.log("error");
            }
        };
        getMovies();
    }, []);

    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {movieItems.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="hero-slide__item"
                            style={{
                                backgroundImage: `url(${apiConfig.originalImage(
                                    item.backdrop_path
                                )})`,
                            }}
                        >
                            <div className="hero-slide__item__content">
                                <div className="hero-slide__item__content__info">
                                    <h2 className="title">{item.title}</h2>
                                    <div className="overview">{item.overview}</div>
                                    <div className="btns">
                                        <button>Watch now</button>
                                        <button>Watch trailer</button>
                                    </div>
                                </div>
                                <div className="hero-slide__item__content__poster">
                                    <img
                                        src={apiConfig.w500Image(item.poster_path)}
                                        alt={item.title}
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlide;