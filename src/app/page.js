import Image from "next/image";
import ProductCard from "../components/productCard";
import Nav from "@/components/Nav";
import StaffCard from "@/components/StaffCard";
import Crousel from "@/components/Crousel";
import CommentCard from "@/components/CommentCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Crousel />
      <div className="flex flex-col p-5  items-center my-3">
        <h3 className="text-xl font-bold m-2">Our Products</h3>
        <div className="flex flex-wrap shrink-0 grow-0 text-white gap-3 items-center justify-around w-full py-5">
          <ProductCard code="dddd" price="80" img="shopping.webp" />
          <ProductCard code="232" price="80" img="shopping2.webp" />
          <ProductCard code="3232" price="80" img="shopping1.webp" />
          <ProductCard code="3232" price="80" img="shopping1.webp" />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-around border-y-2 border-solid border-gray-400 my-3 p-3">
        <img
          className="w-14"
          src="amazon-shopping-alt-svgrepo-com.svg"
          alt="amazon"
        />
        <img className="w-14" src="adidas-svgrepo-com.svg" alt="adidas" />
        <img className="w-14" src="brand-nike-svgrepo-com.svg" alt="nike" />
      </div>

      <div
        className="flex flex-row items-center justify-center p-20 rounded-lg my-5"
        id="briefHistory"
      >
        <p className="text-white font-bold">
          Founded in the enchanting town of Soleburg in 1898 by cobbler
          Bartholomew Footworthy, FootElegance quickly became synonymous with
          unrivaled craftsmanship. Blending secret family leather treatments and
          an unwavering passion, the brand soared to global fame. From the
          roaring twenties&apos; "DanceFlex" to the disco-era "MirrorStride,"
          FootElegance&apos;s innovative designs have left an indelible mark on
          fashion history. Today, the Footworthy family legacy lives on, with
          each pair of FootElegance shoes a testament to a century-long
          commitment to comfort, style, and a touch of whimsy.
        </p>
      </div>

      <div className="flex flex-row items-center justify-around  text-gray-700 my-3">
        <div className="flex flex-col items-center">
          <p className="font-bold">900</p>
          <p>Happy Customers</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold">34973</p>
          <p>Sales Num</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold">400</p>
          <p>Work Hours</p>
        </div>
      </div>

      <div className="flex flex-wrap grow-0 shrink-0 items-center justify-around pt-10 gap-5 relative border-t-2 rounded-lg border-zinc-800 my-4">
        <div className="absolute h-10 rounded-xl bg-white w-max p-3 -top-7 left-10 text-black z-20 font-bold text-xl">
          Staff
        </div>
        <StaffCard
          name="Akbar Gholami"
          position="Manager"
          img="prof1.jpg"
          phone="098766541"
        />
        <StaffCard
          name="Nima Nazari "
          position="Hamal"
          img="prof2.avif"
          phone="098766541"
        />
        <StaffCard
          name="Sara Sahraii"
          position="Staff"
          img="prof2.jpg"
          phone="098766541"
        />
        <StaffCard
          name="Name Lastname"
          position="Hamal"
          img="prof3.jpg"
          phone="098766541"
        />
      </div>

      <div className="flex flex-wrap grow-0 shrink-0  items-start justify-around pt-8 border-t-2 rounded-lg border-zinc-800 relative my-5 gap-3">
        <div className="absolute h-10 rounded-xl bg-white w-max p-3 -top-7 left-10 text-black z-20 font-bold text-xl">
          Comments
        </div>
        <CommentCard
          name="Aghdas"
          img="prof5.jpg"
          comment="i recommend you to use this site as they respect costumer privacy"
        />
        <CommentCard
          name="Gholam"
          position="Hamal"
          img="prof4.avif"
          comment="delivery is perfect"
        />
        <CommentCard
          name="Gholam"
          position="Hamal"
          img="prof6.jpg"
          comment="quality of their product is awsome"
        />
      </div>
    </>
  );
}
