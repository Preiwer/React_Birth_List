import {
  Flex,
  Wrap,
  WrapItem,
  Avatar,
  Box,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function AddAvatar({fileChange, setFileChange}) {
  function chooseFile(evt) {
    const file = URL.createObjectURL(evt.target.files[0]);
    setFileChange(file);
    console.log(file);
    console.log('Hello');
  }
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Wrap>
          <WrapItem>
            <Avatar
              border={"2px solid var(--chakra-colors-messenger-700)"}
              bgColor={"messenger.500"}
              width={70}
              height={70}
              src={fileChange ? fileChange : null}
            />
          </WrapItem>
        </Wrap>
      </Flex>

      <Box>
        <FormLabel>Choose An Avatar</FormLabel>
        <Input type="file" onChange={chooseFile} />
      </Box>
    </>
  );
}

export default AddAvatar;
