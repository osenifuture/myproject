import './services.css'
import About from './about';
import MOTOR from './PricingSlave';

const Services = () => {
  return (
   <div>
      <div className="container">
        {
          MOTOR.map((motor) => {
            return (
              <div key={motor.id} className='box'>
                <p>{motor.info}</p>
              </div>
            )
          })
        }
      </div>
    <About/>
   </div>
    
  );
};



export default Services;
