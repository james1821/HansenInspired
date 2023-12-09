function Home() {
  return (
    <div className="relative h-[90vh] font-serif">
      <div
        className="h-full w-full bg-cover"
        style={{ backgroundImage: "url('/Home.jpg')" }}
      ></div>
      <div className="h-full w-full absolute inset-0 bg-gray-500 bg-opacity-50"></div>
      <div className="flex items-center justify-center h-full absolute inset-0">
        <div className="text-center flex flex-col items-center justify-center gap-5 ">
          <h1 className="text-[100px] text-white">Services</h1>
          <input
            className="rounded-md p-3 w-[50vw] text-center text-sm md:text-xl"
            type="text"
            placeholder="Search by Address or Area"
          />
          <button className="text-[20px] font-bold  p-5 rounded-lg text-white bg-black hover:text-black hover:bg-white">
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
