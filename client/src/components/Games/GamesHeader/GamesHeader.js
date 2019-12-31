import React from 'react';

import { GamesNameSearch } from '../GamesNameSearch';
import { GamesPlatformSelect } from '../GamesPlatformSelect';

import './GamesHeader.scss';

export const GamesHeader = ({ BEM_BASE, updateFilteredGames, filteredGames }) => {
  return (
    <>
      <h1 className={`${BEM_BASE}-games__header`}>Games</h1>
      <div className={`${BEM_BASE}-games__filters`}>
        <GamesNameSearch
          BEM_BASE={BEM_BASE}
          updateFilteredGames={updateFilteredGames}
          filteredGames={filteredGames}
        />
        <GamesPlatformSelect
          BEM_BASE={BEM_BASE}
          updateFilteredGames={updateFilteredGames}
        />
      </div>
    </>
  );
};
