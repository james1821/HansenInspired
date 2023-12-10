import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Slide, Fade } from "react-awesome-reveal";
function Decor() {
  return (
    <div>
      <div className="md:grid grid-cols-2  text-center md:px-20 pt-10 ">
        <div
          className="relative h-[200px] md:h-[500px] bg-cover flex flex-col items-center justify-center "
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/ghtq7jtce7tsgdjtosrs/image-025")',
          }}
        >
          <Slide>
            <div className="pt-20">
              <h1 className="text-4xl font-bold md:text-6xl text-white ">
                Decor Guidance
              </h1>
            </div>
          </Slide>
        </div>

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
