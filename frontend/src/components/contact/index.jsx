import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-8 md:py-10 lg:py-18 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 md:grid-cols-5">
         
            <div
              className="col-span-3 wow fadeInUp mb-12  rounded-md bg-primary/[3%] py-10 px-6 dark:bg-dark "
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Get in Touch
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form className="flex flex-col gap-4">
  <div className="w-full">
    <label
      htmlFor="name"
      className="mb-3 block text-sm font-medium text-dark dark:text-white text-left"
    >
      Your Name
    </label>
    <input
      type="text"
      placeholder="Enter your name"
      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
    />
  </div>
  <div className="w-full">
    <label
      htmlFor="email"
      className="mb-3 block text-sm font-medium text-dark dark:text-white text-left"
    >
      Your Email
    </label>
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
    />
  </div>
  <div className="w-full">
    <label
      htmlFor="message"
      className="mb-3 block text-sm font-medium text-dark dark:text-white text-left"
    >
      Your Message
    </label>
    <textarea
      name="message"
      rows={5}
      placeholder="Enter your Message"
      className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
    ></textarea>
  </div>
  <div className="w-full sm:w-32 lg:w-32 ">
    <button className="w-full sm:w-32 lg:w-32 rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
      Send
    </button>
  </div>
</form>

            </div>
   
          <div className="col-span-2">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
