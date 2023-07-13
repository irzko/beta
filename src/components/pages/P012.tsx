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
          "Khi điều tra tại khu vực này. Theo thông tin điều tra được người này
          có đeo bông tai và miệng có nốt ruồi. Hãy đến nhà xe để điều tra
          thêm."
        </Container>
      </Center>
    </Flex>
  );
};

export default P012;
