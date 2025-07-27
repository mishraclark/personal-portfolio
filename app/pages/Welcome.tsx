import Intro from '~/components/Intro'
import Clients from '~/components/Clients'
import Services from '~/components/Services'
import Portfolio from '~/components/Portfolio'
import Testimonials from '~/components/Testimonials'
import Contact from '~/components/Contact'
// import Skills from '~/components/Skills';
import Page from "~/layouts/Page";
import React, { useState } from 'react';
import ContactDialog from '~/components/ContactDialog'

export function Welcome() {
    const [dialogOpen, setDialogOpen] = React.useState(false);

    function handleOpenDialog() {
        console.log("Opening contact dialog");
        setDialogOpen(true);
    }

    function handleCloseDialog() {
        setDialogOpen(false);
    }



  return (
      <Page children={
          <>
              <Intro onOpenDialog={handleOpenDialog} />

              {/* <Skills /> */}

              <Clients/>

              <Services/>

              <Portfolio />

              <Testimonials />

              <Contact />

              <ContactDialog open={dialogOpen} onClose={handleCloseDialog} />
          </>
      } />
  );
}
