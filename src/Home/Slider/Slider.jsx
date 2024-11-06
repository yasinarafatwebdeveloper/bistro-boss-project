
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider1 from"../../assets/home/slide1.jpg"
import slider2 from"../../assets/home/slide2.jpg"
import slider3 from"../../assets/home/slide3.jpg"
import slider4 from"../../assets/home/slide4.jpg"
import slider5 from"../../assets/home/slide5.jpg"
import SectionTitle from '../SectionTitle/SectionTitle';
// import slider6 from"../../assets/home/slide6.jpg"

const Slider = () => {
  return (
    <section>
      <SectionTitle subheading={"from 11.00 AM to 10.00 pm"} heading={"ORDER ONLINE"}>


      </SectionTitle>
    <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div>
            
        </div>
        <SwiperSlide>
          <img src={slider1}></img>
          <h2 className='text-2xl uppercase -mt-10 text-center text-white'>Salads</h2>
          </SwiperSlide>
        <SwiperSlide>
          <img src={slider2}></img>
          
          <h2 className='text-2xl uppercase -mt-10 text-center text-white'>Pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3}></img>
          
          <h2 className='text-2xl uppercase -mt-10 text-center text-white'>Soups</h2>
          </SwiperSlide>
        <SwiperSlide>
          <img src={slider4}></img>
          
          <h2 className='text-2xl uppercase -mt-10 text-center text-white'>Dresses</h2>
          </SwiperSlide>
        <SwiperSlide>
          <img src={slider5}></img>
          
          <h2 className='text-2xl uppercase -mt-10 text-center text-white'>Salads</h2>
          </SwiperSlide>
        {/* <SwiperSlide><img src={slider6}></img></SwiperSlide> */}
   
      </Swiper>
      </section>
  );
};

export default Slider;
