import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 275,
  },
  title: {
    fontSize: 14,
  },
  area: {
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#23C6F8',
  },
  boardInfo : {
    color: '#FFFFFF',
  }
};

function SimpleCard(props) {
  const { classes, element } = props;
  classes.area.backgroundColor = element.bgcolor

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {element.title}発行済株式数
        </Typography>
      </CardContent>
      <CardActionArea>
        <div className={classes.area}>
          <Typography className={classes.boardInfo} gutterBottom variant="h4" component="h2">
            {element.info}234,520,300株
          </Typography>
        </div>
      </CardActionArea>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);