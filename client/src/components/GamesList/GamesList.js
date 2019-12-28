import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGames } from '../../api';
import { getGames, getGamesPending } from '../../reducers/gameReducer';

import { GameCard } from '../../components/GameCard';
import { GamesHeader } from '../GamesHeader/GamesHeader';
import './GamesList.scss';

export const GamesList = ({ BEM_BASE }) => {
  const dispatch = useDispatch();
  const [filteredGames, setFilteredGames] = useState([]);

  const { games, isLoading } = useSelector(state => ({
    games: getGames(state),
    isLoading: getGamesPending(state)
  }));
  

  /* FETCHES GAMES ON MOUNT */
  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);


  /* UPDATE FILTERED GAMES WHEN GAME STATE UPDATES */
  useEffect(() => {
    if (filteredGames !== games) setFilteredGames(games);
    // eslint-disable-next-line
  }, [games]);


  /* SETS FILTERED GAMES BASED ON FILTER CHANGES */
  const updateFilteredGames = (filterValues, field) => {
    let newFilteredGames = [];

    games.forEach(game => {
      let include = false;

      filterValues.forEach(filter => {
        if (game[field].includes(filter) && !include) {
          include = true;
        }
      });

      if (include) {
        newFilteredGames.push(game);
      }
    });
    setFilteredGames(newFilteredGames);
  }


  return (
    <div className={`${BEM_BASE}-games`}>
      <GamesHeader
        BEM_BASE={BEM_BASE}
        updateFilteredGames={updateFilteredGames}
      />

      {filteredGames?.length &&
        filteredGames.map((game, index) => (
          <GameCard game={game} key={index} />
        ))}

      {isLoading && <p>Loading Games...</p>}
    </div>
  );
};
