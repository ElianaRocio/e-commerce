import slide1 from '../../assets/images/slide1.png';
import slide2 from '../../assets/images/slide2.png';
import slide3 from '../../assets/images/slide3.png';
export default function Slider() {
  return (
    <div className="container-fluid my-3 ">

<div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slide1} className="img-fluid" alt="slide1"width="1300" />
    </div>
    <div className="carousel-item">
    <img src={slide2} className="img-fluid" alt="slide2" width="1300"/>
    </div>
    <div className="carousel-item">
    <img src={slide3} className="img-fluid" alt="slide3" width="1300"/>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Anterior</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Más delicias</span>
  </button>
</div>
    </div>
    
  )
}