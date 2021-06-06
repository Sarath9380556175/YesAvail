import React from 'react';
import '../styles/address.css';
import Zoom from 'react-reveal/Zoom';
import qs from 'query-string';
import axios from 'axios';
class Address extends React.Component{
    constructor()
    {
        super();
        this.state=
        {
name:undefined,
email:undefined,
country:undefined,
fullname:undefined,
mobilenumber:undefined,
pincode:undefined,
address:undefined,
landmark:undefined,
city:undefined,
skr:undefined,
addressdetails:{},
countrynames:[],
statenames:[],
myname:undefined,
orderid:undefined,
orderimage:undefined,
uname:undefined
        }
    }

    componentDidMount()
    {
   const skr=qs.parse(this.props.location.search)
   this.setState({name:skr.name,myname:skr.myname,orderid:skr.orderid,orderimage:skr.image,uname:skr.sname})

   axios({
       url:'http://localhost:2021/locations',
       method:'get',
       headers:{'content-Type':'application/json'}
   })

   .then(res=>this.setState({countrynames:res.data.locations}))

   .catch()
    }


    proceed=()=>{
        const {name,email,country,mobilenumber,fullname,pincode,address,landmark,city,skr,orderid,orderimage,myname}=this.state;
axios({
    url:'http://localhost:2021/address',
    method:'POST',
    headers:{'content-Type':'application/json'},
    data:
    {
        Country:country,
        Fullname:fullname,
        Mobilenumber:mobilenumber,
        Pincode:pincode,
        Address:address,
        Landmark:landmark,
        City:city,
        State:skr

    }
})

.then(res=>this.setState({addressdetails:res.data.address}))

.catch(error=>console.log(error))


        this.props.history.push(`/venky/?name=${name}&&email=${email}&&orderid=${orderid}&&image=${orderimage}&&cost=${myname}`)
    }


    dropdown=(event)=>{
const value=event.target.value;
console.log(value)
this.setState({country:value})

axios({
    url:'http://localhost:2021/states',
    method:'post',
    headers:{'content-Type':'application/json'},
    data:{
        statename:value
    }
})
.then(res=>this.setState({statenames:res.data.sname}))

.catch(error=>console.log(error))
    }

    fullname=(event)=>{
        const value=event.target.value;
console.log(value)
        this.setState({fullname:value})
    }
    mobilenumber=(event)=>{
        const value=event.target.value;
console.log(value)
        this.setState({mobilenumber:value})

    }

    pincode=(event)=>{
        const value=event.target.value;
        console.log(value)
        this.setState({pincode:value})
    }

    address=(event)=>{
        const value=event.target.value;
        console.log(value)
        this.setState({address:value})
    }

    landmark=(event)=>{
        const value=event.target.value;
        console.log(value)
        this.setState({landmark:value})
    }

    city=(event)=>{
        const value=event.target.value;
        console.log(value)
        this.setState({city:value})
    }

    skr=(event)=>{
        const value=event.target.value;
        console.log(value)
        this.setState({skr:value})
    }
    backbutton=()=>{
        const {uname}=this.state
    
        this.props.history.push(`/shiva/?tname=${uname}`)
    }

    mail=(event)=>{
        const value=event.target.value;
        console.log(value)
        this.setState({email:value})
    }
    render()
    {
        const {countrynames,statenames,country}=this.state;
        return(
           <div>
               
               <div className="pl-2 pt-2 ml-2 mr-2 rounded pb-2 pr-2 fas fa-reply" style={{marginTop:'10px', color:'deepskyblue',background:'white'}} onClick={this.backbutton}>&nbsp;Back</div>
            <div className="text-center mt-3 text-white">
                
      <form onSubmit={this.proceed}>
         <Zoom top cascade><div className="mb-3" style={{color:'yellow'}}>Please provide your Delivery address</div></Zoom>
       
          <select className="fullname pl-3 rounded" required onChange={this.dropdown}>
          <option>Select country</option>
          {countrynames.map((item)=>{
              return <option>{item.Countryname}</option>
             
          })}
              
          </select>
          <br/>
          <br/>
        
          <input type="text" name="fullname" required className="fullname rounded pl-3" placeholder="Full name" onChange={this.fullname}/><br/>
          <br/>
          <input type="email" name="email" required className="fullname rounded pl-3" placeholder="Full name" onChange={this.mail}/><br/>
          <br/>
          <input type="tel" maxLength="10" required className="fullname rounded pl-3" placeholder="Mobile number" onChange={this.mobilenumber}/><br/>
          <br/>
          <input type="tel" maxLength="6" required className="fullname rounded pl-3" placeholder="PIN code" onChange={this.pincode}/><br/>
          <br/>
          {country==="India"?<div>
          <input type="text" name="address" required className="fullname rounded pl-3" placeholder="Area, Colony, Street, Sector, Village" onChange={this.address}/> </div> 
          
       :<input type="text" name="address" required className="fullname rounded pl-3" placeholder="Street address, P.O. box, Company name, c/o" onChange={this.address}/>
    }
         <br/>
            <br/>
            <input type="text" name="landmark" required className="fullname rounded pl-3" placeholder="Landmark e.g. near Apollo Hospital" onChange={this.landmark}/><br/>
            <br/>
            <input type="text" name="town" required className="fullname rounded pl-3" placeholder="Town/City" onChange={this.city}/><br/>
            <br/>
            {country==="India"?
            <select className="fullname pl-3 rounded" onChange={this.skr}>
                <option selected>Select state</option>
                {statenames.map((item)=>{
                    return   <option>{item.Statename}</option>
                })}
             
            
          </select>
           :<input type="text" required className="fullname rounded pl-3" placeholder="State / Province / Region" onChange={this.skr}/> }
            <br/>
          <br/>
          <button className="text-center btn btn-danger btn-sm">Proceed</button>
          </form>
            </div>
            </div>
           
        )
    }
}

export default Address;