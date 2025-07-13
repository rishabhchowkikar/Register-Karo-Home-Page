import React from "react";
import "./Swiper.scss";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
const SwiperComponent = () => {
  const cards = [
    {
      title: "New Income Tax Efiling portal",
      text: "The Central Board of Direct Taxes (CBDT) launched the new IT e-filing portal on 7th June 2021.",
    },
    {
      title: "Link Aadhaar with PAN to e-file",
      text: "The IT department has made it mandatory to link your Aadhaar number with your PAN card.",
    },
    {
      title: "Income Tax Calculator",
      text: "Calculate your Income Tax for FY 2021-22 or previous years.",
    },
    {
      title: "Previous year filing",
      text: "File your belated IT return anytime on or before 1 year from the end of the relevant Assessment Year (AY).",
    },
  ];

  return (
    <div className="container py-5">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1} // Default for mobile
        breakpoints={{
          640: { slidesPerView: 2 }, // Tablet View
          1024: { slidesPerView: 4 }, // Desktop View
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>{card.title}</MDBCardTitle>
                <MDBCardText>{card.text}</MDBCardText>
                <MDBBtn href="#">Know more →</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
