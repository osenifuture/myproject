
const CarCard = ({car}) => {

    const  {name, year, color, chasisNO, engineNumber} = car;

    return(
        <div key={car.id} className="car-card">
            <h2>{name}</h2>
            <div className="info">
                <p>YEAR : {year}</p>
                <span>COLOR : {color}</span>
                <p>CHASIS NO : {chasisNO}</p>
                <p>ENGINE NO : {engineNumber}</p>
            </div>
            <img src={car.imageUrl} alt="" />      
        </div>



    );

}

export default CarCard;