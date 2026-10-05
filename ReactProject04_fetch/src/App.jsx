import { useEffect, useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(10);
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((current) => {
        return Math.max(current - 1, 0);
      });
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  });

  useEffect(() => {
    const controller = new AbortController();
    async function loadPosts() {
      try {
        setStatus("loading");
        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/cats?query=sociable&page=1&limit=10",
          {
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error("Failed to load data");
        }
        const data = await response.json();

        setPosts(data);
        setStatus("Sucess");
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborter");
        } else {
          console.log(error);
          setStatus("Error");
        }
      }
    }
    loadPosts();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>{seconds}</h1>
      <h1>status: {status}</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
};

export default App;
