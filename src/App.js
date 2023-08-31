import { Flex, Container } from "@chakra-ui/react";
import { SongContainer } from "./views/SongContainer";
import styles from "../src/styles/styles.css";

function App() {
  return (
    <>
      <div className="backdrop"></div>
      <div className="content">
        <Container maxW="container.lg">
          <Flex align="center" direction="column">
            <h1 className="header">NSB Song Randomizer</h1>
            <SongContainer />
          </Flex>
        </Container>
      </div>
    </>
  );
}

export default App;
