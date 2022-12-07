import product from '../images/product.png';
import '../styles/Card.scss';

function Card(props) {
  return (
    <div className="card" class="card" >
      <div class="preview">
        <img src={product} alt="" />
      </div>
      <div class="details">
        <h4 class="title">{props.name}</h4>
        <h3 class="price">{props.price}<small>,99DA</small></h3>
      </div>
    </div>
  );
}

export default Card;
