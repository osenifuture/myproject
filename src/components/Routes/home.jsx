import "./home.css"
import Fruits from "./Fruits";

const Home = () => {
    return(  
        <div>
            <h1>THE MANGO SPECIES</h1>
            <div className="home-container">
                {
                   Fruits.map((fruit) => {
                    const { name, colour, scientificName, origination, imageUrl} = fruit;
                    return(
                        <div key={fruit.id} className="fruit-container">
                            <h3>{name}</h3>       
                        <div className="fruit-info">
                            <p>COLOUR: {colour}</p>
                            <p>SCIENTIFIC NAME: { scientificName}</p>
                            <p>ORIGINATION: {origination}</p>
                            <div className="image-hover">
                            <img src={imageUrl} alt="" />
                            </div>
                            </div>
                        </div>
                    )

                   })
                }


            </div>
        </div>

    )        
}

export default Home;
