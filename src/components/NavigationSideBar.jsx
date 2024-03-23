import { LuDatabase } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";
import { IoIosApps } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { RiFeedbackFill } from "react-icons/ri";
import { IoMdArrowBack } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const NavigationSideBar = () => {
  return (
    <div className="w-80 border px-10 py-12 h-full bg-[#FFFFFF]">
      <Link to="/">
        <img
          className="mx-auto"
          src="https://i.ibb.co/HVF8r3C/Group-5.png"
          alt=""
        />
      </Link>
      <hr className="my-5 border border-gray-300" />
      <ul>
        <li className="hover:bg-gray-200 rounded-xl">
          <h1 className="text-xl font-semibold gap-2 py-2 px-5 text-gray-400">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-orange-500 items-center flex gap-2"
                  : "items-center flex gap-2"
              }
              to="/projects"
            >
              <LuDatabase className="inline" /> My Projects
            </NavLink>
          </h1>
        </li>
        <li className="hover:bg-gray-200 rounded-xl">
          <h1 className="text-xl font-semibold items-center flex justify-start gap-2 py-2 px-5 text-gray-400">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-orange-500 items-center flex gap-2"
                  : "items-center flex gap-2"
              }
              to="/sample"
            >
              <GrProjects className="inline" /> Sample Projects
            </NavLink>
          </h1>
        </li>
        <hr className="my-5 border border-gray-300" />
        <li className="hover:bg-gray-200 rounded-xl">
          <h1 className="text-xl font-semibold items-center flex justify-start gap-2 py-2 px-5 text-gray-400">
            <IoIosApps className="inline" /> Apps
          </h1>
        </li>
        <li className="hover:bg-gray-200 rounded-xl">
          <h1 className="text-xl font-semibold items-center flex justify-start gap-2 py-2 px-5 text-gray-400">
            <FaPlayCircle className="inline" /> Intro to Necleo
          </h1>
        </li>
        <div className="absolute bottom-0">
          <li className="hover:bg-gray-200 rounded-xl">
            <h1 className="text-xl font-semibold items-center flex justify-start gap-2 py-2 px-5 text-gray-400">
              <IoMdHelpCircle className="inline" /> Help & Support
            </h1>
          </li>
          <li className="hover:bg-gray-200 rounded-xl">
            <h1 className="text-xl font-semibold items-center flex justify-start gap-2 py-2 px-5 text-gray-400">
              <RiFeedbackFill className="inline" /> Feedback
            </h1>
          </li>
          <li className="hover:bg-gray-200 rounded-xl">
            <h1 className="text-xl font-semibold items-center flex justify-start gap-2 py-2 px-5 text-black">
              <IoMdArrowBack className="inline" /> Collapse
            </h1>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavigationSideBar;
