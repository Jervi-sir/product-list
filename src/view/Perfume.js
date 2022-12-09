import '../styles/App.scss';
import Card from '../components/Card';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';
import Perfumes from '../perfumes.json';
import '../styles/MediaQuery.scss';
import {useParams} from "react-router-dom";

function Perfume(props) {
  const {uuid} = useParams();

  return (
  <div className="Perfume">
    <Helmet>
        <title>Pructel | Perfume</title>
    </Helmet>
    <Header />
    <div class="results">
      <h1>{getPerfume(Perfumes, uuid)}</h1>
      <div class="list">
        <Card name="50cl" price="9000" />
      </div>
    </div>
    <footer>Copyright to - John Doe</footer>
  </div>
  );
}

function getPerfume(json, id) {
  for (var i=0 ; i < json.length ; i++)
  {
    if (json[i]["id"] == id) {
      return (json[i]['name']);
    }
  }
}

export default Perfume;
