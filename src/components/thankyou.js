import React from 'react';
import '../styles/thankyou.css';
import Bounce from 'react-reveal/Bounce';
import RubberBand from 'react-reveal/RubberBand';
class Thankyou extends React.Component{
    render()
    {
        return(
            <div className="text-center">
                <br/>
                <br/>
                <br/>
                
            <RubberBand left cascade><span className="text-white rounded text-center">Thank you:)</span></RubberBand><br/>
            <br/>
            <Bounce left cascade><span className="thankyou rounded text-center">You are successfully created account in our application</span></Bounce>

            </div>
           
        )
    }
}

export default Thankyou;