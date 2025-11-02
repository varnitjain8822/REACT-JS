import { useContext } from 'react';
import { PostListContext } from '../store/post-list-store.jsx';
import Post from './Post.jsx';

const Postlist = () => {
  const { postlist } = useContext(PostListContext);

  return (
    <>
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
