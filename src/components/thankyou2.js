import React from 'react';
import '../styles/thankyou.css';
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';
class Thankyous extends React.Component{
    render()
    {
        return(
            <div className="text-center">
                <br/>
                <br/>
                <br/>
                
           <Roll top cascade><span className="text-white rounded text-center">Thank you:)</span></Roll><br/>
            <br/>
          <Bounce top cascade><span className="thankyou rounded text-center">Your response has been recorded</span></Bounce>

            </div>
           
        )
    }
}

export default Thankyous;