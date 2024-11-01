import '../App.css';
import img1 from '../image/karachi.jpg'
import img2 from '../image/lahore.jpg'
import img3 from '../image/Isl.jpg'
import img4 from '../image/quetta.jpg'
import img5 from '../image/peshawar.webp'
import img6 from '../image/multan.jpg'
import img7 from '../image/sialkot.jpg'
import img8 from '../image/fsl.jpg'

function Cards() {
    function handlekhi() {
        alert(`Special Dish: Biryani
    Famous Places:
    - Clifton Beach
    - Quaid-e-Azam's Mausoleum
    - Empress Market`);
    }
    function handleLhr() {
        alert(`Special Dish: Nihari
    Famous Places:
    - Badshahi Mosque
    - Lahore Fort 
    -Shalimar Gardens`);
    }
    function handleIsl() {
        alert(`Special Dish: Chapli Kebab
    Famous Places:
    - Faisal Mosque
    - Daman-e-Koh 
    -Rawal Lake`);
    }
    function handlepsh() {
        alert(`Special Dish: Kabuli Pulao
    Famous Places:
    - Qissa Khwani Bazaar
    - Bala Hisar Fort
    -Khyber Pass`);
    }
    function handlemultan() {
        alert(`Special Dish: Sohan Halwa
    Famous Places:
    - Shrine of Bahauddin Zakariya
    - Multan Fort
    -Hussain Agahi Bazaar`);
    }
    function handlefsl() {
        alert(`Special Dish: Dahi Bhalla
    Famous Places:
    - Clock Tower
    - Jinnah Garden
    - Gatwala Wildlife Park`);
    }
    function handlesialkot() {
        alert(`Special Dish: Tikka
    Famous Places:
    - Iqbal Manzil
    - Marala Headworks
    - Sialkot Fort`);
    }
    function handlequetta() {
        alert(`Special Dish: Sajji
    Famous Places:
    - Hanna Lake
    - Quaid-e-Azam Residency
    - Ziarat Valley`);
    }

    return (
        <>
            <div className='container'>
                <div className='row cityinfo-cards'>
                    <div className='col-md-3'>
                        <div className="card  silver-card" style={{ width: "18rem" }}>
                            <img src={img1} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Karachi</h3>
                                <p className="card-text"> 
                                    The city of lights, known for its beaches and vibrant culture.
                                </p>
                                <button className='btn btn-primary' onClick={handlekhi}> More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card  silver-card" style={{ width: "18rem" }}>
                            <img src={img2} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Lahore</h3>
                                <p className="card-text">
                                The heart of Pakistan, famous for its history and cuisine.
                                </p>
                                <button className='btn btn-primary' onClick={handleLhr}> More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card  silver-card" style={{ width: "18rem" }}>
                            <img src={img3} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Islamabad</h3>
                                <p className="card-text">
                                The beautiful capital city known for its greenery and architecture.
                                </p>
                                <button className='btn btn-primary' onClick={handleIsl}> More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card  silver-card" style={{ width: "18rem" }}>
                            <img src={img4} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Peshawar</h3>
                                <p className="card-text">
                                The ancient city with rich culture and delicious food.
                                </p>
                                <button className='btn btn-primary' onClick={handlepsh}> More Info</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row cityinfo-cards mt-5'>
                    <div className='col-md-3'>
                        <div className="card  silver-card" style={{ width: "18rem" }}>
                            <img src={img5} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Multan</h3>
                                <p className="card-text">
                                The city of saints, famous for its shrines and mangoes.
                                </p>
                                <button className='btn btn-primary button' onClick={handlemultan}> More Info</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card  silver-card" style={{ width: "18rem" }}>
                            <img src={img6} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Faislabad</h3>
                                <p className="card-text">
                                The industrial hub known for its textile industry.
                                </p>
                                <button className='btn btn-primary' onClick={handlefsl}> More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card  silver-card" style={{ width: "18rem" }}>
                            <img src={img7} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Sialkot</h3>
                                <p className="card-text">
                                A city famous for sports goods and rich history.   
                                </p>
                                <button className='btn btn-primary' onClick={handlesialkot}> More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card  silver-card" style={{ width: "18rem" }}>
                            <img src={img8} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Quetta</h3>
                                <p className="card-text">
                                The capital of Balochistan, known for its scenic mountains.
                                </p>
                                <button className='btn btn-primary' onClick={handlequetta}> More Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
