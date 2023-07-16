import { FormLabel, Input, Box } from "@chakra-ui/react";

function AddInput({ age, name, setAge, setName }) {
  

  return (
    <>
      <Box>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Example: Anonym"
          onChange={(e) => setName(e.target.value)}
        />
      </Box>

      <Box>
        <FormLabel>Age</FormLabel>
        <Input
          type="number"
          placeholder="Example: 14"
          onChange={(e) => setAge(e.target.value)}
        />
      </Box>
    </>
  );
}

export default AddInput;
