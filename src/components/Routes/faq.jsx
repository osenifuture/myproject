import Cars from "./Cars";
import CarCard from "./Car-card";






const Faq = () => {

    return(
        <div>
           
       
       {
        Cars.map((car) => {
            return(
                <CarCard key={car.id} car={car} />
            )
        })
       }
      
      
        </div>
    
    
    )
}

export default Faq;