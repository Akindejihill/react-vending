import {Link} from 'react-router-dom';
import background from './machine.jpeg';

function VendingMachine(){
    return (
        <>
            <div style={{backgroundImage : `url(${background})`, width: `500px`, height: `600px`, backgroundSize: `100%`, display : `inline-block` }}>
            </div>
            <div style={{display : `inline-block`, verticalAlign:`top`}}>
                <Link to={'/beer'}><p>Beer</p></Link>
                <Link to={'/banana'}><p>Banana</p> </Link>
                <Link to={'/sage'}><p>Sage advice</p></Link>
            </div>
        </>
    );
}

export default VendingMachine;