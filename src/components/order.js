import React from 'react';
import qs from 'query-string';
import axios from 'axios';
import Zoom from 'react-reveal/Zoom';
import '../styles/order.css';
 class Order extends React.Component{
     constructor()
     {
         super();
         this.state=
         {
            myorders:[]
         }
     }
     componentDidMount()
     {
         const skr=qs.parse(this.props.location.search)
        axios({
            url:'http://localhost:2021/order',
            method:'POST',
            headers:{'content-Type':'application/json'},
            data:{
            orderid:skr.orderid
            }
        })

        .then(res=>this.setState({myorders:res.data.order}))

        .catch(err=>console.log(err))
     }

     render()
   {
       const {myorders}=this.state;
     return(
         <div>
  <div className="text-center mt-3 text-white" style={{marginBottom:'50px'}}>Your orders</div>
  {myorders.map((item)=>{
      return <Zoom bottom cascade>
      <div className="order rounded mt-3 ml-3" style={{display:'inline-block'}}>
    <img src={`../${item.orderimage}`} width="100px" height="100px" alt="Nothing Found" /> 
      <div style={{color:'deepskyblue',fontSize:'20px',display:'inline-block'}} className="ml-2">{item.ordername}</div>
      <div style={{color:'deepskyblue',fontSize:'20px',display:'inline-block'}} className="mt-2 pl-3">Rs.{item.ordercost}</div>
      
      </div>
      </Zoom>
  })}

  {myorders.length===0?<Zoom bottom cascade><div className="mt-3" style={{color:'deepskyblue',fontSize:'20px'}}>No orders found</div></Zoom>:null}
         </div>
     )
 }

 }

 export default Order;