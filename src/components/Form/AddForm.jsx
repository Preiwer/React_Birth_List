import {
  FormControl,
  Input,
  Wrap,
  WrapItem,
  Avatar,
  Modal,
  Button,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  FormLabel,
  Box,
  Grid,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import AddBtn from "./AddBtn";
import AddInput from "./AddInput";
import AddAvatar from "./AddAvatar";

function AddForm({ dataCopy, setDataCopy }) {
  const [fileChange, setFileChange] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [age, setAge] = useState("");
  const [name, setName] = useState("");

  return (
    <>
      <Button
        colorScheme="messenger"
        w={"100%"}
        marginBottom={2}
        onClick={onOpen}
      >
        Add User
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired={true}>
              <Grid gap={2}>
                <AddAvatar
                  fileChange={fileChange}
                  setFileChange={setFileChange}
                />

                <AddInput
                  name={name}
                  age={age}
                  setName={setName}
                  setAge={setAge}
                />
              </Grid>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Flex gap={2}>
              <Button onClick={onClose} colorScheme="red">
                Close
              </Button>
              <AddBtn
                age={age}
                name={name}
                file={fileChange}
                dataCopy={dataCopy}
                setDataCopy={setDataCopy}
                onClose={onClose}
                setName={setName}
                setAge={setAge}
              />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddForm;
