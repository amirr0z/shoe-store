export default function ProductCard(props) {
    return (
        <div className="rounded-lg shrink-0  w-52 bg-zinc-800 flex flex-col  p-1 items-center hover:brightness-50 transition-all">
            <img className="rounded-lg w-full h-52" src={props.img} />
            <h5 className="text-lg">code #{props.code}</h5>
            <p className="text-sm">price: {props.price}$</p>
        </div>
    );
}
