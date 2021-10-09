import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const style = {
  maxWidth: '100vw',
  backgroundColor: '#F5F7F7',
}
function App() {
  return (
    <Router style={style}>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
