
interface Props{
  testimonial:any
}

const SingleTestimonial = ({ testimonial }:Props) => {
  const {  name, image, content } = testimonial;


  return (
    <div className="w-full">
      <div
        className="wow fadeInUp border lg:border:none md:border-none  bg-white p-8 shadow-none lg:shadow-md transition delay-150 duration-300 ease-in-out lg:hover:shadow-lg cursor-pointer md:shadow-md rounded-md  lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        
        <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          “{content}
        </p>
        <div className="flex items-center">
        <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
            <img src={image} alt={name} className="object-cover w-full h-full" />
          </div>
          <div className="w-full">
            <h5 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {name}
            </h5>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
