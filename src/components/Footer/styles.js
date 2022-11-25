import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({

  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    justifyContent : 'center'
  },
  image: {
    marginRight: '10px',
  },
  footerArea:{
    width : '100%',
    height : '100px',
    background : '#f2f2f2',
    marginTop : '50px'
  }
}));