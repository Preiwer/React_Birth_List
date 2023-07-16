import {
  Text,
  Stack,
  Box,
  Flex,
  StackDivider,
  Avatar,
  Wrap,
  WrapItem,
  Button,
  Grid,
} from "@chakra-ui/react";
import DelBtn from "./DelBtn";

function ListItems({ dataCopy, setDataCopy }) {
  let dt = new Date();

  return (
    <>
      <Stack boxShadow={'inset 0px 1px 7px -5px #000;'} borderRadius={'10px'} padding={2} h={'100%'} w={'100%'} overflow={'auto'} divider={<StackDivider />}>
        {dataCopy.map((el, idx) => (
          <Flex
            key={el.id}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={2}
            w={'100%'}  
          >
            <Wrap>
              <WrapItem>
                <Avatar
                  border={"2px solid var(--chakra-colors-messenger-700)"}
                  bgColor={"messenger.500"}
                  width={70}
                  height={70}
                  name={el.name}
                  src={el.image}
                />
              </WrapItem>
            </Wrap>
            <Grid gridTemplateColumns={"auto"}>
              <Flex>
                <Text fontWeight={"bold"}>Name:</Text> {el.name}
              </Flex>
              <Flex>
                <Text fontWeight={"bold"}>Age:</Text>
                {el.age}
              </Flex>
              <Flex>
                <Text fontWeight={"bold"}>Date of Birth:</Text>
                {dt.getFullYear() - el.age}
              </Flex>
            </Grid>

            <DelBtn dataCopy={dataCopy} setDataCopy={setDataCopy} id={el.id} />
          </Flex>
        ))}
      </Stack>
    </>
  );
}

export default ListItems;
