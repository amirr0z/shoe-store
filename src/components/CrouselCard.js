export default function CrouselCard(props) {
  return (
    <div
      className="overflow-hidden flex flex-col xl:flex-row items-center h-max min-w-full"
      //   style={{ display: "none" }}
    >
      <div className="w-full xl:w-1/2">
        <img src={props.img} />
      </div>
      <div className="w-1/2 flex flex-col justify-start items-center text-center h-28 overflow-hidden">
        <h3 className="text-lg font-bold">{props.title}</h3>
        <p className="text-sm">{props.content}</p>
      </div>
    </div>
  );
}
