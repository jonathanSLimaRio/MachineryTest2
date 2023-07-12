import Button from "@/components/Button";
import { modalContent } from "@/mocks/modalContentMock";
import { Container, Group, Modal, Text, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

export default function Home() {
  const theme = useMantineTheme();

  const [opened, { open, close }] = useDisclosure(false);
  const [step, setStep] = useState(1);

  const currentContent = modalContent.filter((item) => item.step === step)[0];

  const handleNext = () => {
    if (step < modalContent.length) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <Container fluid mt="lg">
      <Group position="center">
        <Button variant="secondary" onClick={open}>
          Attachment Finder
        </Button>
      </Group>
      <Modal
        opened={opened}
        onClose={close}
        title={`Attachment Finder - Step ${step}`}
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
        size="xl"
      >
        <Text>{currentContent.subTitle}</Text>
        <Group mt={48} mb={48}>
          <Button variant="secondary" onClick={() => {}}>
            {currentContent.body[0].cardTitle}
          </Button>
          <Button variant="secondary" onClick={() => {}}>
            {currentContent.body[1].cardTitle}
          </Button>
        </Group>
        <Group>
          {step === 1 && (
            <Text c="blue">
              <a href="">Not sure? Talk to an expert!</a>
            </Text>
          )}
          {step > 1 && (
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>
          )}
          {step < modalContent.length && (
            <Button variant="primary" onClick={handleNext}>
              Next
            </Button>
          )}
        </Group>
      </Modal>
    </Container>
  );
}
