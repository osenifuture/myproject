import Cars from "./Cars";

const About = () => {
    return(
        <div  className="about-container">
           

           {
            Cars.map((Car) => {
                const  {name, year, color, chasisNumber, engineNumber,imageUrl} = Car;

                return(

                    <div key={Car.id} className="car-card">
                        <h2>{name}</h2>
                        <div className="info">
                            <p>YEAR : {year}</p>
                            <span>COLOR : {color}</span>
                            <p>chasisNO : {chasisNumber}</p>
                            <p>ENGINE NO : {engineNumber}</p>
                        </div>
                        <img src={imageUrl} alt="/" />
                    </div>
                )
            })
           }



        </div>
    )
}

export default About;