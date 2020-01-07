import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import MaterialTable from "material-table";
import { GameForm } from "../../Forms";

import { fetchGames } from "../../../api";
import { getGames, gamesCRUDPending } from "../../../reducers/gameReducer";

import "./GameManagement.scss";

export const GameManagement = ({ BEM_BASE }) => {
  const dispatch = useDispatch();
  const [gameData, setGameData] = useState([])

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
    let data = [...games];

    if (games && games.length) {
      data.forEach(game => {
        if (game.platform && Array.isArray(game.platform)) {
          game.platform = game.platform.join(", ");
        }
      });

      setGameData(data);
    }
  }, [games]);

  return (
    <Fragment>
      <h1 className={`${BEM_BASE}-header`}>Games Form</h1>

      <GameForm />
      <div style={{ margin: "0 2rem", padding: "0 0 2rem" }}>
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
              onClick: (event, rowData) => {
                alert("You edited " + rowData.name);
              }
            },
            {
              icon: "delete",
              tooltip: "Delete Game",
              onClick: (event, rowData) =>
                confirm("You want to delete " + rowData.name)
            }
          ]}
        />
      </div>
    </Fragment>
  );
};
