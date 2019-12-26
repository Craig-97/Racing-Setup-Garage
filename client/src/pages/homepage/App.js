import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { getGames } from '../../actions/gameActions';

import './App.scss'

const App = () => {

  const { games, isLoading } = useSelector(state => ({
    games: state.games.data,
    isLoading: state.games.loading
  }));

  const dispatch = useDispatch();

useEffect(() => {
  dispatch(getGames())
  // eslint-disable-next-line
}, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Games
        </p>
        {games?.length && games.map((game, index) => {
        return <li key={index}>{game.name}</li>
        })}
        {isLoading && <p>Loading Games...</p>}
      </header>
    </div>
  );
}

export default App;
