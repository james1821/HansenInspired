import { Slide, Fade } from "react-awesome-reveal";
function WeMarket() {
  return (
    <div className="h-full">
      <div className="px-10 gap-5 text-black text-center font-bold flex flex-col items-center justify-center h-full ">
        <div className="md:px-10 flex flex-col justify-center items-center  gap-5 ">
          <Slide direction="right" triggerOnce>
            <div>
              <h1 className="text-6xl">We Market Your Home to The World</h1>
              <p className="text-3xl">
                Our Online Marketing Strategy ​​​​​​​The Bay Area remains one of
                the world's most sought-after regions to live in, and when
                looking to sell, it is vital that your home be marketed online
                to audiences locally, nationally, and internationally.
              </p>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div className="px-10 flex flex-col justify-center items-center ">
              <h1 className="text-5xl ">Local Exposure</h1>
              <p className="text-xl ">
                Through our partnership with Nextdoor, the private online social
                network now used in over 80% of U.S. neighborhoods and virtually
                all Bay Area neighborhoods, we make sure your home receives
                targeted local exposure. When you list your home with Hansen
                Partners it will automatically appear on Nextdoor in your
                neighborhood.
              </p>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div className="px-10 flex flex-col justify-center items-center ">
              <h1 className="text-5xl ">National Exposure</h1>
              <p className="text-xl">
                We secure strategic positioning and enhancement on Realtor.com,
                Trulia, and Zillow, driving more consumers to your home and
                increasing exposure. We will receive every inquiry about your
                property directly.
              </p>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div className="px-10 flex flex-col justify-center items-center ">
              <h1 className="text-5xl ">International Exposure</h1>
              <p className="text-xl">
                To expose your luxury listing to millions of potential
                homebuyers worldwide, we promote on prominent international real
                estate portals, including: Wall Street Journal,
                LuxuryPortfolio.com, LuxuryRealEstate.com, LeadingRE.com,
                UniqueHomes.com, China.apr.com, Caimeiju, Juwai, Country Life UK
              </p>
            </div>
          </Slide>
        </div>
        <Fade>
          <img
            src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/olcvsnzpdrd5tov8dbci/image-057"
            alt=""
          />
        </Fade>
      </div>
    </div>
  );
}

export default WeMarket;
