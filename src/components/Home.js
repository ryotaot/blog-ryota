import React, { useEffect } from "react";
import "./Home.css";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
      console.log(data.docs);
      console.log(data.docs.map((doc) => ({ doc })));
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <div className="nameAndDeleteButton">
              <h3>{post.author.username}</h3>
              <button>削除</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
