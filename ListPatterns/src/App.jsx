import "./App.css";
import RegularList from "./components/RegularList";
import SummaryListItem from "./components/SummaryListItem";
import {authors} from "./Data/authors";

function App() {
  console.log(authors);
  return (
    <>
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SummaryListItem}
      />
    </>
  );
}

export default App;
