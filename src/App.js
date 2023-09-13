import { Flex, Container, Heading } from "@chakra-ui/react";
import { SongContainer } from "./views/SongContainer";
import styles from "../src/styles/styles.css";
import Nav from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtistList from "./components/ArtistList";

function App() {
  return (
    <>
      <div className="backdrop">
        <div className="background-image"></div>
      </div>
      <div className="content">
        <Router>
          <Nav />
          <Container maxW="container.lg">
            <Flex align="center" direction="column">
              <Heading as="h1" className="header">
                API test application
              </Heading>
              <Routes>
                <Route path="/SongContainer" element={<SongContainer />} />
                <Route path="/ArtistList" element={<ArtistList />} />
              </Routes>
            </Flex>
          </Container>
        </Router>
      </div>
    </>
  );
}

export default App;
