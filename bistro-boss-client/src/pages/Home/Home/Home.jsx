import { useEffect } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopuplarMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  useEffect(() => {
    document.title = "Bistro | Home";
  }, []);
  return (
    <div>
      <Banner />
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
