import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { MdDelete } from "react-icons/md";
import { PostListContext } from '../store/post-list-store.jsx';

const Post = ({ title, content, tags = [], reaction, postid }) => {
  const { delpost } = useContext(PostListContext);

  return (
    <div className="card position-relative" style={{ width: '18rem', margin: '10px' }}>
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={() => delpost(postid)}
        style={{ cursor: 'pointer' }}
      >
        <MdDelete />
      </span>

      <img
        src="https://via.placeholder.com/150"
        className="card-img-top"
        alt={title}
      />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>

        {tags.map((tag) => (
          <span
            key={tag}
            className="badge rounded-pill bg-primary"
            style={{ marginRight: '5px' }}
          >
            {tag}
          </span>
        ))}

        <div className="alert alert-primary mt-3" role="alert">
          This message is for post titled: {title}
        </div>

        <a href="#" className="btn btn-primary mt-2">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Post;
