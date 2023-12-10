import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Slide, Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Decor() {
  return (
    <div>
      <div className="md:grid grid-cols-2  text-center md:px-20 pt-10 ">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
        >
          <SwiperSlide key="1">
            <div
              className=" h-[200px] md:h-[500px] bg-cover flex flex-col items-center justify-center"
              style={{
                backgroundImage:
                  'url("https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/ghtq7jtce7tsgdjtosrs/image-025")',
              }}
            >
              <Slide>
                <div className="pt-20">
                  <h1 className="text-4xl font-bold md:text-6xl text-white">
                    Decor Guidance
                  </h1>
                </div>
              </Slide>
            </div>
          </SwiperSlide>

          <SwiperSlide key="2">
            {" "}
            {/* Use a unique key, e.g., "2" */}
            <div
              className=" h-[200px] md:h-[500px] bg-cover flex flex-col items-center justify-center"
              style={{
                backgroundImage:
                  'url("https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/axx0whb7xfmlwhvcckrr/image-023")', // Provide the URL for the second image
              }}
            >
              <Slide>
                <div className="pb-20">
                  <h1 className="text-4xl font-bold md:text-6xl text-black bg-white">
                    Intentional Layout
                  </h1>
                </div>
              </Slide>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="">
          <h1 className=" text-4xl font-bold py-5 lg:text-6xl  text-black ">
            My Staging Expertise
          </h1>
          <div className="text-black text-xl md:grid grid-cols-2 md:p-10 gap-5 flex flex-col">
            <Fade>
              <div>
                <FontAwesomeIcon icon={faHouseCircleCheck} size="4x" />
                <p>Unclutter and organize your home</p>
              </div>

              <div>
                <FontAwesomeIcon icon={faBox} size="4x" />
                <p>Neatly arrange drawers and cabinets</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faPaw} size="4x" />
                <p>Keep pets outdoors or off the premises</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faMusic} size="4x" />
                <p>Play soft music</p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Decor;
