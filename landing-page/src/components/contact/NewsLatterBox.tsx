const NewsLatterBox = () => {
  return (
    <div
    className=" mx-auto flex items-center justify-center overflow-hidden py-8 md:py-10 lg:py-18 bg-white mt-[75px]"
    
    >
      <div className="container mx-auto flex items-center justify-center">
      <form className="space-y-3 ">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Subscribe to receive future updates
      </h3>
      <p className="text text-normal">
        Get our latest news and updates directly to your inbox.
      </p>
       
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="mb-4 w-full rounded-md border border-gray-400  py-3 px-6 text-base font-medium text-normal placeholder-gray-300 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none "
        />
        <div
          className="text-center duration-80 mb-4 w-full cursor-pointer rounded-md border border-gray-400 bg-primary py-3 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-opacity-80 hover:shadow-signUp focus-visible:shadow-none"
        >
          Subscribe
          </div>
        <p className="text-center  font-normal leading-relaxed text-normal">
          No spam guaranteed, So please don’t send any spam mail.
        </p>
      </form>
</div>
    </div>
  );
};

export default NewsLatterBox;
