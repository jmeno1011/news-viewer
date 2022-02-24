import axios from "axios";
import { Fragment, useCallback, useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import NewsList from "./components/NewsList";
// const apikey = '8e4a6101174e464794f1214934038e93'

function App() {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <Fragment>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </Fragment>
  );
}

export default App;
