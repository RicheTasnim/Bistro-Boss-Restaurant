import { useEffect } from "react";
import menuImg from "../../../assets/menu/banner3.jpg";
import Cover from "../../Shared/Cover/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter(item => item.category === 'offered');
  const pizza = menu.filter(item => item.category === 'pizza');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const dessert = menu.filter(item => item.category === 'dessert');

  useEffect(() => {
    document.title = "Bistro | Menu";
  }, []);
  return (
    <div>
      {/* main cover */}
        <Cover img={menuImg} title={'our menu'}></Cover>
        {/* offered menu items */}
        <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"}></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
        <MenuCategory items={dessert} title={"dessert"} img={dessertImg}></MenuCategory>
        <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
        <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
        <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
