import { Outlet } from "react-router-dom";
import NavigationSideBar from "../components/NavigationSideBar";

const Dashboard = () => {
  return (
    <div className="flex ">
      <div className="overflow-y-hidden">
        <NavigationSideBar />
      </div>
      <div className="flex-1 ">
        <div className="h-16 w-full border bg-white">
          <div className="flex items-center justify-end h-full pr-6">
            <img
              className="my-auto"
              src="https://i.ibb.co/Wvqq29k/Frame-90.png"
              alt=""
            />
          </div>
        </div>
        <div className="p-5 overflow-y-scroll h-[100vh]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
