export default function StaffCard(props) {
    return (
        <div className="rounded-lg shrink-0 grow-0 w-44  border-zinc-800 border-solid border-2 flex flex-col  p-1 pt-14 m-3 items-center relative">
            <div className="absolute -top-10 left-10 w-24 h-24 rounded-full overflow-hidden border-zinc-800 border-solid border-2">
                <img className="w-full h-auto" src={props.img} />
            </div>
            <h5 className="text-lg">{props.name}</h5>
            <h5 className="text-md text-gray-700">{props.position}</h5>
            <p className="text-sm text-gray-500">Phone: {props.phone}</p>
        </div>
    );
}
