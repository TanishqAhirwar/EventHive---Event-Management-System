import React from "react";
import Category from "../components/category";
import Eventbylocation from "../components/eventbylocation";
import EventsGrid from "../components/Eventgrid";
import Footer from "../components/footer";
import GallerySection from "../components/Gallerysection";
import Navbar from "../components/Navbar";
import Testimonials from "../components/testimonials";
import HeroSection from "../components/Herosection";

export default function Homepage() {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/MainImage.jpg')" }} // use your path
      >
        <Navbar />
        <HeroSection />
      </div>
      <EventsGrid />
      <Category />
      <Eventbylocation />
      <GallerySection />
      <Testimonials />
      <Footer />
    </>
  );
}
