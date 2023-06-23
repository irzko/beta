import { Center, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import BetaLogo from "./BetaLogo";

function NavBar() {
  return (
    <Flex
      position="fixed"
      bgColor="black"
      justifyContent={"center"}
      color="white"
      zIndex={3}
      right={0}
      left={0}
      top={0}
      py={1}
    >
      <Link to="/">
        <Center h={8} w={8}>
          <BetaLogo />
        </Center>
      </Link>
    </Flex>
  );
}

export default NavBar;
