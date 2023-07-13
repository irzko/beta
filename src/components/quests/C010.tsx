import { Center, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NumLock from "../locks/NumLock";

const C010 = () => {
  const code = "7457";
  const navigate = useNavigate();
  const [wrong, setWrong] = useState(false);
  const [password, setPassword] = useState("");

  const handleChange = (value: string) => {
    if (wrong) setWrong(false);
    setPassword(value);
  };

  const handleSubmit = () => {
    if (password === code) {
      navigate("/pages/P008");
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

      <NumLock
        length={code.length}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </Flex>
  );
};

export default C010;
