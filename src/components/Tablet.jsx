import { Slide } from "react-awesome-reveal";
function Tablet() {
  return (
    <div>
      <div className="lg:h-screen flex flex-col lg:flex-row justify-center items-center">
        <div className="w-1/2">
          <div className="grid md:grid-cols-2 grid-cols-1  text-center lg:px-40">
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
                  I market your property locally, nationally, and
                  internationally.
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
                  Let’s make your home stand out with a high quality virtual
                  tour.
                </p>
              </div>
            </Slide>
            <Slide direction="up">
              <div className="bg-white p-4">
                <img
                  className="w-autol h-40 object-cover m-auto"
                  src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qljffx423kswkhh1oyc3/image-081"
                  alt="Responsive"
                />
                <h2 className="text-xl font-bold mb-2">Drone Photography</h2>
                <p className="text-gray-600">
                  Beautiful photography is a central part of our marketing plan
                  for your property.
                </p>
              </div>
            </Slide>
          </div>
        </div>
        <div className="w-1/2">
          <img
            className="lg:h-[500px] m-auto"
            src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/vxnwvueubpgtfzn1k3cs/edited-p25"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Tablet;
