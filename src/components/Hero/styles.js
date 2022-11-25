import { makeStyles } from '@material-ui/core/styles'
import hero from '../../assets/hero.jpg'

const drawerWidth = 0

export default makeStyles((theme) => ({
    hero : {
      // position: 'absolute',
      // width: '100%',
      height: '100vh',
      // left: '0px',
      // top: '-1px',
      background: 'linear-gradient(0deg, rgba(23, 16, 16, 0.2), rgba(23, 16, 16, 0.6)), url('+hero+')',
      backgroundSize: 'cover',
      // height: '300px',
      // display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heroText : {
        fontWeight: '700',
        fontSize: '50px',
        lineHeight: '80px',
        color: '#FFFFFF',
        margin: '0',
        textShadow: '2px 2px 6px #000',
        textAlign: 'center',
        paddingTop : '200px'
    },
    heroSubtext:{
      fontSize: '24px',
      color: '#FFFFFF',
      // margin: '0',
      textAlign: 'center',
      fontWeight: '500',
    },
    heroButtonArea:{
      textAlign: 'center',
    },
    button1:{
      // display: 'flex',
      // flexDirection: 'column',
      // alignItems: 'center',
      padding: '16px 0px',
      width: '200px',
      background: '#FA4A0C',
      boxShadow: '0px 10px 30px rgba(183, 50, 39, 0.2)',
      borderRadius: '30px',
      border: '#fff',
      color: '#FFFFFF',
      fontSize: '24px',
      },
}));