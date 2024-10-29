import '../App.css';
import img1 from '../image/img.jpg'
import img2 from '../image/img2.avif'
import img3 from '../image/img3.avif'

function Pricing() {
    function handlePlatinum() {
        alert("$200");
    }
    function handleGolden() {
        alert("$500");
    }
    function handleSilver() {
        alert("$800");
    }

    return (
        <>
            <div className="pricing-cards">
                <div className="card  silver-card" style={{ width: "18rem" }}>
                <img src={img1} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Golden</h5>
                        <ul className="card-text">
                            <li>Premium features</li>
                            <li>Priority support</li>
                            <li>Ideal for businesses seeking reliability</li>
                        </ul>
                        <button className='btn btn-primary' onClick={handleGolden}> Check</button>
                    </div>
                </div>
                <div className="card silver-card" style={{ width: "18rem" }}>
                    <div className="card-body">
                    <img src={img2} class="card-img-top" alt="..."/>
                        <h5 className="card-title">Silver</h5>
                        <ul className="card-text">
                            <li>Essential features</li>
                            <li>Affordable pricing</li>
                            <li>Perfect for startups and small businesses</li>
                        </ul>
                        <button className='btn btn-primary' onClick={handleSilver}> Check</button>
                    </div>
                </div>
                <div className="card  silver-card" style={{ width: "18rem" }}>
                <img src={img3} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Platinum</h5>
                        <ul className="card-text">
                            <li>All features included</li>
                            <li>Unlimited access</li>
                            <li>Dedicated support for maximum efficiency</li>
                        </ul>
                        <button className='btn btn-primary' onClick={handlePlatinum}> Check</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;
