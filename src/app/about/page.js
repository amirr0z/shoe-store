import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function About() {
  return (
    <div className="p-2 text-center flex items-center flex-col">
      <div className="text-2xl font-extrabold flex flex-row gap-1 items-center">
        <svg
          fill="#000000"
          width="30px"
          height="30px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>shoe-prints</title>
          <path d="M27.227 20.917l-6.21-1.664c0.204-2.22-0-4.745-1.205-7.11-0.18-6.195 1.867-11.962 6.835-10.631 5.468 1.466 4.865 13.9 0.58 19.404v0zM26.818 23.536c-0.343 11.973-12.512 6.497-6.318-1.693l6.318 1.693zM5.058 20.918l6.21-1.664c-0.204-2.22 0-4.745 1.205-7.11 0.18-6.195-1.867-11.962-6.835-10.631-5.468 1.465-4.865 13.899-0.58 19.404v0zM5.468 23.537c0.343 11.974 12.512 6.497 6.318-1.693l-6.318 1.693z"></path>
        </svg>
        <h3 href="/">Shoe Store</h3>
      </div>
      <p className="first-letter:font-extrabold first-letter:text-xl">
        {`Stride into a world of innovation and style with VelociSoles, a
        visionary shoe company redefining the boundaries of footwear. Our
        passion lies in the fusion of cutting-edge technology and timeless
        design, ensuring every step is a statement. From our sustainable
        materials to ergonomic engineering, VelociSoles is not just a brand;
        it's a commitment to comfort, fashion, and a sustainable future. Walk
        confidently, stand uniquely — experience the extraordinary with
        VelociSoles.`}
      </p>
      <p className="first-letter:font-extrabold first-letter:text-xl">
        {
          "At SoleCrafters, we don't just make shoes; we craft experiences\
                for your feet. With an unwavering dedication to quality and\
                craftsmanship, SoleCrafters brings forth a diverse collection\
                that seamlessly blends elegance and comfort. From urban\
                explorers to trendsetters, our footwear caters to all walks of\
                life, ensuring that each pair tells a story. Immerse yourself in\
                the artistry of shoemaking; step into SoleCrafters, where every\
                shoe is a testament to the perfect union of style and substance."
        }
      </p>
    </div>
  );
}
