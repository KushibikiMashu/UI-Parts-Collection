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
  cardContent: {
    paddingBottom: 12,
    marginBottom: 3,
    borderBottom: '1px solid #e2e8f0',
  },
  title: {
    marginBottom: 0,
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

function ChartCard(props) {
  const { classes, title, chart } = props;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
      </CardContent>
      <CardActionArea>
        {chart}
      </CardActionArea>
    </Card>
  );
}

ChartCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChartCard);