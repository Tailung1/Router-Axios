import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const [error, setError] = useState<string>("");
  const { id } = useParams();
  const [post, setPost] = useState<TPost>(null);

  useEffect(() => {
    try {
      const getPost = async () => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        if (response.status === 200) {
          const data = response.data;
          setPost(data);
        }
      };
      getPost()
    } catch (error) {
      setError("Error in Post component");
    }
    
  }, []);

  return (
    <div>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <h1>{post?.title}</h1>{" "}
          <p>You clicked on post, whose id is {post?.id}</p>
        </>
      )}
    </div>
  );
}
