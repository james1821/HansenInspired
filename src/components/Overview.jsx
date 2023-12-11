import { Slide } from "react-awesome-reveal";
function Overview() {
  return (
    <div className="container mx-auto my-10 p-5 text-center">
      <div className="flex flex-col md:flex-row md:items-center lg:h-screen">
        {/* First column with text */}
        <div className="md:w-1/2 md:pr-10">
          <Slide>
            <h2 className="text-4xl font-bold mb-4">
              Over 33 Years of Real Estate Success
            </h2>

            <p className="text-lg mb-4">
              We provide every one of our clients with a level of service they
              won’t find anywhere else. We give them what they need, often
              before they know they need it. ​​​​​​​In real estate, almost
              everything can be negotiated. When you choose Hansen Partners It
              is experience is 100% nonnegotiable. ​​​​​​​ ​​​​​​​And it’s an
              experience like no other.
            </p>
          </Slide>
        </div>

        {/* Second column with image */}
        <div className="md:w-1/2 md:pl-10">
          <Slide direction="right">
            <img
              src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/azjfmtzx6evxpubynfci/edit-page-11r2"
              alt="Alternate Text"
              className="w-full h-auto rounded-lg"
            />
          </Slide>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse md:items-center lg:h-screen">
        {/* Second column with image */}
        <div className="md:w-1/2 md:pr-10 order-first md:order-last">
          <Slide>
            <img
              src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/m5ea1kpipv5tiflnfx8t/edited-p-12"
              alt="Alternate Text"
              className="w-full h-auto rounded-lg"
            />
          </Slide>
        </div>

        {/* First column with text */}
        <div className="md:w-1/2 md:pl-10 order-last md:order-first">
          <Slide direction="right">
            <h2 className="text-4xl font-bold mb-4">
              We Want To Create An Unforgettable Experience For You...
            </h2>
            <p className="text-lg mb-4">
              We combine data gained from your home’s Comparative Market
              Analysis with local market research to create a marketing plan
              designed to help you meet your selling goals. Your home’s
              carefully designed plan will include a range of online, print, and
              other marketing tools targeted to the best-qualified pool of
              buyers. ​​​​​​​ Successfully marketing a home in today’s real
              estate environment requires a firm with experience and
              flexibility. Hansen Partners provides both.
            </p>
          </Slide>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row md:items-center lg:h-screen">
        {/* Second column with image */}
        <div className="md:w-1/2 md:pr-10 order-first md:order-last">
          <Slide direction="right">
            <img
              src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/fuammgjubhjfvgcqleef/edit-image-056"
              alt="Alternate Text"
              className="w-full h-auto rounded-lg"
            />
          </Slide>
        </div>

        {/* First column with text */}
        <div className="md:w-1/2 md:pl-10 order-last md:order-first">
          <Slide>
            <h2 className="text-4xl font-bold mb-4 pt-5">
              The Hansen Partners Communications Tablet
            </h2>
            <p className="text-lg mb-4 md:pr-10 text-justify">
              We have created this as a wonderful tool so that we can
              communicate with you daily, provide you with updates on what is
              happening with your home. We are available at the with a click of
              your tablet. Benefits:{" "}
              <ul className="list-disc font-bold">
                <li>
                  Review all documents and sign in the comfort of your home or
                  anywhere.
                </li>
                <li>
                  Stay up to date on all marketing activities, review materials,
                  photos, etc. in real time.
                </li>
                <li>
                  Meet with us face to face on our Gotomeeting.com platform to
                  go over and discuss the events of the week.
                </li>
                <li>
                  You have your own email assigned just for you and your common
                  space to quickly write a note or quickly send a video message
                  to us for fast communication using our Bomb bomb video
                  messaging system.
                </li>
              </ul>{" "}
              We believe that transparency and guiding you and your family
              through the process is key to having the best experience. During
              these uncertain times. It is a good feeling to know you have some
              one with a proven track record you can count on. We will be here
              to handle your needs during the Real Estate process. We think of
              it before a need even arises. Because, that is just what we do.
              Who you work with does matter!
            </p>
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Overview;
