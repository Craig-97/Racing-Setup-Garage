import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import MaterialTable from "material-table";
import { GameForm } from "../../Forms";

import { fetchGames, deleteGame } from "../../../api";
import { getGames, gamesCRUDPending } from "../../../reducers/gameReducer";

import "./GameManagement.scss";

export const GameManagement = ({ BEM_BASE }) => {
  const dispatch = useDispatch();
  const [gameData, setGameData] = useState([]);
  const [editGameObj, setEditGameObj] = useState(null);

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
          game.platform = game.platform.join(", ");
        }
      });

      setGameData(newGames);
    }
  }, [games]);

  const deleteGame = rowData => {
    confirm("You want to delete " + rowData.name);
  };

  const editGame = rowData => {
    const { name, platform, imageURL, developer, releaseDate } = rowData;
    const game = { name, platform, imageURL, developer, releaseDate };

    if (game.platform) {
      game.platform = game.platform.split();
    }

    setEditGameObj(game);
  };

  return (
    <Fragment>
      <h1 className={`${BEM_BASE}-header`}>Games Form</h1>

      <GameForm BEM_BASE={BEM_BASE} game={editGameObj}/>
      <div className={`${BEM_BASE}-table`}>
        <MaterialTable
          columns={[
            { title: "Name", field: "name" },
            { title: "Platforms", field: "platform" },
            { title: "Developer", field: "developer" },
            { title: "Release Date", field: "releaseDate", type: "date" }
          ]}
          data={gameData}
          title="Games"
          actions={[
            {
              icon: "edit",
              tooltip: "Edit Game",
              onClick: (event, rowData) => editGame(rowData)
            },
            {
              icon: "delete",
              tooltip: "Delete Game",
              onClick: (event, rowData) => deleteGame(rowData)
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