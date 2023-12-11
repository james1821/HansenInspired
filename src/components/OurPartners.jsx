import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
function OurPartners() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:p-20 p-10">
        <div className="lg:w-1/2">
          <img
            className="lg:h-[90vh]"
            src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/og3ockhby4gghmrdfseo/edited-p-19"
            alt=""
          />
        </div>
        <div className="lg:w-1/2">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay]}
            className="mt-10 h-[150px]"
          >
            <SwiperSlide>
              <div>
                <img
                  className="m-auto h-[100px] w-auto"
                  src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/p4rjc7oqvxtccrdqejbt/image-060"
                  alt=""
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <img
                className="m-auto h-[100px] w-auto"
                src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ichuh7qj1rsu7mqxpl5p/image-069"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <img
                  className="m-auto h-[100px] w-auto"
                  src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/t3i3guvh1dnpwu8mrvuf/image-070"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <p className="text-center text-2xl">
            Leading Real Estate Companies of The World® & Luxury Portfolio
            International <br />
            <br />
            JRockcliff is a founding member of Luxury Portfolio International®,
            the luxury division of Leading Real Estate Companies of the World®.
            With more than 500 member firms around the world, Our luxury
            listings are exposed to a vast global audience and reach potential
            buyers and investors in over 50 countries.
            <br />
            <br /> Who's Who in Luxury Real Estate
            <br />
            <br /> Who’s Who in Luxury Real Estate is a global collection of
            luxury real estate brokers.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse lg:p-20 p-10">
        <div className="lg:w-1/2">
          <img
            className="lg:h-[90vh]"
            src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ebvif7iqcx0lcjlvwyuz/edited-page-20"
            alt=""
          />
        </div>
        <div className="lg:w-1/2">
          <p className="text-center text-2xl lg:pr-10 lg:pt-20">
            Through our international affiliations, we have a strong presence in
            over 50 countries. Our luxury listings are sent to prominent
            international real estate sites, reaching over 70 million potential
            buyers and investors worldwide through our relationships with:{" "}
            <br />
            <br />
          </p>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay]}
            className="mt-10 h-[150px]"
          >
            <SwiperSlide>
              <div>
                <img
                  className="m-auto h-[100px] w-auto"
                  src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/p4rjc7oqvxtccrdqejbt/image-060"
                  alt=""
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <img
                className="m-auto h-[100px] w-auto"
                src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ichuh7qj1rsu7mqxpl5p/image-069"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <img
                  className="m-auto h-[100px] w-auto"
                  src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/t3i3guvh1dnpwu8mrvuf/image-070"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <p className="text-center text-2xl lg:pr-10">
            We also have several well-positioned affiliate offices in China,
            providing our clients with access to buyers in Hong Kong, Shanghai,
            and Beijing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurPartners;
