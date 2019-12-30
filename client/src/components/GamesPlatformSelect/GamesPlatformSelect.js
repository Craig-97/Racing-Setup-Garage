import React, { useState } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';

import './GamesPlatformSelect.scss';

export const GamesPlatformSelect = ({ BEM_BASE, updateFilteredGames }) => {
  const initialPlatforms = ['PC', 'Playstation', 'Xbox'];
  const [selectedPlatforms, setSelectedPlatforms] = useState(initialPlatforms);

  const onChange = event => {
    let values = event.target.value;
    if (values.length) {
      setSelectedPlatforms(values);
      updateFilteredGames(values, 'platform');
    }
  };

  return (
    <div className={`${BEM_BASE}-games-select`}>
      <InputLabel htmlFor={`${BEM_BASE}-games-select__dropdown`}>
        Platform
      </InputLabel>
      <Select
        className={`${BEM_BASE}-games-select__dropdown`}
        multiple
        value={selectedPlatforms}
        onChange={onChange}
        input={<Input />}
        renderValue={selected => selected.join(', ')}
      >
        {initialPlatforms.map(platform => (
          <MenuItem key={platform} value={platform}>
            <Checkbox checked={selectedPlatforms.indexOf(platform) > -1} />
            <ListItemText primary={platform} />
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
