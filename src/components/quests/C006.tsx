import {
  Center,
  HStack,
  PinInput,
  PinInputField,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import C002 from "./C002";

const C006 = () => {
  const [wrong, setWrong] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [password, setPassword] = useState("");
  const handleChange = (value: string) => {
    if (wrong) setWrong(false);
    setPassword(value);
  };

  const handleSubmit = () => {
    if (password === "4279") {
      setCorrect(true);
    } else {
      setWrong(true);
      setPassword("");
    }
  };
  return (
    <>
      {correct ? (
        <C002 />
      ) : (
        <Flex flexDirection="column" justifyContent="center" h="100vh">
          <Center fontSize={24}>
            <i className="bi bi-lock-fill"></i>
          </Center>
          {wrong ? (
            <Center my={4} fontWeight={500} color="red">
              Mã PIN sai
            </Center>
          ) : (
            <Center py={4}>Nhập mã PIN đề kiểm tra</Center>
          )}

          <Center>
            <HStack>
              <PinInput
                onChange={handleChange}
                value={password}
                variant="filled"
                size="lg"
                placeholder="__"
                mask
              >
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Center>
          <Center p={4}>
            <Button
              color="white"
              rounded="full"
              bgColor="black"
              onClick={handleSubmit}
            >
              <i className="bi bi-chevron-right"></i>
            </Button>
          </Center>
        </Flex>
      )}
    </>
  );
};

export default C006;
