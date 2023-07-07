// Địa điểm hai

import { Box, Center, Container, Flex } from "@chakra-ui/react";

const P002 = () => {
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
          <Box fontWeight={600}>Ngày 11/07/2023:</Box>
          "Tại lớp học, cô gái bị bạn bè xa lánh, không ai chơi với cô ấy. Ngày
          hôm nay, trước khi giáo viên đến cô gái bị các bạn cùng lớp bạo lực,
          và trong lớp không ai giúp đỡ cô ấy. Một lát sau thấy cô gái rời khỏi
          lớp học, đến đền thánh Martino để cầu nguyện."
        </Container>
      </Center>
    </Flex>
  );
};

export default P002;
