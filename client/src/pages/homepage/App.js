import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getGames } from '../../actions/gameActions';
import { Navbar } from '../../components/Navbar';
import { GameCard } from '../../components/GameCard';

import './App.scss';

const App = () => {
  const { games, isLoading } = useSelector(state => ({
    games: state.games.data,
    isLoading: state.games.loading
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
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
