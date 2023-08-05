import Post from "../../components/post/Post";
import "./userPosts.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
// import axios from "axios";
// import {url} from "../../config/config"
export default function UserPosts() {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(Context);  

    useEffect(() => {
        const data = [
      
      {
        "_id" : 2,
        "category" : "mario",
        "topic" : "two",
        "desc" : "thisisdecription",
        "likes" : 40,
        "comments" : 50,
        "author" : "mario",
        "date" : "5-11-2000",
        "photo" : "/download.jpg",
        "title" : "cat2"
      },
      {
        "_id" : 3,
        "category" : "luigi",
        "topic" : "three",
        "desc" : "thisisdecription",
        "likes" : 5,
        "comments" : 6,
        "author" : "luigi",
        "date" : "4-12-2000",
        "photo" : "/images (1).jpg",
        "title" : "cat3"
      }
    ]
        // console.log(user)
        // const fetchPosts = async () => {
        //     const res = await axios.get(`${url}/userposts/${user.data._id}`);
        //     setPosts(res.data);
        //   };

        //   fetchPosts();
        setPosts(data)
    },[user])

  return (
    <div className="posts">
      {posts && posts.map((p) => (
        <Post post={p} key={p._id}/>
      ))}
    </div>
  );
}
