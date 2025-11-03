import { useContext, useEffect, useState } from 'react';
import { PostListContext } from '../store/post-list-store.jsx';
import Post from './Post.jsx';
import Welcome from './Welcome.jsx';
import Spinner from './Spinner.jsx';

const Postlist = () => {
  const { postlist, addpost } = useContext(PostListContext);
    const [fetching, setfetching] = useState(false);


  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
      setfetching(true);
      fetch('https://dummyjson.com/posts')
        .then((res) => res.json())
        .then((data) => {
          const postsArray = data.posts;

          postsArray.forEach((post) => {
            addpost({
              id: post.id,
              title: post.title,
              content: post.body,
              tags: post.tags,
              reaction: post.reactions,
            });
          });
          setfetching(false);
        })
        .catch((error) => {
          console.error('Error fetching posts:', error);
        });


      return () => {
        controller.abort();
      };
    }
  

  ,[]);
  


  return (
    <>
      {fetching && <Spinner></Spinner>}
      {!fetching && postlist.length === 0 && <Welcome />}
      {postlist.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          content={post.content}
          tags={post.tags}
          reaction={post.reaction}
          postid={post.id}
        />
      ))}
    </>
  );
};

export default Postlist;
