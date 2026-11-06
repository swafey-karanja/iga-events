import Hero from "@/src/components/sections/Hero";
import Events from "@/src/components/sections/Events";
import Stats from "@/src/components/sections/Stats";
import Capabilities from "@/src/components/sections/Capablities";
import About from "@/src/components/sections/About";
import News from "@/src/components/sections/News";
import CompanyProfile from "@/src/components/sections/CompanyProfile";
import PastEvents from "@/src/components/sections/PastEvents";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Events />
      <PastEvents />
      <Capabilities />
      <Stats />
      <News />
      <About />
      <CompanyProfile />
    </>
  );
}
