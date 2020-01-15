import React from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputLabel from '@material-ui/core/InputLabel';

import './GamesNameSearch.scss';

export const GamesNameSearch = ({ updateFilteredGames, filteredGames }) => {
  const names = filteredGames && filteredGames.length ? filteredGames.map(game => game.name) : [];

  /* CALLED WHEN ENTER IS HIT */
  const onChange = value => {
    if (value) updateFilteredGames(value, 'name');
  };

  /* CALLED EVERY SINGLE CHANGE */
  const onInputChange = (value, reason) => {
    if (reason === 'clear' || !value) {
      updateFilteredGames('', 'name');
    }
  };

  return (
    <div className='games-filters__search'>
      <InputLabel
        className='filters-search__label'
        htmlFor='filters-search__autocomplete'
      >
        Name
      </InputLabel>
      <Autocomplete
        className='filters-search__autocomplete'
        freeSolo
        options={names}
        onChange={(event, newValue) => onChange(newValue)}
        onInputChange={(event, value, reason) => onInputChange(value, reason)}
        renderInput={params => (
          <TextField
            className='search-autocomplete__textfield'
            {...params}
            fullWidth
          />
        )}
      />
    </div>
  );
};
