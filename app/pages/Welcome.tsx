import Intro from '~/components/Intro'
import Clients from '~/components/Clients'
import Services from '~/components/Services'
import Portfolio from '~/components/Portfolio'
import Testimonials from '~/components/Testimonials'
import Contact from '~/components/Contact'
import Page from "~/layouts/Page";

export function Welcome() {
  return (
      <Page children={
          <>
              <Intro />

              <Clients/>

              <Services/>

              <Portfolio />

              <Testimonials />

              <Contact />
          </>
      } />
  );
}
