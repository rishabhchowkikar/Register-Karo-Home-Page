import React from "react";
import { PiNoteLight } from "react-icons/pi";
import { BsFillCreditCardFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { GiVrHeadset } from "react-icons/gi";

const ArrayOfServices = [
  {
    id: 1,
    Icons: PiNoteLight,
    title: "Fill Up Application Form",
    color: "bg-blue-500",
  },
  {
    id: 2,
    Icons: BsFillCreditCardFill,
    title: "Make Online Payment",
    color: "bg-green-500",
  },
  {
    id: 3,
    Icons: GiVrHeadset,
    title: "Executive will Process Application",
    color: "bg-red-500",
  },
  { id: 4, Icons: IoMdMail, title: "Get Confirm Mail", color: "bg-yellow-500" },
];

const ClientComponent_1 = () => {
  return (
    <div className="h-full flex justify-center py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {ArrayOfServices.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-1 justify-center p-4 rounded-lg"
          >
            <span
              className={`${item.color} flex justify-center p-4 rounded-full`}
            >
              {<item.Icons size={25} className="text-white" />}
            </span>
            <h3 className="text-lg font-semibold text-left w-full max-w-[300px]">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientComponent_1;
