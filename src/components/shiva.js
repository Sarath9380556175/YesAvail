import React from 'react'
import '../styles/siva.css';
import qs from 'query-string'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce'
import axios from 'axios';

    

class Shiva extends React.Component{
    constructor()
    {
        super();
        this.state={
            myname:undefined,
            orderid:undefined,
            idlyimage:'Assets/tshirt1.jpg',
            dosaimage:'Assets/tshirt2.jpg',
            puriimage:'Assets/tshirt3.jpg',
            lemonriceimage:'Assets/tshirt4.jpg',
            eggdosaimage:'Assets/tshirt5.jpg',
            masaladosaimage:'Assets/tshirt6.jpg',
            chapathiimage:'Assets/tshirt7.jpg',
            first:"TrendingTshirt",
            second:"PrintTShirt",
            third:"TShirtFashion",
            fourth:"FashionTShirts",
            fifth:"HipsterTShirts",
            sixth:"HoleTshirt",
            seventh:"HenleyTshirt",
            ordernow:"Ordernow"
        }
    }

    componentDidMount()
    {
        const skr=qs.parse(this.props.location.search);
        const name=skr.tname;
        this.setState({myname:name,orderid:skr.orderid})
    }
    sarath=(skr,ramana)=>{
        const {first,second,third,fourth,fifth,sixth,seventh,orderid,idlyimage,dosaimage,puriimage,lemonriceimage,eggdosaimage,masaladosaimage,chapathiimage,myname}=this.state;
        if(first===skr)
        {
            this.props.history.push(`/address/?name=${first}&&myname=${ramana}&&orderid=${orderid}&&image=${idlyimage}&&sname=${myname}`)
        }
        else  if(second===skr)
        {
            this.props.history.push(`/address/?name=${second}&&myname=${ramana}&&orderid=${orderid}&&image=${dosaimage}&&sname=${myname}`)
        }
        else  if(third===skr)
        {
            this.props.history.push(`/address/?name=${third}&&myname=${ramana}&&orderid=${orderid}&&image=${puriimage}&&sname=${myname}`)
        }
        else  if(fourth===skr)
        {
            this.props.history.push(`/address/?name=${fourth}&&myname=${ramana}&&orderid=${orderid}&&image=${lemonriceimage}&&sname=${myname}`)
        }
        else  if(fifth===skr)
        {
            this.props.history.push(`/address/?name=${fifth}&&myname=${ramana}&&orderid=${orderid}&&image=${eggdosaimage}&&sname=${myname}`)
        }
        else  if(sixth===skr)
        {
            this.props.history.push(`/address/?name=${sixth}&&myname=${ramana}&&orderid=${orderid}&&image=${masaladosaimage}&&sname=${myname}`)
        }
        else  if(seventh===skr)
        {
            this.props.history.push(`/address/?name=${seventh}&&myname=${ramana}&&orderid=${orderid}&&image=${chapathiimage}`)
        }
           
       
    }

    cart=(firsttshirt,firsttshirtcost)=>{
        const {ordernow,orderid,first,second,third,fourth,fifth,sixth,seventh,idlyimage,dosaimage,puriimage,lemonriceimage,eggdosaimage,masaladosaimage,chapathiimage}=this.state;
        if(first===firsttshirt)
        {
          axios({
              url:'http://localhost:2021/cart',
              method:'POST',
            headers:{'content-Type':'application/json'},
              data:
              {
                OrderId:orderid,
                Tshirtimage:idlyimage,
                Tshirtname:firsttshirt,
                Tshirtcost:firsttshirtcost,
                Ordernow:ordernow
              }

       })

       alert('added to cart')

       }
       else if(second===firsttshirt)
       {
        axios({
            url:'http://localhost:2021/cart',
            method:'POST',
          headers:{'content-Type':'application/json'},
            data:
            {
                OrderId:orderid,
              Tshirtimage:dosaimage,
              Tshirtname:firsttshirt,
              Tshirtcost:firsttshirtcost,
              Ordernow:ordernow
            }

     })
     alert('added to cart')
       }

       else if(third===firsttshirt)
       {
        axios({
            url:'http://localhost:2021/cart',
            method:'POST',
          headers:{'content-Type':'application/json'},
            data:
            {
                OrderId:orderid,
              Tshirtimage:puriimage,
              Tshirtname:firsttshirt,
              Tshirtcost:firsttshirtcost,
              Ordernow:ordernow
            }

     })
     alert('added to cart')
       }

       else if(fourth===firsttshirt)
       {
        axios({
            url:'http://localhost:2021/cart',
            method:'POST',
          headers:{'content-Type':'application/json'},
            data:
            {
                OrderId:orderid,
              Tshirtimage:lemonriceimage,
              Tshirtname:firsttshirt,
              Tshirtcost:firsttshirtcost,
              Ordernow:ordernow
            }

     })

     alert('added to cart')

       }

       else if(fifth===firsttshirt)
       {
        axios({
            url:'http://localhost:2021/cart',
            method:'POST',
          headers:{'content-Type':'application/json'},
            data:
            {
                OrderId:orderid,
              Tshirtimage:eggdosaimage,
              Tshirtname:firsttshirt,
              Tshirtcost:firsttshirtcost,
              Ordernow:ordernow
            }

     })

     alert('added to cart')

       }

       else if(sixth===firsttshirt)
       {
        axios({
            url:'http://localhost:2021/cart',
            method:'POST',
          headers:{'content-Type':'application/json'},
            data:
            {
                OrderId:orderid,
              Tshirtimage:masaladosaimage,
              Tshirtname:firsttshirt,
              Tshirtcost:firsttshirtcost,
              Ordernow:ordernow
            }

     })
     alert('added to cart')
       }

       else if(seventh===firsttshirt)
       {
        axios({
            url:'http://localhost:2021/cart',
            method:'POST',
          headers:{'content-Type':'application/json'},
            data:
            {
                OrderId:orderid,
              Tshirtimage:chapathiimage,
              Tshirtname:firsttshirt,
              Tshirtcost:firsttshirtcost,
              Ordernow:ordernow
            }

     })

     alert('added to cart')

       }
        
        
    }
    


