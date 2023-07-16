/**
 * Мини документация тех вещей, который я должен реализовать:
 * 1. Динамически считать всех кто в списке
 * 2. Динамически определять год рождения от нынешнего года
 * 3. Создать кнопку очистки списка
 *
 * Для усложнения задачи:
 * 4. Добавить форму добавления новых объектов
 * 5. Добавить кнопку удаления определённых объектов
 **/

import { Box, Text, Flex, ChakraProvider, Container } from "@chakra-ui/react";
import List from "./components/List/List";
import { useState } from "react";
import data from "./assets/data";
import "./App.css";
import ClearBtn from "./components/List/ClearBtn";
import AddForm from "./components/Form/AddForm";

function App() {
  const [dataCopy, setDataCopy] = useState(JSON.parse(JSON.stringify(data)));

  function handlerButton() {
    alert("ddd");
  }
  return (
    <ChakraProvider>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        w={"100vw"}
        h={"100vh"}
      >
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"100vh"}
          width={"23vw"}
        >        
          <Text fontWeight={"bold"} fontSize={"3xl"}>
            Total: {dataCopy.length}
          </Text>
          <AddForm dataCopy={dataCopy} setDataCopy={setDataCopy}/>
          <List dataCopy={dataCopy} setDataCopy={setDataCopy} />
          <ClearBtn dataCopy={dataCopy} setDataCopy={setDataCopy} />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
