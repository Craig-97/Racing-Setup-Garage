import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGames } from '../../api';
import { getGames, getGamesPending } from '../../reducers/gameReducer';

import { Navbar } from '../../components/Navbar';
import { GameCard } from '../../components/GameCard';

import './App.scss';

const App = () => {
  const { games, isLoading } = useSelector(state => ({
    games: getGames(state),
    isLoading: getGamesPending(state)
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
    // eslint-disable-next-line
  }, []);

  return (
    <div className='Homepage'>
      <Navbar />
      <div className='Homepage-games'>
        <h4 className='Homepage-games__header'>Games</h4>
        {games?.length &&
          games.map((game, index) => <GameCard game={game} key={index} />)}
      </div>

      {isLoading && <p>Loading Games...</p>}
    </div>
  );
};

export default App;
