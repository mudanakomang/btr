import { useRouter } from "next/router";
import React from "react";
import Navbar from "./BaseNavbar";
import CarouselComponent from "./Carousel";
import FooterComponent from "./Footer";

export default function SimpleLayout(props) {
  const router = useRouter();
  return (
    <>
      <Navbar />
      { router.pathname === "/" && <CarouselComponent /> }
      <main role="main">
        {props.preContainer && props.preContainer}             
          <div className="container-fluid pt-5">
            {props.children}        
        </div>
      </main>
      <div className="container-fluid py-3 bg-dark">
        <FooterComponent />
      </div>
    </>
  )
}