import { useEffect, useState } from 'react';
import axios from 'axios';

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <img src={post.img} alt={post.title}/>
          <h2>{post.title}</h2>
          <p>{post.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsList;