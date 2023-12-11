import CountUp, { useCountUp } from "react-countup";

function Process() {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className="relative h-[100vh]">
      <div
        className="h-full w-full bg-cover"
        style={{
          backgroundImage:
            "url('https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/241233370_4499248420113175_2463705593942339963_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=b50f6c&_nc_ohc=TCbQN7z-5RcAX8yf5PW&_nc_ht=scontent.fmnl17-1.fna&oh=00_AfAjxUGGzYp5ofJLZ1Effxwputi7DuU2lIKT-BOK-gqScQ&oe=657B4303')",
        }}
      ></div>
      <div className="h-full w-full absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="text-white text-center flex flex-col items-center justify-center absolute inset-0">
        <h1 className="text-center md:text-6xl text-5xl font-bold p-10">
          The Selling Process
        </h1>
        <div className="flex  md:flex-col text-4xl md:text-6xl font-bold items-center justify-center">
          <div className="gap-4 flex flex-col items-center justify-center ">
            <CountUp end={1} duration={3} enableScrollSpy />
            <p className="md:text-xl text-sm">
              INITIAL CONSULTATION & PLANNING
            </p>
            <CountUp end={2} duration={3} enableScrollSpy />
            <p className="md:text-xl text-sm">
              DEVISE & EXECUTE MARKETING PLAN
            </p>
            <CountUp end={3} duration={3} enableScrollSpy />
            <p className="md:text-xl text-sm">
              REVIEW OFFERS & REACH AGREEMENT WITH BUYER
            </p>
            <CountUp end={4} duration={3} enableScrollSpy />
            <p className="md:text-xl text-sm">COMPLETE TRANSACTION PROCESS</p>
            <CountUp end={5} duration={3} enableScrollSpy />
            <p className="md:text-xl text-sm">AFTER-SALE SERVICE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
