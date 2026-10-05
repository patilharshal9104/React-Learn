import { useEffect, useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(10);
  const [status, setStatus] = useState("idle");
  const [posts, setPosts] = useState([]);

  // Timer
  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((current) => Math.max(current - 1, -4));
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  // Fetch users
  useEffect(() => {
    const controller = new AbortController();

    async function loadPosts() {
      try {
        setStatus("loading");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setPosts(data);
        setStatus("success");
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error(error);
          setStatus("error");
        }
      }
    }

    loadPosts();

    return () => {
      controller.abort();
    };
  }, []);
  const userList = posts.map((post) => (
    <div key={post.id}>
      <h2>{post.name}</h2>

      <p>Username: {post.username}</p>
      <p>Email: {post.email}</p>
      <p>Phone: {post.phone}</p>
      <p>Website: {post.website}</p>

      <h3>Address</h3>
      <p>Street: {post.address.street}</p>
      <p>Suite: {post.address.suite}</p>
      <p>City: {post.address.city}</p>
      <p>Zipcode: {post.address.zipcode}</p>

      <h3>Location</h3>
      <p>Latitude: {post.address.geo.lat}</p>
      <p>Longitude: {post.address.geo.lng}</p>

      <h3>Company</h3>
      <p>Company: {post.company.name}</p>
      <p>Catch phrase: {post.company.catchPhrase}</p>
    </div>
  ));
  return (
    <div>
      <h1>useEffect</h1>

      <h2>Timer: {seconds}</h2>

      <h2>Status: {status}</h2>

      <h2>Users:</h2>
      <h3>{userList}</h3>
    </div>
  );
};

export default App;
