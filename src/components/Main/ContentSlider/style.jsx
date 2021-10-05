import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    flex: 1,
    maxHeight:'100vh',
    backgroundColor: '#EEEEEE',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    overflowY: 'scroll',
  },
  image: {
      marginTop: '10px',
      width: '50px',
      height: '50px',
      backgroundColor: '#1876D2',
      borderRadius: '50%',
  }
});

export default useStyles;
