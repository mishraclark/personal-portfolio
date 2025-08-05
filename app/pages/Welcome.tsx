import Intro from '~/components/Intro'
import Clients from '~/components/Clients'
import Services from '~/components/Services'
import Portfolio from '~/components/Portfolio'
import Testimonials from '~/components/Testimonials'
import Contact from '~/components/Contact'
import Page from "~/layouts/Page";
import React, { useState } from 'react';
import ContactDialog from '~/components/ContactDialog'
import About from '~/components/About'
import SkillsList from '~/components/SkillsList'
import ContactDialogForm from '~/components/ContactDialogForm'
import { useRef } from 'react';

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

                <Clients/>

              <About />

              <SkillsList />

              {/* <Services/> */}

              <Portfolio />

              {/* <Testimonials /> */}

              <Contact onOpenDialog={handleOpenDialog} />

              <ContactDialog open={dialogOpen} onClose={handleCloseDialog} />
          </>
      } />
  );
}
