import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGames } from '../../api';
import { getGames, getGamesPending } from '../../reducers/gameReducer';
import CircularProgress from '@material-ui/core/CircularProgress';

import { GameCard } from '../../components/GameCard';
import { GamesHeader } from '../GamesHeader/GamesHeader';

import './GamesList.scss';

export const GamesList = ({ BEM_BASE }) => {
  const dispatch = useDispatch();
  const [filteredGames, setFilteredGames] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    platform: ['PC', 'Playstation', 'Xbox']
  });

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
    let newFilters = { ...filters };
    let newFilteredGames = [];

    if (newFilters[field]) {
      newFilters[field] = filterValues;
    }

    games.forEach(game => {
      let include = false;

      Object.entries(newFilters).forEach(([field, values]) => {
        // MULTI SELECT
        if (values.length) {
          values.forEach(value => {
            if (game[field] && game[field].includes(value) && !include) {
              include = true;
            }
          });
          // SEARCH FIELD
        } else if (field === 'search' && !game.name.includes(values)) {
          include = false;
        }
      });
      if (include) {
        newFilteredGames.push(game);
      }
    });

    setFilters(newFilters);
    setFilteredGames(newFilteredGames);
  };

  const renderGameCards = () => {
    if (filteredGames.length) {
      let gameCards = [];
      filteredGames.map((game, index) =>
        gameCards.push(<GameCard game={game} key={index} />)
      );

      return gameCards;
    }
  };

  return (
    <div className={`${BEM_BASE}-games`}>
      {!isLoading ? (
        <>
          <GamesHeader
            BEM_BASE={BEM_BASE}
            updateFilteredGames={updateFilteredGames}
          />
          {renderGameCards()}
        </>
      ) : (
        <>
          <CircularProgress /> <p>Loading Games...</p>
        </>
      )}
    </div>
  );
};
