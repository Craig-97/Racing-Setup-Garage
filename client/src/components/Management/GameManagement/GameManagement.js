import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MaterialTable from 'material-table';
import { GameForm } from '../../Forms';

import { fetchGames, deleteGame } from '../../../api';
import { getGames, gamesCRUDPending } from '../../../reducers/gameReducer';

import './GameManagement.scss';

export const GameManagement = ({ BEM_BASE }) => {
  const dispatch = useDispatch();
  const SHOW_MESSAGE_DISPLAY_TIME = 5000;
  const [gameData, setGameData] = useState([]);
  const [editGameObj, setEditGameObj] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const { games, isLoading } = useSelector(state => ({
    games: getGames(state),
    isLoading: gamesCRUDPending(state)
  }));

  useEffect(() => {
    if (!games || !games.length) {
      dispatch(fetchGames());
    }
  }, [dispatch]);

  useEffect(() => {
    let newGames = [...games];

    if (newGames && newGames.length) {
      newGames.forEach(game => {
        if (game.platform && Array.isArray(game.platform)) {
          game.platform = game.platform.join(', ');
        }
      });

      setGameData(newGames);
    }
  }, [games]);

  const hideMessageTimeout = () => {
    setTimeout(() => {
      setShowMessage(false);
    }, SHOW_MESSAGE_DISPLAY_TIME);
  };

  const deleteGameById = rowData => {
    if (rowData && rowData._id) {
      setShowMessage(true);

      if (editGameObj._id === rowData._id) {
        setEditGameObj(null);
      }

      dispatch(deleteGame(rowData._id));
    }
  };

  const editGame = rowData => {
    const { _id, name, platform, imageURL, developer, releaseDate } = rowData;
    const game = { _id, name, platform, imageURL, developer, releaseDate };

    if (game.platform) {
      game.platform = game.platform.split(', ');
    }

    setEditGameObj(game);
  };

  return (
    <Fragment>
      <h1 className={`${BEM_BASE}-header`}>Games Form</h1>

      <GameForm
        BEM_BASE={BEM_BASE}
        game={editGameObj}
        setShowMessage={value => setShowMessage(value)}
        showMessage={showMessage}
        hideMessageTimeout={hideMessageTimeout}
      />
      <div className={`${BEM_BASE}-table`}>
        <MaterialTable
          columns={[
            { title: 'Name', field: 'name' },
            { title: 'Platforms', field: 'platform' },
            { title: 'Developer', field: 'developer' },
            { title: 'Release Date', field: 'releaseDate', type: 'date' }
          ]}
          data={gameData}
          title='Games'
          actions={[
            {
              icon: 'edit',
              tooltip: 'Edit Game',
              onClick: (event, rowData) => editGame(rowData)
            },
            {
              icon: 'delete',
              tooltip: 'Delete Game',
              onClick: (event, rowData) => deleteGameById(rowData)
            }
          ]}
          options={{
            pageSize: 10,
            actionsColumnIndex: -1
          }}
        />
      </div>
    </Fragment>
  );
};
