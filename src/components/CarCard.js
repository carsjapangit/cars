import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconText from './IconText';
import { Container, Row, Col } from 'reactstrap';

const styles = theme => ({

  card: {
    maxWidth: 700,
    marginRight:10,
    marginLeft:10,
    marginTop:10,
    marginBottom:10,
    '&:hover': {
      boxShadow: '0 2px 8px 3px rgba(0,0,0,.12)',
      transition: 'box-shadow .6s,background-color .6s,color .6s,opacity .6s,transform .6s',
      transform: 'translateY(-4px)'
   }
  },
  cardHeader: {
  padding:8,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class CarCard extends React.Component {

  constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { expanded: false };
  this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState(prevState => ({
        expanded: !prevState.expanded
      }));
    }


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.cardOuter}>


        <Card className={classes.card}>

        <CardMedia
          className={classes.media}
          image="images/cars_01.jpg"
          title="Hyundai"
        />

        <Container>
          <Row className="show-grid xsHidden" >

                <IconText iconName="tachometer-alt" text={this.props.cardData.val1}></IconText>

              <IconText iconName="gas-pump-slash" text={this.props.cardData.val2}></IconText>

              <IconText iconName="tachometer-alt"  text={this.props.cardData.val3}></IconText>
          
          </Row>
        </Container>
            <Typography component="p">
              Best Seller
            </Typography>

          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>

        </Card>
      </div>
    );
  }
}

CarCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CarCard);
