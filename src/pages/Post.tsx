import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const [error, setError] = useState<string>("");
  const { id } = useParams();
  const [post, setPost] = useState<TPost>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        if (response.status === 200) {
          const data = response.data;
          setPost(data);
          setLoading(false);
        } else {
          throw new Error("Error catched in Post component");
        }
      } catch (error: any) {
        setError("Error  catched in Post component");
      }
    };
    getPost();
  }, []);

  return (
    <div>
      {error ? (
        <h1>{error}</h1>
      ) : loading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <h1>{post?.title}</h1>{" "}
          <p>You clicked on post, whose id is {post?.id}</p>
        </>
      )}
    </div>
  );
}
