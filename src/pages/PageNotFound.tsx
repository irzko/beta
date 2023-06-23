import { Center, Flex } from "@chakra-ui/react";

const PageNotFound = () => {
  return (
    <Flex minH="100vh" justifyContent="center" flexDirection="column">
      <Center fontSize={30}>
        <i className="bi bi-cloud-drizzle"></i>
      </Center>
      <Center fontWeight={500}>Aiss, thật dô tri :))</Center>
      <Center fontWeight={500}>Hãy thử nhập một thứ gì đó khác</Center>
    </Flex>
  );
};

export default PageNotFound;
