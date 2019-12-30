import React from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputLabel from '@material-ui/core/InputLabel';

import './GamesNameSearch.scss';

export const GamesNameSearch = ({ BEM_BASE, updateFilteredGames, games }) => {
  const names = games && games.length ? games.map(game => game.name) : [];

  /* CALLED WHEN ENTER IS HIT */
  const onChange = value => {
    if (value) updateFilteredGames(value, 'name');
  };

  /* CALLED EVERY SINGLE CHANGE */
  const onInputChange = (value, reason) => {
    if (reason === 'clear' || !value ) {
      updateFilteredGames('', 'name');
    }
  };

  return (
    <div className={`${BEM_BASE}-games-search`}>
      <InputLabel htmlFor={`${BEM_BASE}-games-search__autocomplete`}>
        Name
      </InputLabel>
      <Autocomplete
        className={`${BEM_BASE}-games-search__autocomplete`}
        freeSolo
        options={names}
        onChange={(event, newValue) => onChange(newValue)}
        onInputChange={(event, value, reason) => onInputChange(value, reason)}
        renderInput={params => (
          <TextField
            className={`${BEM_BASE}-games-search__textfield`}
            {...params}
            fullWidth
          />
        )}
      />
    </div>
  );
};
