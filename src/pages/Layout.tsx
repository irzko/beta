import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import CommandBar from "../components/CommandBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <NavBar />
      <CommandBar />
      <Box>
        <Outlet />
      </Box>
    </>
  );
}
