import React from 'react'
import {withRouter} from 'react-router-dom'
class Footer extends React.Component{
    constructor()
    {
        super();
        this.state={
            islogin:false
        }
    }

    rateus=()=>{
        this.props.history.push('/rateus')
    }

    userlogin=()=>{
        this.setState({islogin:true})
    }
    render()
    {
        return(
            
      <div className="bg-info fixed-bottom text-center pb-2 pt-3 pl-2 pr-2">
              <div className="text-white btn btn-success btn-sm" onClick={this.rateus}>Rateus</div>
             </div>
        )
    }
}

export default withRouter(Footer);