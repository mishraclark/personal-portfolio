import vector1 from '~/assets/vector-1.png'
import vector2 from '~/assets/vector-2.png'
import Header from '~/components/Header'
import Intro from '~/components/Intro'
import Clients from '~/components/Clients'
import Services from '~/components/Services'

export function Welcome() {
  return (
      <main className="bg-slate-950 flex flex-col w-screen min-h-full py-10">
        <img src={vector1} alt="logo" className="absolute md:-top-20 -top-10 right-0" />
        <img src={vector2} alt="logo" className="absolute top-[600px] -left-20" />

        <Header/>

        <Intro />

        <Clients/>

        <Services/>
      </main>
  );
}
