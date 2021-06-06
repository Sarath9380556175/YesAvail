import React from 'react';
import Venky from './venky';
import Shiva from './shiva';
import Pavan from './pavan'
import {Route,BrowserRouter} from 'react-router-dom';
import Thankyou from './thankyou';
import Rateus from './rateus';
import Thankyous from './thankyou2';
import Thanks from './thank';
import Address from './address';
import Order from './order';
import Cart from './cart';
class Router extends React.Component{
    render()
    {
        return(
            <div>
<BrowserRouter>
<Route exact path="/" component={Pavan}/>
<Route exact path="/shiva" component={Shiva}/>
<Route exact path="/venky" component={Venky}/>
<Route exact path="/thankyou" component={Thankyou}/>
<Route exact path="/rateus" component={Rateus}/>
<Route exact path="/thank" component={Thankyous}/>
<Route exact path="/thanks" component={Thanks}/>
<Route exact path="/address" component={Address}/>
<Route exact path="/orders" component={Order}/>
<Route exact path="/cart" component={Cart}/>
</BrowserRouter>
            </div>
        )
    }
}

export default Router;