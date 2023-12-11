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
          <h1 className="bg-white text-xl md:text-3xl p-2">
            https://github.com/james1821/HansenInspired
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
