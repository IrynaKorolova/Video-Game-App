import { useState } from "react";
import { useEffect } from "react";

import { getGameDetails, getScreenshots } from "../../api/games";

import { useParams, useNavigate, Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/lazy";
import "./GameInfo.css";

import { Navigation, Pagination } from "swiper";

import { Lazy } from "swiper";
SwiperCore.use([Lazy]);

export default function GameInfo() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState({});
  const [screenshots, setScreenshots] = useState([]);

  useEffect(() => {
    getGameDetails(slug)
      .then((response) => setGame(response.data))
      .catch((error) => {
        console.log(error);
        navigate("/404", { replace: true });
      });
    getScreenshots(slug)
      .then((response) => setScreenshots(response.data.results))
      .catch((error) => {
        console.log(error);
      });
  }, [slug]);

  return (
    <div className="container">
      <div className="game-info-wrap">
        <Link className="game-link" to="/">
          &#8249; Back to main
        </Link>
        <h2 className="game-info-title">{game.name}</h2>
        <h3 className="game-info-subtitle">Game website</h3>
        <a
          className="game-info-link"
          href={game.website}
          target="_blank"
          rel="noreferrer"
        >
          {game.website || "No website available"}
        </a>
        <h3 className="game-about-subtitle">About</h3>
        <p className="game-info-description">{game.description_raw}</p>
      </div>
      <div className="game-slider-wrap">
        {screenshots.length > 0 && (
          <Swiper
            preloadImages={false}
            lazy={true}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {screenshots.map((screenshot) => (
              <SwiperSlide key={screenshot.id}>
                <img
                  className="swiper-lazy"
                  alt="game screenshot"
                  width={screenshot.width}
                  height={screenshot.height}
                  data-src={screenshot.image}
                ></img>
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {screenshots.length === 0 && <h2>No screenshots</h2>}
      </div>
    </div>
  );
}
