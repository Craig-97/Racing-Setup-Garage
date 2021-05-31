import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchGames } from "api";
import { getGames, gamesCRUDPending } from "reducers/gameReducer";
import { resultsFilterer } from "utils";
import CircularProgress from "@material-ui/core/CircularProgress";

import { GameCard, GamesHeader } from "../";

import "./GamesList.scss";

export const GamesList = ({ BEM_BASE }) => {
  const dispatch = useDispatch();
  const [filteredGames, setFilteredGames] = useState([]);
  const [filters, setFilters] = useState([
    { field: "name", value: "" },
    { field: "platform", value: ["PC", "Playstation", "Xbox"] },
  ]);

  const { games, isLoading } = useSelector((state) => ({
    games: getGames(state),
    isLoading: gamesCRUDPending(state),
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
  const updateFilteredGames = (value, field) => {
    let newFilters = [...filters];

    newFilters.forEach((filter) => {
      if (filter.field === field) {
        filter.value = value;
      }
    });

    let newFilteredGames = resultsFilterer(games, newFilters);

    setFilters(newFilters);
    setFilteredGames(newFilteredGames);
  };

  const renderGameCards = () => {
    if (filteredGames.length) {
      let gameCards = [];
      filteredGames.map((game, index) =>
        gameCards.push(<GameCard game={game} key={index} />)
      );

      return <div className={`${BEM_BASE}-games__cards`}>{gameCards}</div>;
    }
  };

  return (
    <div className={`${BEM_BASE}-games`}>
      {!isLoading ? (
        <>
          <GamesHeader
            BEM_BASE={BEM_BASE}
            updateFilteredGames={updateFilteredGames}
            filteredGames={filteredGames}
          />
          {renderGameCards()}
        </>
      ) : (
        <div className={`${BEM_BASE}-games__loading`}>
          <CircularProgress size={100} />
          <h2>Loading Games...</h2>
        </div>
      )}
    </div>
  );
};
