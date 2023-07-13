import { Center, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NumLock from "../locks/NumLock";

const C014 = () => {
  const code = "23516";
  const navigate = useNavigate();
  const [wrong, setWrong] = useState(false);
  const [password, setPassword] = useState("");

  const handleChange = (value: string) => {
    if (wrong) setWrong(false);
    setPassword(value);
  };

  const handleSubmit = () => {
    if (password === code) {
      navigate("/pages/P011");
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
        <Center py={4}>Nhập mã PIN để truy cập dữ liệu phòng giáo lý</Center>
      )}

      <NumLock
        length={code.length}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </Flex>
  );
};

export default C014;
