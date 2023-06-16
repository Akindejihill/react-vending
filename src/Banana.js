import {Link} from 'react-router-dom';
import background from './banana.jpeg';

function Banana(){
    return (
        <>
            <div style={{backgroundRepeat: `no-repeat`,backgroundImage : `url(${background})`, width: `500px`, height: `600px`, backgroundSize: `100%`, display : `inline-block` }}>
            </div>
            <div style={{display : `inline-block`, verticalAlign:`top`}}>
                <Link to={'/'}><p>Go back</p></Link>
            </div>
        </>
    );
}

export default Banana;