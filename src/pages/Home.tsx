import { Center, Flex } from "@chakra-ui/react";
import React from "react";
import BetaLogo from "../components/BetaLogo";

function Home() {
  return (
    <Flex
      h={"100vh"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Center h={64} w={64}>
        <BetaLogo />
      </Center>
    </Flex>
  );
}

export default Home;
