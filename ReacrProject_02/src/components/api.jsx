const getPosts = async () => {
  const response = await fetch(
    "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10",
    {
      method: "GET",
    },
  );
  return await response.json();
};

export default getPosts;
