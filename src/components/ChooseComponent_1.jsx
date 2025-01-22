import React from "react";
import YoutubeImg from "../assets/youtubeImg.png";
import { IoBulb } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const contentArray = [
  {
    id: 1,
    Icon: IoBulb,
    title: "Explore ideas together",
    subtitle:
      "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
  },
  {
    id: 2,
    Icon: AiOutlineFundProjectionScreen,
    title: "Bring those ideas to life",
    subtitle:
      "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
  },
];

const ChooseComponent_1 = () => {
  return (
    <div className="bg-blue-900">
      <div className="mx-10 sm:mx-24 py-6 flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-24">
        <div className="text-center sm:text-left space-y-6 w-full sm:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-medium text-white">
            Our Video Introduction
          </h1>
          <p className="text-slate-500 text-base  sm:text-lg">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </p>

          <div className="space-y-6">
            {contentArray.map(({ Icon, id, title, subtitle }) => (
              <div key={id} className="flex items-center gap-5">
                <span className="p-3 bg-orange-500 rounded-full text-white">
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <h2 className="text-lg text-left  text-white font-medium">
                    {title}
                  </h2>
                  <p className="text-left  text-slate-500">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end mt-6 sm:mt-0">
          <img
            draggable={false}
            src={YoutubeImg}
            alt="Youtube Video"
            className="w-full sm:w-auto max-h-[500px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseComponent_1;
