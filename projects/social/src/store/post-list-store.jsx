import { createContext, useReducer } from "react";

const default_list = [
  {
    id: 'p1',
    title: 'First Post',
    content: 'This is the content of the first post.',
    tags: ['news', 'events'],
    reaction: 5
  },
  {
    id: 'p2',
    title: 'Second Post',
    content: 'This is the content of the second post.',
    tags: ['updates', 'social'],
    reaction: 3
  },
];

// ✅ Context name must start with capital
export const PostListContext = createContext({
  postlist: [],
  addpost: () => {},
  delpost: () => {},
});

// ✅ Reducer
const postlistreducer = (currentpostlist, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...currentpostlist, action.payload];
    case 'DEL_POST':
      return currentpostlist.filter(post => post.id !== action.payload);
    default:
      return currentpostlist;
  }
};

// ✅ Provider
const PostlistProvider = ({ children }) => {
  const [postlistState, dispatchPostlist] = useReducer(postlistreducer, default_list);

  const addpost = (post) => {
    dispatchPostlist({ type: 'ADD_POST', payload: post });
  };

  const delpost = (id) => {
    dispatchPostlist({ type: 'DEL_POST', payload: id });
  };

  return (
    <PostListContext.Provider value={{ postlist: postlistState, addpost, delpost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostlistProvider;
