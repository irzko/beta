// Địa điểm đầu

import { Box, Center, Container, Flex } from "@chakra-ui/react";

const P001 = () => {
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
          <Box fontWeight={600}>Theo lời kể bạn của cô bé:</Box>
          "Mấy ngày hôm nay, chúng tôi đã đi khắp nơi để tìm kiếm cô ấy. Tôi đã
          hỏi mọi người, nhưng không ai biết cô ấy đi đâu cả. Chúng không rõ cô
          ấy đi đâu, nhưng lần cuối tôi gặp cô ấy ở Phòng giáo lý 04."
        </Container>
      </Center>
    </Flex>
  );
};

export default P001;
