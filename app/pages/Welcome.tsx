import Intro from "~/components/Intro";
import Clients from "~/components/Clients";
import Portfolio from "~/components/Portfolio";
import Contact from "~/components/Contact";
import Page from "~/layouts/Page";
import React, { useState } from "react";
import ContactDialog from "~/components/ContactDialog";
import About from "~/components/About";
import SkillsList from "~/components/SkillsList";

export function Welcome() {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  function handleOpenDialog() {
    setDialogOpen(true);
  }

  function handleCloseDialog() {
    setDialogOpen(false);
  }

  return (
    <Page
      children={
        <>
          <Intro onOpenDialog={handleOpenDialog} />

          <Clients />

          <About />

          <SkillsList />

          <Portfolio />

          <Contact onOpenDialog={handleOpenDialog} />

          <ContactDialog open={dialogOpen} onClose={handleCloseDialog} />
        </>
      }
    />
  );
}
