import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

const qBank = [
  {
    id: 1,
    question: "Giải phương trình sau: 3x^3 - 5x^2 + 2x - 7 = 0",
    options: ["1", "3", "Không có đáp án chính xác", "2"],
    answer: "1",
  },
  {
    id: 2,
    question:
      "Cho một tam giác ABC vuông tại A và có AB = 3 cm, AC = 4 cm. Gọi D là trung điểm của BC. Tính độ dài đoạn AD.",
    options: ["1.5 cm", " 2 cm", "2.5 cm", "3 cm"],
    answer: "1",
  },
  {
    id: 3,
    question:
      "Cho một dãy số Fibonacci bắt đầu bằng 1 và 2, tức là 1, 2, 3, 5, 8, 13, 21, ... Cho số Fibonacci thứ 10^9 là F(n), hãy tính phần dư khi F(n) chia cho 7.",
    options: ["0", "1", "2", "3"],
    answer: "1",
  },
  {
    id: 4,
    question:
      "Cho một hình chóp S.ABCD có đáy ABCD là hình vuông cạnh a và SA vuông góc với mặt phẳng đáy và cắt đường chéo BD tại O. Biết rằng độ dài cạnh của hình chóp là 10 cm và góc giữa mặt phẳng (SBD) và mặt phẳng (ABCD) là 60 độ. Tính thể tích của hình chóp.",
    options: ["100√2 cm^3", "150√2 cm^3", "200√2 cm^3", "250√2 cm^3"],
    answer: "1",
  },
];

type answerType = {
  id: number;
  answer: string;
};

const CountdownTimer = ({
  initialTime,
  submit,
}: {
  initialTime: number;
  submit: () => void;
}) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    if (timeRemaining <= 0) {
      // Xử lý logic khi bộ đếm kết thúc
      // Ví dụ: hiển thị thông báo hoặc thực hiện một hành động nào đó
      submit();
    } else {
      const timer = setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);

      return () => clearTimeout(timer); // Hủy bộ đếm khi component unmount
    }
  }, [submit, timeRemaining]);

  const formatTime = (time: number) => {
    // Định dạng thời gian dưới dạng phút:giây
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Box>
      <p>{formatTime(timeRemaining)}</p>
    </Box>
  );
};

const FailedExam = ({
  onRetry,
  score,
  questionLength,
}: {
  onRetry: () => void;
  score: number;
  questionLength: number;
}) => {
  return (
    <Box
      position="fixed"
      top={0}
      bottom={0}
      right={0}
      left={0}
      pt={20}
      bg="white"
      zIndex={2}
    >
      <Center fontSize={24}>
        <i className="bi bi-x-circle"></i>
      </Center>
      <Center fontWeight={500}>Bạn đã không vượt qua bài kiểm tra.</Center>
      <Center fontWeight={500}>
        Bạn đã trả lời đúng&nbsp;
        {score}/{questionLength}&nbsp;tổng số câu hỏi.
      </Center>
      <Center>
        <Button
          onClick={onRetry}
          bgColor={"black"}
          rounded={"full"}
          color={"white"}
          mt={10}
        >
          <Box mr={2} fontSize={20}>
            <i className="bi bi-arrow-counterclockwise"></i>
          </Box>
          Thử lại
        </Button>
      </Center>
    </Box>
  );
};

const PassedExam = () => {
  return (
    <Box
      position="fixed"
      top={0}
      bottom={0}
      right={0}
      left={0}
      pt={20}
      bgColor="white"
      zIndex={2}
    >
      <Center fontSize={24}>
        <i className="bi bi-check-circle"></i>
      </Center>
      <Center fontWeight={500}>Chúc mừng bạn vượt qua bài kiểm tra</Center>
      <Center>
        Mã PIN là&nbsp;<Badge colorScheme="green">12345</Badge>
      </Center>
    </Box>
  );
};

export default function C002() {
  const [answer, setAnswer] = useState<answerType[]>([]);
  const [isPassed, setIsPassed] = useState(0);
  const [scoreState, setScoreState] = useState(0);

  useEffect(() => {
    const newAnswer = qBank.map((question) => ({
      id: question.id,
      answer: "",
    }));
    setAnswer(newAnswer);
  }, []);

  const handleChange = (value: string, id: number) => {
    const updatedAnswer = answer.map((obj) => {
      if (obj.id === id) {
        return { ...obj, answer: value };
      }
      return obj;
    });

    setAnswer(updatedAnswer);
  };

  const gradeExam = () => {
    return answer.reduce((score, ans) => {
      const matchedQuestion = qBank.find((question) => question.id === ans.id);
      if (matchedQuestion && ans.answer === matchedQuestion.answer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const handleSubmit = () => {
    const currentScore = gradeExam();
    setScoreState(currentScore);
    if (currentScore === qBank.length) {
      setIsPassed(1);
    } else if (currentScore < qBank.length) {
      setIsPassed(2);
    }
  };

  const handleRetry = () => {
    setIsPassed(0);
    setScoreState(0);
    const newAnswer = qBank.map((question) => ({
      id: question.id,
      answer: "",
    }));
    setAnswer(newAnswer);
  };

  return (
    <Box py={20} px={2}>
      {isPassed === 0 && (
        <>
          <Center
            position="fixed"
            top={14}
            right={2}
            bgColor="red"
            color="white"
            zIndex={1}
            borderRadius="full"
            py={1}
            px={2}
          >
            <i className="bi bi-clock"></i>
            <Box pl={2}>
              <CountdownTimer initialTime={60} submit={handleSubmit} />
            </Box>
          </Center>
          <Flex flexDirection="column">
            <Center>
              <Heading size="md">Đề Kiểm Tra</Heading>
            </Center>
            {qBank.map((item, index) => (
              <Box key={index} mb={10}>
                <RadioGroup onChange={(event) => handleChange(event, item.id)}>
                  <Stack>
                    <Box fontWeight={600}>
                      Câu {index + 1 + ": " + item.question}
                    </Box>
                    {item.options.map((option, optionIndex) => (
                      <Radio key={optionIndex} value={optionIndex.toString()}>
                        {option}
                      </Radio>
                    ))}
                  </Stack>
                </RadioGroup>
              </Box>
            ))}
            <Button
              onClick={handleSubmit}
              bgColor="black"
              color="white"
              rounded="full"
              mt={10}
            >
              Nộp bài
            </Button>
          </Flex>
        </>
      )}

      {isPassed === 1 && <PassedExam />}
      {isPassed === 2 && (
        <FailedExam
          onRetry={handleRetry}
          score={scoreState}
          questionLength={qBank.length}
        />
      )}
    </Box>
  );
}
