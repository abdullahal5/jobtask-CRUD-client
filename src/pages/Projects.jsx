import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { Fragment, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

const Projects = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [text, setText] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (!file) return;
    else {
      setIsLoading(true);
    }

    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await axios.post(
        "https://api.imgbb.com/1/upload?key=32759f60f432e8e5c388e20a2da70600",
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );

      setImageUrl(res.data.data.display_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      imageUrl,
      text,
    };
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-5xl font-semibold"> My Projects</h1>
      <div className="pt-4 flex flex-wrap gap-5">
        <img
          className="cursor-pointer w-[250px]"
          onClick={() => openModal(!isOpen)}
          src="https://i.ibb.co/GM9nsrW/Frame-94.png"
          alt=""
        />
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 pb-5"
                    >
                      Add new Project
                    </Dialog.Title>
                    <div className="mt-2 text-center">
                      <div className="my-3">
                        {isLoading ? (
                          <AiOutlineLoading
                            fontSize={"2rem"}
                            className="animate-spin mx-auto"
                          />
                        ) : (
                          imageUrl && (
                            <div>
                              <img className="mx-auto" src={imageUrl} alt="" />
                            </div>
                          )
                        )}
                      </div>
                      <label className="relative cursor-pointer bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg text-white font-semibold">
                        <span>Choose a image</span>
                        <input
                          id="file-upload"
                          name="image"
                          onChange={handleFileChange}
                          type="file"
                          className="absolute inset-0 opacity-0 z-10"
                          required
                        />
                      </label>
                      <input
                        className="py-3 pl-3 w-full outline-none border border-gray-400 bg-gray-200 rounded-xl mt-5"
                        name="author"
                        onChange={(e) => setText(e.target.value)}
                        placeholder="author name"
                      />
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="px-5 py-2 rounded-xl bg-green-800 text-white font-semibold mt-5"
                      >
                        Submit
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default Projects;

// jobtask;
// qhcOOqKFsLjVzqHb;

// mongodb+srv://<username>:<password>@cluster0.zelnjpd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
