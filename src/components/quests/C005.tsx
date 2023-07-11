import {
  Center,
  HStack,
  PinInput,
  PinInputField,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const C005 = () => {
  const navigate = useNavigate();
  const [wrong, setWrong] = useState(false);
  const [password, setPassword] = useState("");
  const handleChange = (value: string) => {
    if (wrong) setWrong(false);
    setPassword(value);
  };

  const handleSubmit = () => {
    if (password === "092307") {
      navigate("/pages/P001");
    } else {
      setWrong(true);
      setPassword("");
    }
  };
  return (
    <Flex flexDirection="column" justifyContent="center" h="100vh">
      <Center fontSize={24}>
        <i className="bi bi-lock-fill"></i>
      </Center>
      {wrong ? (
        <Center my={4} fontWeight={500} color="red">
          Mã PIN sai
        </Center>
      ) : (
        <Center py={4}>Nhập mã PIN</Center>
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
  );
};

export default C005;
