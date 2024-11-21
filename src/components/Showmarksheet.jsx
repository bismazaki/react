export default function Showmarksheet(prop) {
    return (
        <div className="container">
            <div className="card" style={{ width: "20rem", border: `4px solid balck` , backgroundColor: `grey` , color: `white`}}>
                <div className="card-body">
                    <h5 className="card-title">MARK SHEET:</h5>
                    <p className="card-text">Name: {prop.a}</p>
                    <p className="card-text">Email: {prop.b}</p>
                    <p className="card-text">English: {prop.c}</p>
                    <p className="card-text">Maths: {prop.d}</p>
                    <p className="card-text">Computer: {prop.e}</p>
                    <p className="card-text">Total: {prop.f}</p>
                    <p className="card-text">Percentage: {prop.g}</p>
                </div>
            </div>
        </div>
    );
}