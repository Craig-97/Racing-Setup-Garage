import React from 'react';

import { GamesPlatformSelect } from '../GamesPlatformSelect';

import './GamesHeader.scss';

export const GamesHeader = ({ BEM_BASE, updateFilteredGames }) => {
  return (
    <>
      <h4 className={`${BEM_BASE}-games__header`}>Games</h4>
      <GamesPlatformSelect
        BEM_BASE={BEM_BASE}
        updateFilteredGames={updateFilteredGames}
      />
    </>
  );
};
