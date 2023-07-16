import { Button, Toast, useToast } from "@chakra-ui/react";

function AddBtn({
  dataCopy,
  onClose,
  name,
  age,
  file,
  setDataCopy,
  setName,
  setAge,
}) {
  const toast = useToast();

  function handleAdd() {
    if (name.trim() !== "" && age.trim() !== "") {
      const newItem = {
        id: dataCopy.length,
        name: name,
        age: age,
        image: file,
      };
      if (dataCopy !== []) {
        setDataCopy([...dataCopy, newItem]);
      } else {
        setDataCopy([newItem]);
      }
      setAge("");
      setName("");
      onClose();
    } else {
      // alert('Fill these inputs')
      toast({
        title: "Warning",
        description: "You Shoul Fill All Inputs!",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
  }
  return (
    <>
      <Button colorScheme="messenger" onClick={handleAdd}>
        Add
      </Button>
    </>
  );
}

export default AddBtn;
