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
    question: "Nội dung nào dưới đây thuộc đối tượng nghiên cứu của hóa học?",
    options: [
      "Tốc độ ánh sáng trong chân không.",
      "Quá trình phân chia tế bào.",
      "Cấu tạo của chất và sự biến đổi của chất.",
      "Sự hình thành hệ Mặt Trời.",
    ],
    answer: "2",
  },
  {
    id: 2,
    question: "Trong thành phần nguyên tử, những hạt mang điện tích là",
    options: [
      "proton và alpha.",
      " proton và neutron.",
      "proton và electron.",
      "electron và neutron.",
    ],
    answer: "2",
  },
  {
    id: 3,
    question: "Nguyên tử không mang điện vì",
    options: [
      "có tổng số hạt electron bằng tổng số hạt neutron.",
      "tổng số hạt neutron bằng tổng số hạt proton.",
      "có tổng số hạt proton bằng tổng số hạt electron.",
      "được tạo nên bởi các hạt không mang điện.",
    ],
    answer: "2",
  },
  {
    id: 4,
    question:
      "Nguyên tử potassium (K) có 19 electron; 19 proton và 20 neutron. Số khối của nguyên tử potassium là",
    options: ["20.", "19.", "39.", "58."],
    answer: "2",
  },
  {
    id: 5,
    question:
      "Tất cả các nguyên tử có số đơn vị điện tích hạt nhân là 8 đều thuộc nguyên tố nào sau đây?",
    options: ["Hydrogen.", "Helium.", "Oxygen.", "Carbon."],
    answer: "2",
  },
  {
    id: 6,
    question: "Orbital nguyên tử (kí hiệu là AO) là",
    options: [
      "Khu vực không gian xung quanh hạt nhân nguyên tử mà xác suất tìm thấy proton trong khu vực đó là lớn nhất (khoảng 90%).",
      "khu vực không gian trong hạt nhân nguyên tử mà xác suất tìm thấy electron trong khu vực đó là lớn nhất (khoảng 90%).",
      "khu vực không gian xung quanh hạt nhân nguyên tử mà xác suất tìm thấy electron trong khu vực đó là lớn nhất (khoảng 90%).",
      "khu vực không gian xung quanh hạt nhân nguyên tử mà xác suất tìm thấy electron trong khu vực đó là nhỏ nhất (khoảng 10%).",
    ],
    answer: "2",
  },
  {
    id: 7,
    question: "Mỗi orbital nguyên tử chứa tối đa bao nhiêu electron?",
    options: ["1 electron.", "3 electron.", "2 electron.", "4 electron."],
    answer: "2",
  },
  {
    id: 8,
    question: "Lớp M có số phân lớp electron là",
    options: ["1.", "3.", "2.", "4."],
    answer: "2",
  },
  {
    id: 9,
    question: "Phát biểu nào sau đây là sai?",
    options: [
      "Tính kim loại là tính chất của một nguyên tố mà nguyên tử dễ nhường electron.",
      "Trong một chu kì, theo chiều tăng dần của điện tích hạt nhân tính kim loại của các nguyên tố giảm dần, tính phi kim tăng dần.",
      "Trong một nhóm, theo chiều tăng dần của điện tích hạt nhân tính kim loại của các nguyên tố giảm dần, tính phi kim tăng dần.",
      "Tính phi kim là tính chất của một nguyên tố mà nguyên tử dễ nhận electron.",
    ],
    answer: "2",
  },
  {
    id: 10,
    question:
      "Nguyên tố Ca có số hiệu nguyên tử là 20. Phát biểu nào sau đây về Ca là không đúng?",
    options: [
      "Số electron ở vỏ nguyên tử của nguyên tố Ca là 20.",
      "Vỏ của nguyên tử Ca có 4 lớp electron và lớp ngoài cùng có 2 electron.",
      "Nguyên tố Ca là một nguyên tố phi kim.",
      "Hạt nhân của nguyên tử Ca có 20 proton.",
    ],
    answer: "2",
  },
  {
    id: 11,
    question: "Phát biểu nào sau đây về số oxi hoá là không đúng?",
    options: [
      "Số oxi hoá được viết ở dạng đại số, dấu viết trước, số viết sau.",
      "Trong đơn chất, số oxi hoá của nguyên tử bằng 0.",
      "Trong tất cả các hợp chất, số oxi hoá của hydrogen là +1.",
      "Trong ion đơn nguyên tử, số oxi hoá của nguyên tố bằng điện tích ion.",
    ],
    answer: "2",
  },
  {
    id: 12,
    question: "Cho các phát biểu sau, phát biểu đúng là",
    options: [
      "Trong phản ứng cháy, chất bị oxi hoá thường là oxygen.",
      "Trong công nghiệp, tất cả các phản ứng hoá học trong quy trình sản xuất đều là phản ứng oxi hoá – khử.",
      "Trong phản ứng đốt cháy khí thiên nhiên thì khí thiên nhiên đóng vai trò là chất bị oxi hoá.",
      "Các phản ứng oxi hoá – khử trong đời sống đều có lợi.",
    ],
    answer: "2",
  },
  {
    id: 13,
    question: "Phản ứng toả nhiệt là",
    options: [
      "phản ứng hấp thụ năng lượng dưới dạng nhiệt.",
      "phản ứng lấy nhiệt từ môi trường.",
      "phản ứng giải phóng năng lượng dưới dạng nhiệt.",
      "phản ứng làm nhiệt độ môi trường giảm đi.",
    ],
    answer: "2",
  },
  {
    id: 14,
    question: "Phát biểu nào sau đây không đúng?",
    options: [
      " Phản ứng hoá học là quá trình phá vỡ các liên kết trong chất đầu và hình thành các liên kết mới để tạo thành sản phẩm.",
      "Sự phá vỡ liên kết cần cung cấp năng lượng.",
      "Sự hình thành liên kết cần cung cấp năng lượng.",
      "Sự hình thành liên kết giải phóng năng lượng.",
    ],
    answer: "2",
  },
  {
    id: 15,
    question: "Điều kiện nào sau đây không phải là điều kiện chuẩn?",
    options: [
      "Áp suất 1 bar và nhiệt độ 25°C hay 298K.",
      "Áp suất 1 bar và nhiệt độ 298K.",
      "Áp suất 1 bar và nhiệt độ 25K.",
      "Áp suất 1 bar và nhiệt độ 25°C.",
    ],
    answer: "2",
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
        Mã PIN là&nbsp;<Badge colorScheme="green">23516</Badge>
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
