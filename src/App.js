import { GridProvider } from "../src/context/GridContext";
import Grid from "./components/Grid";
import GlobalStyle from "./Styles/GlobalStyles";
function App() {
  return (
    <GridProvider>
      <GlobalStyle/>
        <h2>
          CRUD
    </h2>
        <Grid />
    </GridProvider>
  );
}

export default App;
