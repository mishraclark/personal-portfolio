import vector1 from '~/assets/vector-1.png'
import vector2 from '~/assets/vector-2.png'
import vector3 from '~/assets/vector-3.png'
import vector4 from '~/assets/vector-4.png'
import Header from '~/components/Header'
import Intro from '~/components/Intro'
import Clients from '~/components/Clients'
import Services from '~/components/Services'
import Portfolio from '~/components/Portfolio'
import Testimonials from '~/components/Testimonials'
import Contact from '~/components/Contact'

export function Welcome() {
  return (
      <main className="bg-slate-950 flex flex-col w-screen min-h-full py-10 overflow-clip">
        <img src={vector1} alt="vector-1" className="absolute md:-top-20 -top-10 right-0" />
        <img src={vector2} alt="vector-2" className="absolute top-[600px] -left-20" />
        <img src={vector3} alt="vector-3" className="absolute top-[1688px] right-0" />
        <img src={vector4} alt="vector-4" className="absolute top-[3100px] -left-20" />

        <Header/>

        <Intro />

        <Clients/>

        <Services/>

        <Portfolio />

        <Testimonials />

        <Contact />
      </main>
  );
}
