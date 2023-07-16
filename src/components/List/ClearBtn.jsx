import { Button } from "@chakra-ui/react";

function ClearBtn({ dataCopy, setDataCopy }) {
  function handleClear() {
    setDataCopy([]);
  }

  return (
    <>
      <Button
        onClick={handleClear}
        marginTop={2}
        colorScheme="messenger"
        w={"100%"}
      >
        Clear
      </Button>
    </>
  );
}

export default ClearBtn;
