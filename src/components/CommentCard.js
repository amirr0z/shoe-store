export default function CommentCard(props) {
    return (
        <div className="rounded-lg shrink-0 grow-0 w-44  border-zinc-800 border-solid border-2 flex flex-col  p-3 pt-8 m-3 items-center relative">
            <div className="flex flex-row absolute -top-7 left-4 w-44 bg-white items-center">
                <div className=" w-14 h-14 rounded-full overflow-hidden border-zinc-800 border-solid border-2">
                    <img className="w-full h-auto" src={props.img} />
                </div>
                <h5 className="text-md mx-2">{props.name}</h5>
            </div>
            <p className="text-sm text-gray-500">{props.comment}</p>
        </div>
    );
}
