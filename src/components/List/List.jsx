import { Flex, Text, Container } from "@chakra-ui/react";
import ListItem from "./ListItem";

function List({ dataCopy, setDataCopy, darkTheme, setDarkTheme }) {
  //   console.log('dataCopy Copy: ', dataCopyCopy);
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"75%"}
      width={"100%"}
    >
      {dataCopy.length === 0 ? (
        <Text>Empty</Text>
      ) : (
        <ListItem
          setDataCopy={setDataCopy}
          setDarkTheme={setDarkTheme}
          dataCopy={dataCopy}
          darkTheme={darkTheme}
        />
      )}
    </Flex>
  );
}

export default List;
