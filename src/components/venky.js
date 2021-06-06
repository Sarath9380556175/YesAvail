import React from 'react'
import {motion} from 'framer-motion';
import queryString  from 'query-string';
import axios from 'axios'
import '../styles/pavan.css'
class Venky extends React.Component{
   
     componentDidMount()
     {
         const skr=queryString.parse(this.props.location.search);
         
axios({
    url:'http://localhost:2021/orders',
    method:'POST',
    headers:{'content-Type':'application/json'},
    data:{
        order:skr.name,
        email:skr.email,
        orderid:skr.orderid,
        orderimage:skr.image,
        ordercost:skr.cost
    }
})

     }

     home=()=>{
         this.props.history.push('/')
     }
    render()
    {
    
        return(
            <div>
        
            
            <div className="text-center">
                <br/>
                <br/>

              

<motion.div initial={{x:'100vw',rotate:180,color:'red'}} style={{fontSize:'30px',paddingTop:'200px'}}   animate={{x:0,rotate:360,color:'white',scale:[0.5,0.6,0.5,0.7]}} transition={{delay:2,type:'spring',stiffness:30,scale:{yoyo:Infinity}}}>Thankyou for your order :)</motion.div>

            </div>
            </div>
        )
    }
}
 export default Venky;