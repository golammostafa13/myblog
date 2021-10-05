import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const style = {
  maxWidth: '100vw',
  backgroundColor: '#F5F7F7',
}
function App() {
  return (
    <div style={style}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
