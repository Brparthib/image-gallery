import { useEffect, useState } from "react";
import Images from "../Images/Images";
import gallery from "../assets/images/gallery.png";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("gallery.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div>
      <div className="card w-10/12 mt-24 bg-base-100 shadow-sm mx-auto border">
        <div className="card-body">
          <div className="flex">
            <div className="w-5/12">
              <div className="card rounded-lg mr-8">
                {images.slice(0, 1).map((image) => (
                  <Images key={image.id} image={image}></Images>
                ))}
              </div>
            </div>
            <div className="w-7/12 grid grid-cols-3 gap-4">
              {images.slice(1, 7).map((image) => (
                <Images key={image.id} image={image}></Images>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-5 gap-4">
              {images.slice(7, images.length).map((image) => (
                <Images key={image.id} image={image}></Images>
              ))}
              <div className="card rounded-lg">
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-48 h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 p-6">
                    <img src={gallery} alt="" />
                    <p className="text-lg text-gray-400">
                      <span className="font-semibold">Add Image</span>
                    </p>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
