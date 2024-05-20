import React, { useState,useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios"
import Cards from "./Cards";
function FreeBook() {
  const [Book,setBook] = useState([])
  useEffect(()=>{
    const getBook = async() =>{
      try {
        const resp = await axios.get("http://localhost:4000/book");
        console.log('Hiiiii');
        console.log(resp.data);
        const data = resp.data.filter((data) => data.category === "Free");
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  ">
        <div>
          <h1 className="font-semibold  text-xl pb-2 ">Free Offered Book</h1>
          <p>
            Lorem ipsum dolor sit amet. Eum quaerat quidem est asperiores velit
            est ullam numquam et cumque veritatis est iure accusantium! Sed
            aspernatur ipsam eum sunt galisum sit dolore
          </p>
        </div>
        <div>
          <Slider {...settings}>
           {Book.map((item) => (<Cards item = {item} key = {item.id}/>))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
