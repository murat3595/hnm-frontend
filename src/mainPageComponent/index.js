import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import {
    MDBContainer,
  }
  from 'mdb-react-ui-kit';
import "./index.css"

function MainPageComponent() {
    var settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
      };

      const [activeItems, setActiveItems] = useState("All");

      const [categories, setCategories] = useState([]);

      window.categories = categories;
      window.setCategories = setCategories;
      /*
    useEffect(() => {
      fetch('http://localhost:777/getcategories', {
        method: 'post',
        body: {
        },
      })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        window.setCategories(response);
        console.log("asdas",window.categories);
        })
    }, [])
*/





    return  <MDBContainer className="p-5  d-flex flex-column w-75 d-flex align-items-stretch">
      
            <div className="btn-toolbar mx-auto" role="toolbar" aria-label="Toolbar with button groups">
                {/*categories.map(item => <button key={item} type="button" className="btn btn-primary"  data-mdb-ripple-init>{item}</button>)*/}
    <button type="button" class="btn btn-primary"  data-mdb-ripple-init>3</button>
    <button type="button" class="btn btn-primary"  data-mdb-ripple-init>3</button>
    <button type="button" class="btn btn-primary"  data-mdb-ripple-init>3</button>
    <button type="button" class="btn btn-primary"  data-mdb-ripple-init>3</button>
    <button type="button" class="btn btn-primary"  data-mdb-ripple-init>3</button>
    <button type="button" class="btn btn-primary"  data-mdb-ripple-init>3</button>
    <button type="button" class="btn btn-primary"  data-mdb-ripple-init>3</button>
            </div>

            <Slider {...settings}>
                <div >
                <h3 style={{height:200, width:"100%"}}>1</h3>
                </div>
                <div>
                <h3>2</h3>
                </div>
                <div>
                <h3>3</h3>
                </div>
                <div>
                <h3>4</h3>
                </div>
                <div>
                <h3>5</h3>
                </div>
                <div>
                <h3>6</h3>
                </div>
                <div>
                <h3>7</h3>
                </div>
                <div>
                <h3>8</h3>
                </div>
                <div>
                <h3>9</h3>
                </div>
                <div>
                <h3>10</h3>
                </div>
                <div>
                <h3>11</h3>
                </div>
                <div>
                <h3>12</h3>
                </div>
                <div>
                <h3>13</h3>
                </div>
                <div>
                <h3>14</h3>
                </div>
                <div>
                <h3>15</h3>
                </div>
                <div>
                <h3>16</h3>
                </div>
                
            </Slider>
    </MDBContainer>
}

export default MainPageComponent;