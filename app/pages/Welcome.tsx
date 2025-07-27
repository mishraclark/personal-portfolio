import Intro from '~/components/Intro'
import Clients from '~/components/Clients'
import Services from '~/components/Services'
import Portfolio from '~/components/Portfolio'
import Testimonials from '~/components/Testimonials'
import Contact from '~/components/Contact'
// import Skills from '~/components/Skills';
import Page from "~/layouts/Page";

export function Welcome() {
  return (
      <Page children={
          <>
              <Intro />

              {/* <Skills /> */}

              <Clients/>

              <Services/>

              <Portfolio />

              <Testimonials />

              <Contact />
          </>
      } />
  );
}
