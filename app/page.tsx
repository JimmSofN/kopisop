import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Review from "./components/Review";
import Service from "./components/Service";
import Team from "./components/Team";

export default function Home() {
  return (
    <div>
      <Hero />
      <Service />
      <Product />
      <Gallery />
      <Team />
      <Review />
    </div>
  );
}
