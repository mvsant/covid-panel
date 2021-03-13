import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import AppHeader from "../src/components/AppHeader";
import CardComponent from "../src/components/CardComponent";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <AppHeader />
      <Box my={4}>
        <CardComponent />
        <br />
        <CardComponent />
        <br />
        <CardComponent />
        <br />
        <CardComponent />
        <br />
        <CardComponent />
        <br />
        <CardComponent />
        <br />
        <CardComponent />
        <br />
        <CardComponent />
        <br />
        <CardComponent />
        <br />
        <CardComponent />
        <br />
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
