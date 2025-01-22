import React from "react";
import BlogComponent_1 from "../components/BlogComponent_1";
import { FaArrowRightLong } from "react-icons/fa6";
import Image1 from "../assets/Image_1.png";
import Image2 from "../assets/Image_2.png";
import Image3 from "../assets/Image_3.png";
import Image4 from "../assets/Image_4.png";
import Image5 from "../assets/Image_5.png";
import Image6 from "../assets/Image_6.png";

const blogsArray = [
  {
    id: 1,
    img: Image1,
    name: "Prabhash Mishra",
    title: "Small Business & Startup",
    subtitle:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Tax & Audit", "Management"],
  },
  {
    id: 2,
    img: Image2,
    name: "Mahesh Kumar",
    title: "Scale-Up Company Offer",
    subtitle:
      "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Tax", "Research", "compilance"],
  },
  {
    id: 3,
    img: Image3,
    name: "Rakhi Verma",
    title: "Growing Business Package",
    subtitle:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: ["Audit", "Money Back"],
  },
  {
    id: 4,
    img: Image4,
    name: "Karan Kumar",
    title: "Scale-Up Company Offer",
    subtitle:
      "Collaboration can make our teams stronger, and our individual designs better.",
    tags: ["Money", "Management"],
  },
  {
    id: 5,
    img: Image5,
    name: "Richa Singh",
    title: "Scale-Up Company Offer",
    subtitle:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    tags: ["Tax Return", "News", "Audit"],
  },
  {
    id: 6,
    img: Image6,
    name: "Miss Nora",
    title: "Scale-Up Company Offer",
    subtitle:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    tags: ["Private Limited Company", "Customer Sucess"],
  },
];

const Blogs = () => {
  return (
    <section className="h-full" id="blog">
      <div className="justify-center m-16">
        <div className=" flex flex-col items-center gap-5">
          <h3 className="font-normal text-[18px] text-orange-500">
            EXPLORE OUR BLOG
          </h3>
          <h1 className="font-bold text-center text-3xl">
            Accelerate Digital Transformation
          </h1>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {blogsArray.map((item) => (
              <BlogComponent_1
                key={item.id}
                img={item.img}
                name={item.name}
                title={item.title}
                subtitle={item.subtitle}
                tags={item.tags}
              />
            ))}
          </div>
          <div className="w-full flex  items-center justify-center mt-10 ">
            <button className="w-full sm:w-[25%] flex items-center justify-center gap-5 bg-blue-900 text-lg p-3 font-medium text-white">
              Show more Blogs <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
