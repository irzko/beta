// Địa điểm đcuối

import { Box, Center, Container, Flex } from "@chakra-ui/react";

const P007 = () => {
  return (
    <Flex
      h={"100vh"}
      px={2}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Center>
        <Container>
          "Cô bé đã chọn giải thoát mình, rời khỏi thế giới này."
          <Box color={"red"}>Hãy đến hội trường.</Box>
        </Container>
      </Center>
    </Flex>
  );
};

export default P007;
