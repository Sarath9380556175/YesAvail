import React from 'react';
import '../styles/rateus.css';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import axios from 'axios';
import {motion} from 'framer-motion'
class Rateus extends React.Component{
    constructor()
    {
        super();
        this.state={
            quality:undefined,
            food:undefined,
            comment:undefined,
            ratingdetails:{}
        }
    }

    submit=()=>{
        const {quality,food,comment}=this.state;
axios({
    url:'http://localhost:2021/rateus',
    method:'POST',
    headers:{'content-Type':'application/json'},
    data:
    {
        quality:quality,
        food:food,
        feedback:comment

    }
})
.then(res=>this.setState({ratingdetails:res.data.rating}))

.catch(error=>console.log(error))

this.props.history.push('/thank')

    }

    excellent=(excellent)=>{
        console.log(excellent)
        this.setState({quality:excellent})

    }
    good=(good)=>{
        console.log(good)

        this.setState({quality:good})

    }

    average=(average)=>{
        console.log(average)

        this.setState({quality:average})

    }

    bad=(bad)=>{
        console.log(bad)

        this.setState({quality:bad})

    }

    sarath=(sarath)=>{
        console.log(sarath)

        this.setState({food:sarath})

    }

    kumar=(kumar)=>{
        console.log(kumar)

        this.setState({food:kumar})

    }

    reddy=(reddy)=>{
        console.log(reddy)

        this.setState({food:reddy})

    }

    tarun=(tarun)=>{
        console.log(tarun)

        this.setState({food:tarun})

    }

    comment=(event)=>{
        const value=event.target.value;
        console.log(value)
        this.setState({comment:value})

    }

    render()
    {
        return(
             <div>
                 <form onSubmit={this.submit}>
            <div className="container bg-white text-center  rounded" style={{marginTop:'40px'}}>
             <div >
                 <Bounce top cascade>
            <div style={{paddingTop:'20px',paddingBottom:'20px',color:'yellowgreen',fontSize:'20px',fontFamily:'serif'}}>Please provide feedback on our Shopping Mall</div>
           </Bounce>
            </div>
             </div>
             <div className="container bg-white pt-3 rounded" >
<Zoom top cascade><div style={{fontWeight:'400',color:'#808000',display:'inline-block',padding:'10px 15px 10px 0px'}}>Select the quality of the T-shirts</div></Zoom>
<br/>
<motion.input type="radio" required name="quality" onChange={()=>this.excellent("Excellent")} whileHover={{scale:[1,1.2]}}/>&nbsp;<Slide top cascade><div style={{display:'inline-block',color:'#008B8B'}}>Excellent</div></Slide><br/>
<motion.input type="radio" required name="quality"  onChange={()=>this.good("Good")} whileHover={{scale:[1,1.2]}}/>&nbsp;<Slide top cascade><div style={{display:'inline-block',color:'#008B8B'}}>Good</div></Slide><br/>
<motion.input type="radio" required name="quality"  onChange={()=>this.average("Average")} whileHover={{scale:[1,1.2]}}/>&nbsp;<Slide top cascade><div style={{display:'inline-block',color:'#008B8B'}}>Average</div></Slide><br/>
<motion.input type="radio" required name="quality"  onChange={()=>this.bad("Bad")} whileHover={{scale:[1,1.2]}}/>&nbsp;<Slide top cascade><div style={{display:'inline-block',color:'#008B8B'}}>Bad</div></Slide><br/>

<br/>
<Zoom top cascade><div style={{fontWeight:'400',color:'#808000',display:'inline-block',padding:'10px 15px 10px 0px'}}>Select the quality of the Shopping mall </div></Zoom>
<br/>
<motion.input type="radio" required name="food" onChange={()=>this.sarath("Excellent")} whileHover={{scale:[1,1.2]}}/>&nbsp;<Slide top cascade><div style={{display:'inline-block',color:'#008B8B'}}>Excellent</div></Slide><br/>
<motion.input type="radio" required name="food" onChange={()=>this.kumar("Good")} whileHover={{scale:[1,1.2]}}/>&nbsp;<Slide top cascade><div style={{display:'inline-block',color:'#008B8B'}}>Good</div></Slide><br/>
<motion.input type="radio" required name="food" onChange={()=>this.reddy("Average")} whileHover={{scale:[1,1.2]}}/>&nbsp;<Slide top cascade><div style={{display:'inline-block',color:'#008B8B'}}>Average</div></Slide><br/>
<motion.input type="radio" required name="food" onChange={()=>this.tarun("Bad")} whileHover={{scale:[1,1.2]}}/>&nbsp;<Slide top cascade><div style={{display:'inline-block',color:'#008B8B'}}>Bad</div></Slide><br/>
<br/>


<Zoom top cascade><div style={{fontWeight:'400',color:'#808000'}}>Share the overall Cloth quality</div></Zoom>
<textarea rows="2" cols="150" className="container" required onChange={this.comment} style={{fontStyle:'normal',fontSize:'15px',color:'darkorange'}}></textarea>
<div className="text-center">
    <Zoom top cascade>
<button className="btn btn-success btn-sm" style={{marginBottom:'10px'}}>Submit</button>
</Zoom>

</div>

             </div>
             </form>
             </div>
             
              
        )
    }
}

export default Rateus;