import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  const orderItems = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  const orderedItems = orderItems(items, 6);

  return (
    <div>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {orderedItems.map((items, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-3 gap-10">
              {items.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
