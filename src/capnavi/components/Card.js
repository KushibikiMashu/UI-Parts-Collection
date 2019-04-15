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
  },
  boardInfo : {
    color: '#FFFFFF',
  }
};

function SimpleCard(props) {
  const { classes, element } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="default" gutterBottom>
          {element.title}
        </Typography>
      </CardContent>
      <CardActionArea>
        <div className={classes.area} style={{backgroundColor: element.bgcolor}}>
          <Typography className={classes.boardInfo} gutterBottom variant={element.size} component="h2">
            {element.info}
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