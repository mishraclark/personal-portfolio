import Header from '~/components/Header'
import Intro from '~/components/Intro'
import Clients from '~/components/Clients'
import Services from '~/components/Services'
import Portfolio from '~/components/Portfolio'
import Testimonials from '~/components/Testimonials'
import Contact from '~/components/Contact'
import Background from "~/components/Background";

export function Welcome() {
  return (
      <main className="bg-slate-950 relative flex flex-col w-screen min-h-full overflow-clip">
        <Background />

        <div className="z-20 max-md:px-5 max-[1400px]:px-16 min-[1400px]:px-32 py-10">
          <Header/>

          <Intro />

          <Clients/>

          <Services/>

          <Portfolio />

          <Testimonials />

          <Contact />
        </div>

      </main>
  );
}
