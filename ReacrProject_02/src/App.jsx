import { useEffect, useState } from "react";
import getPosts from "./components/api";
const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);
  return (
    <div>
      {data ? data.results.map((e) => <li>{e.email}</li>) : <p>No data</p>}
    </div>
  );
};
export default App;
