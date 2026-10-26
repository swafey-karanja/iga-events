import Hero from "@/src/components/sections/Hero";
import Events from "@/src/components/sections/Events";
import Stats from "@/src/components/sections/Stats";
import Capabilities from "@/src/components/sections/Capablities";
import About from "@/src/components/sections/About";
import News from "@/src/components/sections/News";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Events />
      <Stats />
      <Capabilities />
      <About />
      <News />
    </>
  );
}
