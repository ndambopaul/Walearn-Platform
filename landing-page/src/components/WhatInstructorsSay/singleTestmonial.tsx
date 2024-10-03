
import { AiFillStar } from "react-icons/ai";

interface Props{
  testimonial:any
}
const SingleTestimonial = ({ testimonial }:Props) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        <AiFillStar  className="text-yellow"/>
      </span>
    );
  }

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp rounded-md  border lg:border:none md:border-non bg-white p-8 rounded-lg bg-white shadow:none lg:shadow-md md:shadow-md transition delay-150 duration-300 ease-in-out lg:hover:shadow-lg lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
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
            <p className="text-sm text-body-color">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
