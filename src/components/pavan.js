import React from 'react'
import '../styles/pavan.css';
import {motion} from 'framer-motion';
import Modal from 'react-modal';
import axios from 'axios'
import Zoom from 'react-reveal/Zoom';
import Footer from './footer';
import Sarath from './carousel'
import Rotate from 'react-reveal/Rotate'
class Pavan extends React.Component{

    constructor()
    {
        super();
        this.state={
            issignup:false,
            name:undefined,
            email:undefined,
            password:undefined,
            islogin:false,
            signupdetails:{},
            emails:undefined,
            passwords:undefined,
            username:undefined,
            gender:undefined,
            genders:undefined,
            sarath:undefined,
            isloggedin:false,
            logindetails:[],
            getsignupdetails:[],
            useremail:[],
            userpassword:undefined,
            orderid:undefined,
            cartdetails:[],
            cartdetail:[]
        }
    }

    componentDidMount()
    {
        alert('Please login or signup to continue with our application')

        axios({
            url:'http://localhost:2021/getsignupdetails',
            method:'get',
            headers:{'content-Type':'application/json'},
            
        })
        .then(res=>this.setState({getsignupdetails:res.data.getsignup,useremail:res.data.getsignup.map((item)=>{return item.email}),userpassword:res.data.getsignup.map((item)=>{return item.password})}))


        .catch()
    }

    handlesubmit=()=>{

const {name,email,password,gender,useremail}=this.state;
 const skr=useremail.indexOf(email)
axios({
    url:'http://localhost:2021/signup',
    method:'POST',
    headers:{'content-Type':'application/json'},
    data:
    {
        name:name,
        email:useremail[skr]===email? alert('User with this email address already exist'):email,
        password:password,
        gender:gender
    } 
     
})
.then(res=>this.setState({signupdetails:res.data.signup}))

.catch(error=>console.log(error))

  
     useremail[skr]=== email ? this.props.history.push('/thanks'):this.props.history.push('/thankyou')
     
    }

    
    pavan=()=>{
        const {username,orderid}=this.state;
        
        if(username===undefined)
        {
            this.props.history.push('/shiva')
        }
        else{
            this.props.history.push(`/shiva/?tname=${username}&&orderid=${orderid}`)
        }
       
    }

    siva=(pavan,raghava)=>{
        this.setState({[pavan]:raghava})

    }

    hr=(venky,uday)=>{
        this.setState({[venky]:uday})

    }

   

    name=(event)=>{
        const name=event.target.name;
        console.log(name);

        const value=event.target.value;
        console.log(value)
        this.setState({[name]:value})
    }

    email=(event)=>{
        const name=event.target.name;
        console.log(name);

        const value=event.target.value;
        console.log(value)
        this.setState({[name]:value})
    }


    password=(event)=>{
        const name=event.target.name;
        console.log(name);

        const value=event.target.value;
        console.log(value)
        this.setState({[name]:value})
    }

    login=(raghava,subbu)=>{
        this.setState({[raghava]:subbu})

    }

    dinesh=(swathika,prashanth)=>{
        this.setState({[swathika]:prashanth})

    }

    emails=(event)=>{
        const name=event.target.name;
        console.log(name)
        const value=event.target.value;
        console.log(value)
        this.setState({[name]:value})

    }

    passwords=(event)=>{
        const name=event.target.name;
        console.log(name)

        const value=event.target.value;
        console.log(value)

        this.setState({[name]:value})

    }

    gender=(gender)=>{
        this.setState({gender:gender})

    }

    genders=(genders)=>{
        const {emails,passwords,useremail,userpassword}=this.state;
        this.setState({genders:genders,islogin:false})

       const tkr=useremail.indexOf(emails);
       const rmr=userpassword.indexOf(passwords)
        axios({
            url:'http://localhost:2021/login',
            method:'POST',
            headers:{'content-Type':'application/json'},
            data:
            {
                email:useremail[tkr]===emails&&userpassword[rmr]===passwords?emails:alert('Invalid email or password'),
                password:passwords,
                gender:genders
            }
        })
  
        .then(res=>this.setState({logindetails:res.data.login,username:res.data.login.map((item)=>{return item.name}),sarath:res.data.login.length===0?alert('invalid details'):setTimeout(()=>{
            alert('User successfully LoggedIn to our application')

        },2000),isloggedin:res.data.isloggedin,orderid:res.data.login.map((item)=>{return item._id})}))

        .catch(error=>console.log(error))

    }

    sivas=(chandu,pravallika)=>{
        this.setState({[chandu]:pravallika,username:undefined})

    }

    rateus=()=>{
        this.props.history.push('/rateus')
    }

    userlogin=()=>{
        this.setState({islogin:true})
    }

    usersignup=()=>{
        this.setState({issignup:true})
    }

