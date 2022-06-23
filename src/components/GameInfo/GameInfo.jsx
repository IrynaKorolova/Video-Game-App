import { useState } from "react";
import { useEffect } from "react";
import { getGameDetails } from "../../api/games";

import "./GameInfo.css";

import { useParams, useNavigate, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";

export default function GameInfo() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState({});
  useEffect(() => {
    getGameDetails(slug)
      .then((response) => setGame(response.data))
      .catch((error) => {
        console.log(error);
        navigate("/404", { replace: true });
      });
  }, [slug]);

  return (
    <div className="container">
      <div className="game-info-wrap">
        <Link to="/">&#8249; Back to main</Link>
        <h2 className="game-info-title">{game.name}</h2>
        <h3 className="game-info-subtitle">Game website</h3>
        <a
          className="game-info-link"
          href={game.website}
          target="_blank"
          rel="noreferrer"
        >
          {game.website}
        </a>
        <h3 className="game-about-subtitle">About</h3>
        <p className="game-info-description">{game.description_raw}</p>
      </div>
      <div className="game-slider-wrap">
        <Swiper
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
          <SwiperSlide>
            <img alt="img" src={game.background_image}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img alt="img" src={game.background_image_additional}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img alt="img" src={game.background_image}></img>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
