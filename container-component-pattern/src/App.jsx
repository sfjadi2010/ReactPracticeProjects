import "./App.css";
import BooksInfo from "./components/books/BooksInfo";
import DataSource from "./components/data-source/DataSource";
import ResourceLoader from "./components/resources/ResourceLoader";
import CurrentUserLoader from "./components/users/CurrentUserLoader";
import UserInfo from "./components/users/UserInfo";
import UserLoader from "./components/users/UserLoader";
import axios from "axios";

function App() {
  return (
    <>
      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>

      <UserLoader userId={"3"}>
        <UserInfo />
      </UserLoader>

      <ResourceLoader resourceUrl={"/users/2"} resourceName={"user"}>
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader resourceUrl={"/books/2"} resourceName={"book"}>
        <BooksInfo />
      </ResourceLoader> */}

      <DataSource getData = {async () => {
        const response = await axios.get("/users/2");
        return response.data;
      }} resourceName={"user"}>
        <UserInfo />
      </DataSource>
    </>
  );
}

export default App;
