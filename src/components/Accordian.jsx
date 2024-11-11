import PropTypes from 'prop-types'
import { useState } from 'react';

export default function Accordian(props){
const [i , setI] = useState(0);
    function plus(){
        return setI(i+1); 
    }
    function minus(){
        return setI(i-1); 
    }
    return(
        <>
        <div className="container">
<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${props.count}`} aria-expanded="true" aria-controls="collapseOne">
        {props.head}
      </button>
    </h2>
    <div id={props.count}  className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>{props.desc}</strong>
      </div>
    </div>
  </div>
  
</div>

<button className='btn btn-success' onClick={plus}>+</button>
<span>{i}</span>
<button className='btn btn-danger' onClick={minus}>-</button>
        </div>
        </>
    );
}
Accordian.prototype = {
       head : PropTypes.string.isRequired, 
       desc: PropTypes.string.isRequired,
       count: PropTypes.string.isRequired
}