    orders=()=>{
        const {orderid}=this.state;
     
        if(orderid===undefined)
        {
            alert('Please login to our application to view the orders')
        }
        else{
            this.props.history.push(`/orders/?orderid=${orderid}`)
        }
       
    }

    componentDidUpdate()
    {
        const {orderid}=this.state;

     setTimeout(()=>{

        if(orderid!==undefined)
        {
            axios({
                url:'http://localhost:2021/getcartdetails',
                method:'POST',
                headers:{'content-Type':'application/json'},
                data:
                {
                    OrderId:orderid
    
                }
            })
    
            .then(res=>this.setState({cartdetail:res.data.carts}))
    
            .catch(err=>console.log(err))
        }

     },1000)  


    }

    carts=()=>{
        const {orderid,username}=this.state;
     
        if(orderid===undefined)
        {
            alert('Please login to our application to view the cart')
        }
        else{
            this.props.history.push(`/cart/?orderid=${orderid}&&tname=${username}`)
        }
       
    }


   
       

    

    render()
    {
        const {issignup,islogin,username,isloggedin,logindetails,cartdetail}=this.state;
        return(
            <div className="pavan kkr">
                
           <div>
               <div className="tkr top-fixed">
                   <img style={{color:'red',fontWeight:'bold'}} src="../Assets/animlogo.png" width="30px" height="30px" alt="Nothing Found"/>
                   </div>
         
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  
                   {isloggedin===true? <Zoom right cascade>
                   <span style={{color:'yellow'}}>{username}</span>
                   </Zoom>
                   :null}

                
                   {
                       isloggedin===true?<span>
                          
                       <div style={{float:'right',color:'darkblue',marginTop:'12px',border:'3px double red'}} className="mr-2  rounded" onClick={()=>this.sivas('isloggedin',false)}>Logout</div>
                       <div  style={{float:'right',color:'darkblue',marginTop:'15px'}} className="mr-3" onClick={this.orders}>Orders</div>
                       {cartdetail.length===0?null:<div  style={{float:'right',color:'yellow',marginTop:'8px'}} className="mr-3 cart">{cartdetail.length}</div>}
                  <div  style={{float:'right',color:'darkblue',marginTop:'15px'}} className="mr-2" onClick={this.carts}>&#128722;Cart</div>
              
            </span>
                  :isloggedin===false ?<span>
                   <div style={{float:'right',color:'darkblue'}} className="mr-3 mt-3" onClick={()=>this.login('islogin',true)}>Login</div>
                  <div style={{float:'right',color:'darkblue'}} className="mr-3 mt-3" onClick={()=>this.siva('issignup',true)}>Signup</div>
                  <div  style={{float:'right',color:'darkblue',marginTop:'15px'}} className="mr-3" onClick={this.orders}>Orders</div>
                  {cartdetail.length===0?null:<div  style={{float:'right',color:'yellow',marginTop:'8px'}} className="mr-2 cart">{cartdetail.length}</div>}
                  <div  style={{float:'right',color:'darkblue',marginTop:'15px'}} className="mr-2" onClick={this.carts}>&#128722;Cart</div>
              
                

                </span>
                   :null}
                   
           
            <br/>
           
           <Zoom top cascade >
            <div className="text-center  pt-3" style={{color:'darkblack',textShadow:'10px 10px 10px white',fontStyle:'italic',fontFamily:'serif',fontSize:'20px'}}>Welcome to Sarath shopping mall</div>
            </Zoom>

           <br/>
          <Sarath/>
          <br/>
          <Rotate top cascade>
          <div className="mt-3 mb-3 ml-3 text-white" style={{fontFamily:'sans-serif'}}>T-shirts</div>
          </Rotate>

          <Zoom top cascade>
         <div className="sarath mt-3 pt-3  rounded" style={{display:'inline-block'}}> 
            
                 <img src="Assets/tshirt1.jpg" width="100px" height="110px" alt="Nothing found" className="pl-1 pr-1 pb-1 pt-1 rounded"/>
                 <div style={{display:'inline-block'}} className="ml-2">Trending T-shirt</div>
         </div>
         </Zoom>
         <Zoom top cascade>

         <div className="sarath mt-3 pt-3 rounded" style={{display:'inline-block'}}>
            
                 <img src="Assets/tshirt2.jpg" width="100px" height="110px" alt="Nothing found" className="pl-1 pr-1 pb-1 pt-1 rounded"/>
                 <div style={{display:'inline-block'}} className="ml-2">Print T Shirt</div>
         </div>
         </Zoom>
         <Zoom top cascade>

<div className="sarath mt-3 pt-3  rounded" style={{display:'inline-block'}}>
   
        <img src="Assets/tshirt3.jpg" width="100px" height="110px" alt="Nothing found" className="pl-1 pr-1 pb-1 pt-1 rounded"/>
        <div style={{display:'inline-block'}} className="ml-2">T-Shirt Fashion</div>
</div>
</Zoom>

<Zoom top cascade>

<div className="sarath mt-3 pt-3 rounded" style={{display:'inline-block'}}>
   
        <img src="Assets/tshirt4.jpg" width="100px" height="110px" alt="Nothing found" className="pl-1 pr-1 pb-1 pt-1 rounded"/>
        <div style={{display:'inline-block'}} className="ml-2">Fashion T-Shirts</div>
</div>
</Zoom>

<Zoom top cascade>

<div className="sarath mt-3 pt-3 rounded" style={{display:'inline-block'}}>
   
        <img src="Assets/tshirt5.jpg" width="100px" height="110px" alt="Nothing found" className="pl-1 pr-1 pb-1 pt-1 rounded"/>
        <div style={{display:'inline-block'}} className="ml-2">Hipster T Shirts</div>
</div>
</Zoom>
         
<Zoom top cascade>

<div className="sarath mt-3 pt-3 rounded" style={{display:'inline-block'}}>
   
        <img src="Assets/tshirt6.jpg" width="100px" height="110px" alt="Nothing found" className="pl-1 pr-1 pb-1 pt-1 rounded"/>
        <div style={{display:'inline-block'}} className="ml-2">Hole T-shirt</div>
</div>
</Zoom>
         
<Zoom top cascade>

<div className="sarath mt-3 pt-3 rounded" style={{display:'inline-block'}}>
   
        <img src="Assets/tshirt7.jpg" width="100px" height="110px" alt="Nothing found" className="pl-1 pr-1 pb-1 pt-1 rounded"/>
        <div style={{display:'inline-block'}} className="ml-2">Henley T-shirt</div>
</div>
</Zoom>
         
         
        <br/>
        <br/>
        
            {logindetails.length===0 || username===undefined? null:
             <div className="text-center">
             <motion.button className="btn btn-danger" onClick={this.pavan} whileHover={{scale:1.2}}>Get Started</motion.button>
             </div>
            }
           <br/>
           <br/>
           <br/>
           </div>

      
           
           <Modal
           isOpen={issignup}
          
           className="gopal ml-3 rounded"
        
           >
<form className="text-center"  onSubmit={this.handlesubmit}>
    <div className="btn-outline-info rounded" style={{textAlign:'center',fontSize:'20px',color:'red'}} onClick={()=>this.hr('issignup',false)}>close</div>
    
    <br/>
     <label style={{display:'block'}} >Enter your name</label>
    <input type="text" name="name" required className="rounded text-center" onChange={this.name} placeholder="name"/>
    <br/>
    <br/>
    <label  style={{display:'block'}}>Enter your Email</label>
    <input type="email" name="email" required className="rounded text-center" onChange={this.email} placeholder="email"/>
    <br/>
    <br/>
    <label  style={{display:'block'}}>Enter your password</label>
    <input type="password" name="password" required className="rounded text-center" onChange={this.password} placeholder="password"/>
    <br/>
    <br/>
    <label  style={{display:'block'}}>Enter your Gender</label>
    <input type="radio" required  onChange={()=>this.gender("Male")}/>&nbsp;<span>Male</span>&nbsp;&nbsp;
    <input type="radio" required  onChange={()=>this.gender("Female")}/>&nbsp;<span>Female</span>
    <br/>
    <br/>
    <br/>
    <motion.button className="btn btn-danger btn-sm" whileHover={{scale:[0.9,1,1.05,1]}} transition={{yoyo:Infinity}}>Submit</motion.button>
</form>
           </Modal>

           <Modal
           isOpen={islogin}
            className="gopal rounded text-center">
                  <div className="btn-outline-info rounded" style={{textAlign:'center',fontSize:'20px',color:'red'}} onClick={()=>this.dinesh('islogin',false)}>close</div>
    
    <br/>
    <form onSubmit={this.submit}>
    <label style={{display:'block'}}>Enter your Email</label>
               <input type="email" name="emails" required  onChange={this.emails} className="rounded pt-1 pb-1  pr-1 text-center" style={{width:"250px"}} placeholder="email"/><br/>
               <br/>
    <label style={{display:'block'}}>Enter your password</label>

               <input type="password" name="passwords" required onChange={this.passwords} className="rounded pt-1 pb-1 pl-3 pr-1 text-center" style={{width:"250px"}} placeholder="password"/><br/>
           <br/>
           <label  style={{display:'block'}}>Enter your Gender</label>
    <input type="radio" required  onChange={()=>this.genders("Male")}/>&nbsp;<span>Male</span>&nbsp;&nbsp;
    <input type="radio" required  onChange={()=>this.genders("Female")}/>&nbsp;<span>Female</span>
    
    <br/>
    <br/>
            <motion.button className="btn btn-success btn-sm" whileHover={{scale:[0.9,1,1.05,1]}} transition={{yoyo:Infinity}}>Submit</motion.button>
           
    </form>
    </Modal>
   
   <Footer/>
   
            </div>
        )
    }
}

export default Pavan;