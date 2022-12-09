import '../styles/App.scss';
import { Helmet } from 'react-helmet';
import '../styles/MediaQuery.scss';
import Form from '../components/Form';

function AddProduct() {
  return (
  <div className="AddProduct">
    <Helmet>
        <title>Pructel | Home</title>
    </Helmet>
    
    <Form />
    
    <footer>Copyright to - John Doe</footer>
  </div>
  );
}

export default AddProduct;
