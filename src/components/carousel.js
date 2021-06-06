import React from 'react';
import '../styles/carousel.css'
class Sarath extends React.Component{
    render()
    {
        return(
            
<div id="demo" class="carousel slide" data-ride="carousel">


<ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>


<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="./Assets/c3.jpg" alt="Los Angeles" width="100%" height="250" className="rounded "/>
    <div class="carousel-caption">
        <h4 className="burger">Tshirts</h4>
        <p className="caption">Combo Tshirts</p>
      </div>   
  </div>
  <div class="carousel-item">
    <img src="./Assets/c5.png" alt="Chicago" width="100%" height="300" className=" rounded"/>
    <div class="carousel-caption">
        <h4 className="burger">Tshirts</h4>
        <p className="caption" style={{color:'yellow'}}>Variety of T-shirts</p>
      </div>   
  </div>
  <div class="carousel-item">
    <img src="./Assets/c9.jpg" alt="New York" width="100%" height="250" className="rounded"/>
    <div class="carousel-caption">
        <h4 className="burger">T-shirts</h4>
        <p className="caption text-white">Wear T-shirts and look more stylish</p>
      </div>   
  </div>
</div>
</div>   
        )
    }
}

export default Sarath;