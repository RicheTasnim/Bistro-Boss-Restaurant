import React from "react";
import { useEffect } from "react";
import menuImg from "../../../assets/menu/menu-bg.png";
import PopularMenu from "../../Home/PopuplarMenu/PopularMenu";
import Cover from "../../Shared/Cover/Cover/Cover";

const Menu = () => {
  useEffect(() => {
    document.title = "Bistro | Menu";
  }, []);
  return (
    <div>
        <Cover img={menuImg} title={'our menu'}></Cover>
        <PopularMenu></PopularMenu>
        <Cover img={menuImg} title={'our menu'}></Cover>
        <PopularMenu></PopularMenu>
        <Cover img={menuImg} title={'our menu'}></Cover>
        <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
