import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  container : {
    margin : '0 auto' ,
    width : '1400px',
  },
  heroText : {
    fontWeight: '700',
    fontSize: '50px',
    lineHeight: '80px',
    color: '#FA4A0C',
    textShadow: '2px 2px 6px #000',
    textAlign: 'center',
    paddingTop : '200px',
    display : 'block'
},
}));