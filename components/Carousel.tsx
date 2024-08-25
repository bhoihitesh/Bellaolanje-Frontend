"use client";
import { Carousel } from "antd";
import "../styles/carousel.css";
import React, { useState } from "react";
import { Skeleton, Image, Button } from "antd";
const CarouselSlider = () => {
  const contentStyle: React.CSSProperties = {
    height: "40px",
    padding: "0px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#000",
  };
  const [loading, setLoading] = useState(false);

  // const img = new Image();
  return (
    <>
      <Carousel autoplay style={{padding:'10px', borderRadius:'10px'}} >
        <div className="image-container">
          <div style={{padding:'4px', borderRadius:'10px'}}>
          <Image
            src={
              "https://res.cloudinary.com/dqwzddm94/image/upload/v1723891678/pdcyuqzm1ru7gwaakzba.png"
            }
            alt="Image"
            width={'100%'}
            height="300px"
          />
          </div>
          <div className="btn-grp">
          <Button type="primary">View</Button>
          <Button type="primary">Visit</Button>
          </div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
        <div style={{padding:'10px'}}>
          <Image
            src={
              "https://res.cloudinary.com/dqwzddm94/image/upload/v1723891678/pdcyuqzm1ru7gwaakzba.png"
            }
            alt="Image"
            width={'100%'}
            height="300px"

          />
          </div>
          <div className="btn-grp">
          <Button type="primary">View</Button>
          <Button type="primary">Visit</Button>
          </div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
        <div style={{padding:'10px'}}>
          <Image
            src={
              "https://res.cloudinary.com/dqwzddm94/image/upload/v1723891678/pdcyuqzm1ru7gwaakzba.png"
            }
            alt="Image"
            width={'100%'}
            height="300px"

          />
          </div>
          <div className="btn-grp">
          <Button type="primary">View</Button>
          <Button type="primary">Visit</Button>
          </div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
        <div style={{padding:'10px'}}>
          <Image
            src={
              "https://res.cloudinary.com/dqwzddm94/image/upload/f_auto,q_auto/uve3y5dn76qzrcv4ka3x"
            }
            alt="Image"
            width={'100%'}
            height="300px"

          />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, non.
          </p>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  );
};

export default CarouselSlider;
