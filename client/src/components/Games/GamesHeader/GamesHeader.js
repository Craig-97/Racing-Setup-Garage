import React from 'react';

import { GamesNameSearch, GamesPlatformSelect } from '../';

import './GamesHeader.scss';

export const GamesHeader = ({ BEM_BASE, updateFilteredGames, filteredGames }) => {
  return (
    <>
      <h1 className={`${BEM_BASE}-games__header`}>Games</h1>
      <div className={`${BEM_BASE}-games__filters`}>
        <GamesNameSearch updateFilteredGames={updateFilteredGames} filteredGames={filteredGames} />
        <GamesPlatformSelect updateFilteredGames={updateFilteredGames} />
      </div>
    </>
  );
};
