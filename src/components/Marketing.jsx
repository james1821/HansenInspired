import { Slide, Fade } from "react-awesome-reveal";
function Marketing() {
  return (
    <div className="font-serif">
      <h1 className="text-center pt-10 font-bold text-[40px] md:text-[50px]">
        Comprehensive Marketing Plan
      </h1>
      <div className="grid grid-cols-2  text-center lg:px-40">
        <Slide direction="up">
          <div className="bg-white p-4">
            <img
              className="w-autol h-40 object-cover m-auto"
              src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/rmtn3r5zpsljdsncbwa4/image-007"
              alt="Responsive"
            />
            <h2 className="text-xl font-bold mb-2">Responsive</h2>
            <p className="text-gray-600">
              I am always available via phone, text, or email.
            </p>
          </div>
        </Slide>
        <Slide direction="up">
          <div className="bg-white p-4">
            <img
              className="w-autol h-40 object-cover m-auto"
              src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ks8ztlvw2b35q5qgs6xn/image-011"
              alt="Responsive"
            />
            <h2 className="text-xl font-bold mb-2">Syndication</h2>
            <p className="text-gray-600">
              I market your property locally, nationally, and internationally
            </p>
          </div>
        </Slide>
        <Slide direction="up">
          <div className="bg-white p-4">
            <img
              className="w-autol h-40 object-cover m-auto"
              src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zr3bugldblvebixagfs1/image-009"
              alt="Responsive"
            />
            <h2 className="text-xl font-bold mb-2">Virtual Tour</h2>
            <p className="text-gray-600">
              Let's make your home stand out with a high quality virtual tour.
            </p>
          </div>
        </Slide>
        <Slide direction="up">
          <div className="bg-white p-4">
            <img
              className="w-autol h-40 object-cover m-auto"
              src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/dywgmsgzddtcsqxagbwh/image-013"
              alt="Responsive"
            />
            <h2 className="text-xl font-bold mb-2">Photography</h2>
            <p className="text-gray-600">
              Beatiful, high-end photography is a central part of our marketing
              plan for your property.
            </p>
          </div>
        </Slide>
      </div>

      <div className="flex flex-col  items-center justify-center lg:pl-20 gap-10">
        <Slide direction="left">
          <img
            className="  lg:h-[500px]"
            src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/hqguvxyyi5jciyrzy35v/page-3"
            alt=""
          />
        </Slide>
        <Fade>
          <div className="flex flex-col items-center justify-center text-center gap-5">
            <h1 className="text-4xl font-bold ">Julie Hansen Partnership</h1>

            <p className=" text-2xl px-2 md:px-40">
              An elite group of the East Bay’s most talented and visionary real
              estate professionals believed buyers and sellers deserved more
              from their real estate company. More service. More resources. More
              integrity. More global reach. In a word, more of everything people
              should expect when they buy or sell their homes.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Marketing;
