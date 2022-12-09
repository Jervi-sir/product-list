import '../styles/RowPerfume.scss';

function RowPerfume(props) {
  return (
    <a href={`/perfume/${props.id}`} className="RowPerfume" class="row-perfume" >
      <div  class="details">
        <div class="title" >{props.name}</div>
      </div>
    </a>
  );
}

export default RowPerfume;
