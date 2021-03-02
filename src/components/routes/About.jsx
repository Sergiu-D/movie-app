import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function About() {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="sm"
        style={{ height: "100vh", marginTop: "3rem", textAlign: "center" }}
      >
        <Typography component="div" variant="h2" gutterBottom>
          About
        </Typography>
        <Typography style={{ lineHeight: "2rem", color: "#333333" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          consectetur recusandae possimus iure dolore mollitia, doloribus
          nesciunt voluptates, nostrum dicta veritatis enim aut voluptatem
          natus? Dolorum ducimus culpa corrupti exercitationem architecto aut
          nostrum at ad! Omnis, cupiditate quaerat? Nulla expedita quis
          voluptatum officiis in sint rem perspiciatis neque eius quod.
        </Typography>
        <Typography
          style={{ marginTop: "2rem", lineHeight: "2rem", color: "#333333" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          officiis quod, esse laudantium sapiente hic repudiandae nulla dolorem
          earum velit soluta placeat neque officia consectetur blanditiis sunt
          veniam suscipit possimus.
        </Typography>
      </Container>
    </>
  );
}
