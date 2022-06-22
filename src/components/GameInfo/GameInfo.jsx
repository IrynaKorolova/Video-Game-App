import { useState } from 'react';
import { useEffect } from 'react';
import { getGameDetails } from '../../api/games';
import './GameInfo.css';
import { useParams, useNavigate } from 'react-router-dom';

export default function GameInfo() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState({});
  useEffect(() => {
    getGameDetails(slug)
      .then((response) => setGame(response.data))
      .catch((error) => {
        console.log(error);
        navigate('/404', { replace: true });
      });
  }, [slug]);

  return <div className="container">{game.name}</div>;
}
