import React from "react";
import Header from "./Components/Header/Header";
import LetsGrow from "./Components/HomePage/Lets Grow/LetsGrow";
import WhyChooseUs from "./Components/HomePage/WhyChooseUs/WhyChooseUs";
import GrowingBuisness from "./Components/HomePage/GrowingBuisness/GrowingBuisness";
import Carousel from "./Components/HomePage/Carousel/Carousel";
import BlogPost from "./Components/HomePage/BlogPost/BlogPost";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <LetsGrow />
      <WhyChooseUs />
      <GrowingBuisness />
      <Carousel />
      <BlogPost />
      <Footer />
    </div>
  );
}

export default App;
