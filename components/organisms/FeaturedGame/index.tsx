import GameItem from '../../molecules/GameItem';
import { useCallback, useEffect, useState } from 'react';
import { getFeaturedGame } from '../../../serviceAPI/player';
import { GameItemTypes } from '../../../serviceAPI/data-type';
export default function FeaturedGame() {
  const [gameList, setGameList] = useState([]);
  const getFeatureGameList = useCallback(async () => {
    const data = await getFeaturedGame();
    setGameList(data);
  }, [getFeaturedGame]);
  useEffect(() => {
    getFeatureGameList();
    // async function apiLandingPage() {
    //   const response = await axios.get('https://express-topupgame.herokuapp.com/api/v1/players/landingpage');
    //   setGameList(response.data.data);
    // }
    // apiLandingPage();
  }, []);
  const API_UPLOADS = process.env.NEXT_PUBLIC_IMG;
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4" data-aos="fade-up">
          {gameList.map((item: GameItemTypes) => {
            return (
              <GameItem key={item._id} id={item._id} title={item.name} category={item.category.name} thumbnail={`${API_UPLOADS}/${item.thumbnail}`} />
            );
          })}
          {/* <GameItem title="Super Mechs" category="category" thumbnail="/img/Thumbnail-1.png" />
          <GameItem title="Call of Duty: Modern" category="category" thumbnail="/img/Thumbnail-2.png" />
          <GameItem title="Mobile Legends" category="category" thumbnail="/img/Thumbnail-3.png" />
          <GameItem title="Clash of Clans" category="category" thumbnail="/img/Thumbnail-4.png" />
          <GameItem title="Valorant" category="category" thumbnail="/img/Thumbnail-5.png" /> */}
        </div>
      </div>
    </section>
  );
}
