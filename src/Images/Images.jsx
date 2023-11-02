const Images = ({ image }) => {
  const { id, picture } = image;
  return (
    <div className="card rounded-lg">
      <img className="object-cover rounded-lg border" src={picture} alt="" />
      <div className="form-control hover:bg-gray-800 hover:bg-opacity-30 hover: rounded-lg transition-all hover:duration-500 absolute top-0 w-full h-full p-2">
        <label className="label cursor-pointer w-full h-full">
          <input type="checkbox" value="" className="checkbox checkbox-dark  bg-white rounded-sm hidden hover:block top-4 left-3 absolute" />
        </label>
      </div>
    </div>
  );
};

export default Images;
