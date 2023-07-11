import { useState } from "react";
import NumLock from "../locks/NumLock";
import { Center, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const C007 = () => {
  const navigate = useNavigate();
  const [wrong, setWrong] = useState(false);
  const [password, setPassword] = useState("");
  const handleChange = (value: string) => {
    if (wrong) setWrong(false);
    setPassword(value);
  };

  const handleSubmit = () => {
    if (password === "123456") {
      navigate("/pages/P002");
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

      <NumLock length={6} onChange={handleChange} onSubmit={handleSubmit}/>
    </Flex>
  );
};

export default C007;
