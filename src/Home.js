import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"        alt=""
      />
      {/* Product title,image,id,price,reviews*/}
      <div className="home_row">
      <Product
        title="The only Shark who made the shrak tank india a worth of Rs 500 crore-Ashneer Grover"
        price={199.00}
        id="PR-90"
        rating={4}
        image="https://m.media-amazon.com/images/I/61EGLdlx8kL._SX309_BO1,204,203,200_.jpg"
      />
      <Product
        title="The only Shark who made the shrak tank india a worth of Rs 500 crore-Ashneer Grover"
        price={199.00}
        id="PR-91"
        rating={4}
        image="https://m.media-amazon.com/images/I/61EGLdlx8kL._SX309_BO1,204,203,200_.jpg"
      />
      </div>

      <div className="home_row">
      <Product
        title="The only Shark who made the shrak tank india a worth of Rs 500 crore-Ashneer Grover"
        price={199.00}
        id="PR-92"
        rating={4}
        image="https://m.media-amazon.com/images/I/61EGLdlx8kL._SX309_BO1,204,203,200_.jpg"
      />
      <Product
        title="The only Shark who made the shrak tank india a worth of Rs 500 crore-Ashneer Grover"
        price={199.00}
        id="PR-100"
        rating={4}
        image="https://m.media-amazon.com/images/I/61EGLdlx8kL._SX309_BO1,204,203,200_.jpg"
      />
       <Product
        title="The only Shark who made the shrak tank india a worth of Rs 500 crore-Ashneer Grover"
        price={199.00}
        id="PR-101"
        rating={4}
        image="https://m.media-amazon.com/images/I/61EGLdlx8kL._SX309_BO1,204,203,200_.jpg"
      />
      </div>
      
      <div className="home_row">
      <Product
        title="The only Shark who made the shrak tank india a worth of Rs 500 crore-Ashneer Grover"
        price={199.00}
        id="PR-102"
        rating={4}
        image="https://m.media-amazon.com/images/I/61EGLdlx8kL._SX309_BO1,204,203,200_.jpg"
      />      
      </div>
      <div className="home_row">
      <Product
        title="The only Shark who made the shrak tank india a worth of Rs 500 crore-Ashneer Grover"
        price={199.00}
        id="PR-103"
        rating={4}
        image="https://m.media-amazon.com/images/I/61EGLdlx8kL._SX309_BO1,204,203,200_.jpg"
      /> 
       <Product
        title="The only Shark who made the shrak tank india a worth of Rs 500 crore-Ashneer Grover"
        price={199.00}
        id="PR-104"
        rating={4}
        image="https://m.media-amazon.com/images/I/61EGLdlx8kL._SX309_BO1,204,203,200_.jpg"
      /> 
       <Product
        title="The only Shark who made the shrak tank india a worth of Rs 500 crore-Ashneer Grover"
        price={199.00}
        id="PR-105"
        rating={4}
        image="https://m.media-amazon.com/images/I/61EGLdlx8kL._SX309_BO1,204,203,200_.jpg"
      /> 
       <Product
        title="The only Shark who made the shrak tank india a worth of Rs 500 crore-Ashneer Grover"
        price={199.00}
        id="PR-106"
        rating={4}
        image="https://m.media-amazon.com/images/I/61EGLdlx8kL._SX309_BO1,204,203,200_.jpg"
      />      
      </div>
      {/*Product*/}
    </div>
  );
}

export default Home;
