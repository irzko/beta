import { Center, Container, Flex } from "@chakra-ui/react";

function P003() {
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
          <Flex w={64}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180.32 58.6">
              <defs></defs>
              <title>{"Asset 3"}</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path d="M24.54,55.38H12.16V16L0,19.53V10.15L23.4,2.06h1.14Z" />
                  <path d="M57.66,55.38V1.44H71.25V22L90.44,1.44H107L85.2,24.11l22.34,31.27H91.06L75.9,33.77l-4.65,4.65v17Z" />
                  <polygon points="147.97 0 147.97 8.9 164.98 8.9 140.73 33.15 132.73 25.15 126.36 31.52 134.36 39.52 121.64 52.31 128.02 58.6 140.73 45.89 148.8 53.96 155.16 47.59 147.2 39.53 171.41 15.37 171.41 32.35 180.32 32.35 180.32 0 147.97 0" />
                </g>
              </g>
            </svg>
          </Flex>
        </Container>
      </Center>
    </Flex>
  );
}

export default P003;
