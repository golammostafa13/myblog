import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    flex: 2,
    maxHeight:'100vh',
    backgroundColor: '#EEEEEE',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
      marginTop: '10px',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: 'white',
  }
});

export default useStyles;