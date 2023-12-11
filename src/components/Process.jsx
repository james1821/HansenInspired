import { TypeAnimation } from "react-type-animation";

function Process() {
  return (
    <div className="relative h-[100vh]">
      <div
        className="h-full w-full bg-cover"
        style={{
          backgroundImage:
            "url('https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/241233370_4499248420113175_2463705593942339963_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=b50f6c&_nc_ohc=TCbQN7z-5RcAX8yf5PW&_nc_ht=scontent.fmnl17-1.fna&oh=00_AfAjxUGGzYp5ofJLZ1Effxwputi7DuU2lIKT-BOK-gqScQ&oe=657B4303')",
        }}
      ></div>
      <div className="h-full w-full absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="text-white text-center flex flex-col items-center justify-center absolute inset-0">
        <h1 className="text-center md:text-6xl text-3xl font-bold p-10">
          The Selling Process
        </h1>
        <TypeAnimation
          sequence={[
            "1. INITIAL CONSULTATION & PLANNING",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "2. DEVISE & EXECUTE MARKETING PLAN",
            1000,
            "3. REVIEW OFFERS & REACH AGREEMENT WITH BUYER",
            1000,
            "4. COMPLETE TRANSACTION PROCESS",
            1000,
            "5. AFTER - SALE SERVICE",
            1000,
          ]}
          wrapper="span"
          deletionSpeed={20}
          speed={1}
          style={{ fontSize: "2em", display: "inline-block", font: "bold" }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}

export default Process;
