import React from 'react';

import { GamesNameSearch } from '../GamesNameSearch';
import { GamesPlatformSelect } from '../GamesPlatformSelect';

import './GamesHeader.scss';

export const GamesHeader = ({ BEM_BASE, updateFilteredGames, games }) => {
  return (
    <>
      <h4 className={`${BEM_BASE}-games__header`}>Games</h4>
      <div className={`${BEM_BASE}-games__filters`}>
        <GamesNameSearch
          BEM_BASE={BEM_BASE}
          updateFilteredGames={updateFilteredGames}
          games={games}
        />
        <GamesPlatformSelect
          BEM_BASE={BEM_BASE}
          updateFilteredGames={updateFilteredGames}
        />
      </div>
    </>
  );
};
