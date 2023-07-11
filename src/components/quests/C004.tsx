import { Box, Button, Center, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonLockProps {
  symbol?: string[];
  color?: string[];
  onChange?: (value: number) => void;
  value?: number;
}

const ButtonLock = ({ onChange, symbol, color }: ButtonLockProps) => {
  const [val, setVal] = useState(0);
  const handleClick = () => {
    if (symbol) {
      const newValue = val === symbol.length - 1 ? 0 : val + 1;
      setVal(newValue);
      onChange?.(newValue);
    }
  };
  return (
    <Button
      mx={1}
      onClick={handleClick}
      justifyContent="center"
      alignItems="center"
      bgColor={color ? color[val] : "black"}
      _hover={{ bgColor: color ? color[val] : "grey" }}
      h={12}
      w={12}
      colorScheme="messenger"
    >
      {symbol?.[val] || ""}
    </Button>
  );
};

type Code = {
  id: number;
  value: number;
};

const passwordSet = [
  { id: 1, value: 1 },
  { id: 2, value: 5 },
  { id: 3, value: 1 },
  { id: 4, value: 0 },
];
const C004 = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<Code[]>([]);
  useEffect(() => {
    const newPassword = passwordSet.map((pass) => ({
      id: pass.id,
      value: 0,
    }));
    setPassword(newPassword);
  }, []);

  const handleChange = (value: number, id: number) => {
    setPassword((prevPassword) => {
      return prevPassword.map((obj) =>
        obj.id === id ? { ...obj, value: value } : obj
      );
    });
  };

  const Test = () => {
    return passwordSet.every((item) => {
      const pass = password.find((pass) => pass.id === item.id);
      return pass && item.value === pass.value;
    });
  };

  const handleSubmit = () => {
    const isCorrect = Test();
    if (isCorrect) {
      navigate("/pages/P003");
    }
  };

  const symbol = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return (
    <Flex flexDirection="column" justifyContent="center" h="100vh">
      <Center>
        <Box
          rounded={"md"}
          mx={1}
          display={"flex"}
          justifyContent="center"
          alignItems="center"
          h={12}
          w={12}
          fontSize={34}
        >
          <i className="bi bi-search"></i>
        </Box>
        {passwordSet.map((item, index) => (
          <ButtonLock
            key={index}
            symbol={symbol}
            onChange={(value) => {
              handleChange(value, item.id);
            }}
          />
        ))}
        <Box
          rounded={"md"}
          mx={1}
          display={"flex"}
          justifyContent="center"
          alignItems="center"
          h={12}
          w={12}
          fontSize={34}
        >
          <i className="bi bi-search"></i>
        </Box>
      </Center>
      <Center mt={10}>
        <Button
          bgColor={"black"}
          color={"white"}
          rounded={"full"}
          onClick={handleSubmit}
        >
          Kiểm tra
        </Button>
      </Center>
    </Flex>
  );
};

export default C004;
