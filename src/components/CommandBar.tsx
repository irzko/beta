import { Input, Button, Flex, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CommandBar() {
  const navigate = useNavigate();
  const [command, setCommand] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(event.target.value);
  };
  const questions = ["C001", "C003", "C004", "C005", "C006", "C007"];
  const handleSubmit = () => {
    if (command) {
      let cmd = command.toUpperCase();
      if (cmd[0] === "C") {
        if (questions.includes(cmd)) {
          navigate("/quests/" + cmd);
        } else {
          navigate("/that-vo-tri");
        }
      } else {
        navigate("/that-vo-tri");
      }
    } else {
      navigate("/");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Box
      w="100%"
      borderTopWidth={1}
      position="fixed"
      zIndex="docked"
      bottom={0}
      bg="white"
      p={2}
    >
      <Flex gap="2">
        <Input
          placeholder="Nhập gì đó vô tri vào đây..."
          // border="none"
          // bgColor={"whitesmoke"}
          _focus={{ borderColor: "black" }}
          variant="filled"
          value={command}
          borderRadius="full"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <Button
          fontSize={24}
          // _hover={{ bg: "black" }}
          onClick={handleSubmit}
          bgColor="black"
          borderRadius="full"
          color="white"
        >
          <i className="bi bi-arrow-right-short"></i>
        </Button>
      </Flex>
    </Box>
  );
}
