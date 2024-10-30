/* eslint-disable react/prop-types */
function ActionItem({ icon, text }) {
  return (
    <div className="m-auto flex flex-auto gap-3.5">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="aspect-square w-[50px] shrink-0 object-contain"
      />
      <div className="w-fit grow rounded bg-[#A4D3D9] p-4 text-center max-md:px-5">
        {text}
      </div>
    </div>
  );
}

export default ActionItem;
