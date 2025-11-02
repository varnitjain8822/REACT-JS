import { useRef, useContext } from 'react';
import { PostListContext } from '../store/post-list-store.jsx';

const Createpost = () => {
  const { addpost } = useContext(PostListContext);

  const postid = useRef();
  const postTitle = useRef();
  const postContent = useRef();
  const postTags = useRef();
  const postReaction = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newpost = {
      id: postid.current.value.trim(),
      title: postTitle.current.value.trim(),
      content: postContent.current.value.trim(),
      tags: postTags.current.value
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag !== ''),
      reaction: parseInt(postReaction.current.value, 10) || 0,
    };

    if (!newpost.id || !newpost.title) {
      alert('Post ID and Title are required!');
      return;
    }

    addpost(newpost);
    event.target.reset(); // ✅ reset form
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded shadow-sm mt-3">
      <div className="mb-3">
        <label htmlFor="postId" className="form-label">Post ID</label>
        <input type="text" className="form-control" id="postId" ref={postid} placeholder="Enter post ID (e.g. p3)" />
      </div>

      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label">Title</label>
        <input type="text" className="form-control" id="postTitle" ref={postTitle} placeholder="Enter post title" />
      </div>

      <div className="mb-3">
        <label htmlFor="postContent" className="form-label">Content</label>
        <textarea className="form-control" id="postContent" ref={postContent} placeholder="Enter post content"></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="postTags" className="form-label">Tags (comma separated)</label>
        <input type="text" className="form-control" id="postTags" ref={postTags} placeholder="e.g. news, events" />
      </div>

      <div className="mb-3">
        <label htmlFor="postReaction" className="form-label">Reactions</label>
        <input type="number" className="form-control" id="postReaction" ref={postReaction} placeholder="Enter number of reactions" />
      </div>

      <button type="submit" className="btn btn-primary w-100">Submit</button>
    </form>
  );
};

export default Createpost;
