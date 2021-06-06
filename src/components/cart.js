import React from 'react';
import axios from 'axios';
import qs from 'query-string';
import '../styles/cart.css'
class Cart extends React.Component{

    constructor()
    {
        super();
        this.state={
            cartdetails:[]
        }
    }

    componentDidMount()
    {
const skr=qs.parse(this.props.location.search)
        axios({
            url:'http://localhost:2021/getcartdetails',
            method:'POST',
            headers:{'content-Type':'application/json'},
            data:
            {
                OrderId:skr.orderid

            }
        })

        .then(res=>this.setState({cartdetails:res.data.carts}))

        .catch(err=>console.log(err))
    }

    order=()=>{
        const kkr=qs.parse(this.props.location.search)
        this.props.history.push(`/shiva/?orderid=${kkr.orderid}&&tname=${kkr.tname}`)
    }
    render()
    {
        const {cartdetails}=this.state;
        return(
            
            <div>
                {cartdetails.length!==0?cartdetails.map((item)=>{
                    return  <div className="skr rounded">
                    <img src={`../${item.Tshirtimage}`} className="pl-1 pt-1" width="100px" height="100px" alt="Nothing Found" />
                    <div style={{display:'inline-block',color:'blueviolet'}} className="pl-3">{item.Tshirtname}</div>
                    <div className="pl-3 pt-3" style={{display:'inline-block'}}>Rs.&nbsp;{item.Tshirtcost}</div>
                    <button className="btn btn-info btn-sm" style={{marginLeft:'50px'}} onClick={this.order}>{item.Ordernow}</button>
                             </div>
                }):null}
           
            </div>
        )
    }
}

export default Cart;