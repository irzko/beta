import {
  Center,
  HStack,
  PinInput,
  PinInputField,
  Button,
} from "@chakra-ui/react";

interface Props {
  onChange?: (value: string) => void;
  value?: string;
  onSubmit?: () => void;
  length: number;
  rounded?: string;
}

export default function NumLock({
  onChange,
  value,
  onSubmit,
  length,
  rounded,
}: Props) {
  const pinInputControl = Array.from({ length }, (_, i) => (
    <PinInputField rounded={rounded} key={i} />
  ));
  return (
    <>
      <Center>
        <HStack>
          <PinInput
            onChange={onChange}
            value={value}
            variant="filled"
            size="lg"
            placeholder="__"
            mask
          >
            {pinInputControl}
          </PinInput>
        </HStack>
      </Center>
      <Center p={4}>
        <Button color="white" rounded="full" bgColor="black" onClick={onSubmit}>
          <i className="bi bi-chevron-right"></i>
        </Button>
      </Center>
    </>
  );
}
