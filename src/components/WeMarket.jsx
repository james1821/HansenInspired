function WeMarket() {
  return (
    <div className="relative h-screen">
      <div
        className="h-full w-full bg-cover "
        style={{
          backgroundImage:
            "url('https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.6435-9/193202850_4235794066458613_7086738651168113924_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c2f564&_nc_ohc=PE-m39O4ugEAX-sdBtV&_nc_ht=scontent.fmnl17-2.fna&oh=00_AfCycbM3wOOa383my1l6mUZbxwcpVpsk6wZQdUSwEnoWzw&oe=659DB4E0')",
        }}
      ></div>
      <div className="h-full w-full absolute inset-0 bg-white bg-opacity-90"></div>
      <div className="px-10 gap-5 text-black text-center font-bold flex flex-col items-center justify-center h-full absolute inset-0">
        <h1 className="text-6xl">We Market Your Home to The World</h1>
        <p className="text-3xl">
          Our Online Marketing Strategy ​​​​​​​The Bay Area remains one of the
          world's most sought-after regions to live in, and when looking to
          sell, it is vital that your home be marketed online to audiences
          locally, nationally, and internationally.
        </p>
        <div className="px-10 flex justify-center items-center  ">
          <div className="px-10 flex flex-col justify-center items-center ">
            <h1 className="text-5xl whitespace-nowrap">Local Exposure</h1>
            <p className="text-xl ">
              Through our partnership with Nextdoor, the private online social
              network now used in over 80% of U.S. neighborhoods and virtually
              all Bay Area neighborhoods, we make sure your home receives
              targeted local exposure. When you list your home with Hansen
              Partners it will automatically appear on Nextdoor in your
              neighborhood.
            </p>
          </div>
          <div className="px-10 flex flex-col justify-center items-center ">
            <h1 className="text-5xl whitespace-nowrap">National Exposure</h1>
            <p className="text-xl">
              We secure strategic positioning and enhancement on Realtor.com,
              Trulia, and Zillow, driving more consumers to your home and
              increasing exposure. We will receive every inquiry about your
              property directly.
            </p>
          </div>
          <div className="px-10 flex flex-col justify-center items-center ">
            <h1 className="text-5xl whitespace-nowrap">
              International Exposure
            </h1>
            <p className="text-xl">
              To expose your luxury listing to millions of potential homebuyers
              worldwide, we promote on prominent international real estate
              portals, including: Wall Street Journal, LuxuryPortfolio.com,
              LuxuryRealEstate.com, LeadingRE.com, UniqueHomes.com,
              China.apr.com, Caimeiju, Juwai, Country Life UK
            </p>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/olcvsnzpdrd5tov8dbci/image-057"
          alt=""
        />
      </div>
    </div>
  );
}

export default WeMarket;
