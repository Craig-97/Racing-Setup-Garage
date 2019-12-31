import React from 'react';
import Img from 'react-image';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './GameCard.scss';

export const GameCard = ({ game }) => {
  return (
    <Card className="Game-card">
      <CardActionArea>
        <Img className="Game-card__image" src={game.imageURL} alt={game.name} />
        <CardContent>
          <Typography gutterBottom component='h4'>
            {game.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
