// Địa điểm đcuối

import { Center, Container, Flex } from "@chakra-ui/react";

const P012 = () => {
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
          "Quá trình điều tra kết thúc, người tình nghi này vô tội, hãy đến hội
          trường để báo cáo."
        </Container>
      </Center>
    </Flex>
  );
};

export default P012;
