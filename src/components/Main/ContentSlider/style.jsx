import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    flex: 2,
    maxHeight:'100vh',
    backgroundColor: '#EEEEEE',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    overflowY: 'scroll',
  },
  image: {
      marginTop: '10px',
      width: '45px',
      height: '45px',
      backgroundColor: '#e6e6e6',
      borderRadius: '50%',
  }
});

export default useStyles;