    render()
    {
        const {myname}=this.state;
        return(
            <div className="ml-3 mr-3 rounded mt-3">
               
<div className="kalyan rounded">
<Bounce left cascade><div style={{display:'inline-block',paddingTop:'10px'}} className="pl-3">{myname===undefined?null:`Welcome ${myname}`}</div></Bounce><br/><br/>
</div>
<br/>
<br/>


        
<Zoom top cascade>
         <div className="sarath mt-3  rounded" style={{display:'inline-block'}}> 
            
                 <img src="../Assets/tshirt1.jpg" width="100px" height="110px" alt="Nothing found" className="pl-1 pr-1 pb-1 pt-1 rounded" onClick={()=>this.sarath('TrendingTshirt','804')}/>
                 <button className="btn btn-danger btn-sm ml-3" onClick={()=>this.cart("TrendingTshirt","804")}>Add to cart</button>
                 <div style={{display:'inline-block'}} className="ml-2">Trending T-shirt</div>
                 <div style={{display:'inline-block'}} className="ml-2 pl-2">Rs.804</div>
         </div>
         </Zoom>
         <Zoom top cascade>

         <div className="sarath mt-3  rounded" style={{display:'inline-block'}} >
            
                 <img src="../Assets/tshirt2.jpg" width="100px" height="110px" alt="Nothing found" className="pl-1 pr-1 pb-1 pt-1 rounded" onClick={()=>this.sarath('PrintTShirt','1615')}/>
                 <button className="btn btn-danger btn-sm ml-3" onClick={()=>this.cart("PrintTShirt","1615")}>Add to cart</button>
                 <div style={{display:'inline-block'}} className="ml-2">Print T Shirt</div>
                 <div style={{display:'inline-block'}} className="ml-2 pl-2">Rs.1615</div>
         </div>
         </Zoom>
         <Zoom top cascade>
         
<div className="sarath mt-3  rounded" style={{display:'inline-block'}} >
   
        <img src="../Assets/tshirt3.jpg" width="100px" height="110px" alt="Nothing found" className="pl-1 pr-1 pb-1 pt-1 rounded" onClick={()=>this.sarath('TShirtFashion','1803')}/>
        <button className="btn btn-danger btn-sm ml-3" onClick={()=>this.cart("TShirtFashion","1803")}>Add to cart</button>
        <div style={{display:'inline-block'}} className="ml-2">T-Shirt Fashion</div>
        <div style={{display:'inline-block'}} className="ml-2 pl-2">Rs.1803</div>
</div>
</Zoom>

<Zoom top cascade>

<div className="sarath mt-3  rounded" style={{display:'inline-block'}}>
   
        <img src="../Assets/tshirt4.jpg" width="100px" height="110px" alt="Nothing found" className="pl-1 pr-1 pb-1 pt-1 rounded" onClick={()=>this.sarath('FashionTShirts','1660')}/>
        <button className="btn btn-danger btn-sm ml-3" onClick={()=>this.cart("FashionTShirts","1660")}>Add to cart</button>
        <div style={{display:'inline-block'}} className="ml-2">Fashion T-Shirts</div>
        <div style={{display:'inline-block'}} className="ml-2 pl-2">Rs.1660</div>
</div>
</Zoom>

<Zoom top cascade>

<div className="sarath mt-3  rounded" style={{display:'inline-block'}}>
   
        <img src="../Assets/tshirt5.jpg" width="100px" height="110px" alt="Nothing found" className="pl-1 pr-1 pb-1 pt-1 rounded" onClick={()=>this.sarath('HipsterTShirts','1509')}/>
        <button className="btn btn-danger btn-sm ml-3" onClick={()=>this.cart("HipsterTShirts","1509")}>Add to cart</button>
        <div style={{display:'inline-block'}} className="ml-2">Hipster T Shirts</div>
        <div style={{display:'inline-block'}} className="ml-2 pl-2">Rs.1509</div>
</div>
</Zoom>
         
<Zoom top cascade>

<div className="sarath mt-3  rounded" style={{display:'inline-block'}}>
   
        <img src="../Assets/tshirt6.jpg" width="100px" height="110px" alt="Nothing found" className="pl-1 pr-1 pb-1 pt-1 rounded" onClick={()=>this.sarath('HoleTshirt','1615')}/>
        <button className="btn btn-danger btn-sm ml-3" onClick={()=>this.cart("HoleTshirt","1615")}>Add to cart</button>
        <div style={{display:'inline-block'}} className="ml-2">Hole T-shirt</div>
        <div style={{display:'inline-block'}} className="ml-2 pl-2">Rs.1615</div>
        
        
</div>
</Zoom>
         
<Zoom top cascade>

<div className="sarath mt-3  rounded" style={{display:'inline-block'}}>
   
        <img src="../Assets/tshirt7.jpg" width="100px" height="110px" alt="Nothing found" className="pl-1 pr-1 pb-1 pt-1 rounded" onClick={()=>this.sarath('HenleyTshirt','752')}/>
        <button className="btn btn-danger btn-sm ml-3" onClick={()=>this.cart("HenleyTshirt","752")}>Add to cart</button>
        <div style={{display:'inline-block'}} className="ml-2">Henley T-shirt</div>
        <div style={{display:'inline-block'}} className="ml-2 pl-2">Rs.752</div>
</div>
</Zoom>
     

     </div>
        )
    }
}

export default Shiva;