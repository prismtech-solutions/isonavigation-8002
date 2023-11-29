import { Header } from "./components/header";

import config from "public/config.json";
import { type ProjectInfo } from "~/app/models/project.model";
import { Tokenomics } from "./features/tokenomics";
import { Roadmap } from "./features/roadmap";
import { Footer } from "./components/footer";
import { About } from "./features/about";
import { Landing } from "./features/landing";
import { Faqs } from "./features/faqs";

export default function HomePage() {

  const projectData = config as ProjectInfo;
  const layout = "xl:px-40 lg:px-20 md:px-20 px-2 max-w-[2000px] m-auto";
  const wrapper = "xl:px-40 lg:px-20 md:px-20 px-2 max-w-[2000px] w-screen";

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center gap-5 text-black ${layout}`}>
      <Header config={projectData} layout={layout} />
      <div id="landing" className="xl:pt-40 lg:pt-40 pt-28 flex flex-col xl:gap-40 lg:gap-40 gap-28 xl:px-40 lg:px-20 md:px-20 px-2 max-w-[2000px] w-screen">
        <Landing config={projectData}/>
      </div>
      <div id="about-wrapper" className={wrapper}>
        <About/>
      </div>
      <div id="tokenomics-wrapper" className={wrapper}>
        <Tokenomics config={projectData}/>
      </div>
      <div id="roadmap-wrapper" className={wrapper}>
          <Roadmap config={projectData}/>
      </div>
      <div id="faqs-wrapper" className={wrapper}>
        <Faqs />
      </div>
      <div id="footer-wrapper" className={wrapper}>
        <Footer config={projectData} />
      </div>
    </main>
  );
}
