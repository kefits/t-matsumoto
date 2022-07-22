import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { url } from "../../utils/url"

export default function ProfileBox() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#ffffff", height: "25vh" }}>
          <Stack direction="row" spacing={2} justifyContent="center" m={5}>
            <Avatar
              alt="Tomoki Matsumoto"
              src={url("/images/profile.jpg")}
              sx={{ width: 150, height: 150, margin: 2.5 }}
            />
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
