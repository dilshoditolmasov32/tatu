import { Swiper, SwiperSlide } from "swiper/react";
import "./Swipper.css";
import "swiper/css/pagination";
import "swiper/css";
import xurmo from "../../assets/images/xurmo.jpg";
import olma from "../../assets/images/olma.png";
import uzum from "../../assets/images/uzumlar.png";
import anor from "../../assets/images/anor.jpeg";

import { Pagination } from "swiper/modules";
const Swipper = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero-section">
            <div className="hero-section-text">
              <h6>
                <span>100%</span>Organic Vegetables
              </h6>
              <h2>The best way to stuff your wallet.</h2>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                reiciendis beatae consequuntur.
              </p>
            </div>
            <div>
              <img src={xurmo} alt="ferrari" className="car" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-section">
            <div className="hero-section-text">
              <h6>
                <span>100%</span>Organic Vegetables
              </h6>
              <h2>The best way to stuff your wallet.</h2>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                reiciendis beatae consequuntur.
              </p>
            </div>
            <div>
              <img src={uzum} alt="ferrari" className="car" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-section">
            <div className="hero-section-text">
              <h6>
                <span>100%</span>Organic Vegetables
              </h6>
              <h2>The best way to stuff your wallet.</h2>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                reiciendis beatae consequuntur.
              </p>
            </div>
            <div>
              <img src={anor} alt="ferrari" className="car" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-section">
            <div className="hero-section-text">
              <h6>
                <span>100%</span>Organic Vegetables
              </h6>
              <h2>The best way to stuff your wallet.</h2>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                reiciendis beatae consequuntur.
              </p>
            </div>
            <div>
              <img src={olma} alt="ferrari" className="car" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swipper;
