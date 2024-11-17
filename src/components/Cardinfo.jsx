import img1 from '../image/img.jpg';
export default function Cardinfo(prop){
    return(
<div className="container">
<div className="card" style={{width: "18rem"}}>
  <img src={img1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Information</h5>
    <p className="card-text">{prop.a}</p>
    <p className="card-text">{prop.b}</p>
    <p className="card-text">{prop.c}</p>
  </div>
</div>
</div>
    );
}