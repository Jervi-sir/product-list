import '../styles/App.scss';
import RowPerfume from '../components/RowPerfume';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';
import Perfumes from '../perfumes.json';
import '../styles/MediaQuery.scss';

function Home() {
  return (
  <div className="Home">
    <Helmet>
        <title>Pructel | Home</title>
    </Helmet>
    <Header isHome="true"/>
    <div class="results">
      <h1>عطور جيرفي</h1>
      <div class="list-perfume">
        {
          Perfumes.map( (record) => {
            return(
              <RowPerfume name={record.name} price="9000" id={record.id}/>
            )
          })
        }
      </div>
    </div>
    <footer>Copyright to - John Doe</footer>
  </div>
  );
}

export default Home;
