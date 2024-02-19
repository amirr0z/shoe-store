import ProductCard from "@/components/productCard";

export default function Products() {
    return (
        <div className="flex flex-wrap shrink-0 grow-0 text-white gap-3 items-center justify-around w-full py-5">
            <ProductCard code="dddd" price="80" img="shopping.webp" />
            <ProductCard code="232" price="80" img="shopping2.webp" />
            <ProductCard code="3232" price="80" img="shopping1.webp" />
            <ProductCard code="3232" price="80" img="shopping1.webp" />
            <ProductCard code="dddd" price="80" img="shopping.webp" />
            <ProductCard code="232" price="80" img="shopping2.webp" />
            <ProductCard code="3232" price="80" img="shopping1.webp" />
            <ProductCard code="3232" price="80" img="shopping1.webp" />
        </div>
    );
}
