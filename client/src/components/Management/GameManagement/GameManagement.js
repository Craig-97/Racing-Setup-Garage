import React, { Fragment, useEffect, useState, useRef, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MaterialTable from 'material-table';
import { GameForm } from '../../Forms';

import { fetchGames, deleteGame } from 'api';
import { getGames } from 'reducers/gameReducer';

import './GameManagement.scss';

export const GameManagement = ({ BEM_BASE }) => {
  const dispatch = useDispatch();
  const [selectedGame, setSelectedGame] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const messageTimeoutRef = useRef(false);
  const SHOW_MESSAGE_DISPLAY_TIME = 5000;

  const { games } = useSelector(state => ({
    games: getGames(state)
  }));

  /* FETCHES GAMES IF NONE IN STORE */
  useEffect(() => {
    if (!games || !games.length) {
      dispatch(fetchGames());
    }
    return () => {
      if (messageTimeoutRef) {
        clearInterval(messageTimeoutRef.current);
      }
    };
    // eslint-disable-next-line
  }, []);

  /* FORMATS GAMEDATA FOR TABLE DISPLAY */
  const gameData = useMemo(() => {
    let newGames = JSON.parse(JSON.stringify(games));

    if (newGames && newGames.length) {
      newGames.forEach(game => {
        if (game.platform && Array.isArray(game.platform)) {
          game.platform = game.platform.join(', ');
        }
      });
    }
    return newGames;
  }, [games]);

  /* HIDES CURRENT MESSAGE AFTER 5 SECONDS */
  const hideMessage = () => {
    if (messageTimeoutRef) {
      clearTimeout(messageTimeoutRef.current);
    }
    messageTimeoutRef.current = setTimeout(() => {
      setShowMessage(false);
    }, SHOW_MESSAGE_DISPLAY_TIME);
  };

  /* DELETES GAME USING ID FROM TABLE DATA */
  const removeGame = rowData => {
    if (rowData && rowData._id) {
      setShowMessage(true);

      if (selectedGame && selectedGame._id === rowData._id) {
        setSelectedGame(null);
      }
      dispatch(deleteGame(rowData._id));
    }
  };

  /* ON EDIT CLICK OF TABLE ROW, GAME CLICKED IS SENT TO FORM */
  const editGame = rowData => {
    const { _id, name, platform, imageURL, developer, releaseDate } = rowData;
    const game = { _id, name, platform, imageURL, developer, releaseDate };

    if (game.platform) {
      game.platform = game.platform.split(', ');
    }
    setSelectedGame(game);
  };

  return (
    <Fragment>
      <GameForm
        BEM_BASE={BEM_BASE}
        selectedGame={selectedGame}
        setSelectedGame={value => setSelectedGame(value)}
        showMessage={showMessage}
        setShowMessage={value => setShowMessage(value)}
        hideMessage={hideMessage}
      />
      <div className={`${BEM_BASE}__table`}>
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
              onClick: (event, rowData) => removeGame(rowData)
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
