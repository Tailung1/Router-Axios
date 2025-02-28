import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  const [data, setData] = useState<TPosts>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    try {
      const getFetch = async () => {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (response.status === 200) {
          const data = await response.data;
          setData(data);
        }
      };
      getFetch();
    } catch (error) {
      setError("Error catched in Posts component");
    }
  }, []);

  return (
    <div>
      {error ? (
        <h1>{error}</h1>
      ) : (
        data.map((post) => (
          <div key={post?.id} style={{ border: "1px solid red" }}>
            <h1>{post?.title}</h1>
            <Link to={`/posts/${post?.id}`} >See More ...</Link>
          </div>
        ))
      )}
    </div>
  );
}
