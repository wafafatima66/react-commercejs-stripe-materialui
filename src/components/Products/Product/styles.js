import { makeStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@mui/styles';


export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    // marginTop : '100px'
  },
  media: {
    height: '100px',
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  marginTop : {
    marginTop : '100px'
  },
  heroButtonArea:{
    textAlign: 'center',
  },
  button1:{
    padding: '12px 0px',
    width: '150px',
    background: '#FA4A0C',
    boxShadow: '0px 10px 30px rgba(183, 50, 39, 0.2)',
    borderRadius: '30px',
    border: '#fff',
    color: '#FFFFFF',
    fontSize: '14px',
    },
}));