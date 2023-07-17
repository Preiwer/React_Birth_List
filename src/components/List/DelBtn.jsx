import { Button } from "@chakra-ui/react";

function DelBtn({ dataCopy, setDataCopy, id }) {
  function handlerRemove(id) {
    setDataCopy((prevLstArr) => prevLstArr.filter((itm) => itm.id != id));
    console.log(dataCopy);
  }

  return (
    <Button
      w={10}
      h={10}
      onClick={() => handlerRemove(id)}
      colorScheme="messenger"
      borderRadius={100}
    >
      ✕
    </Button>
  );
}

export default DelBtn;
