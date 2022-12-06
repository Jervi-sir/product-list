import './styles/App.scss';
import Card from './components/Card';
import Header from './components/Header';
import { Helmet } from 'react-helmet';
import Data from './data.json';
import './styles/MediaQuery.scss';

function App() {
  return (
  <div className="App">
    <Helmet>
        <title>Pruclit | Home</title>
    </Helmet>
    <Header />
    <div class="results">
      <h1>Perfume</h1>
      <div class="list">
        {
          Data.map( record => {
            return(
              <Card name={record.name} price="9000"/>
            )
          })
        }
      </div>
    </div>
    <footer>Copyright to - John Doe</footer>
  </div>
  );
}

export default App;
