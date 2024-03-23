import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SampleProjects = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://picsum.photos/v2/list?page=1&limit=6"
        );
        if (!response) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
        setloading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setloading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-5xl font-semibold"> My Projects</h1>

      {loading ? (
        <div className="flex items-center justify-center h-[80vh]">
          <AiOutlineLoading3Quarters
            fontSize={"2rem"}
            className="animate-spin mx-auto"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
          {data?.map((item) => (
            <div className="bg-white p-3 rounded-xl" key={item?.id}>
              <img
                className="object-cover rounded-xl"
                height={450}
                width={250}
                src={item?.download_url}
                alt=""
              />
              <h1 className="py-3 text-lg">{item.author}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SampleProjects;
