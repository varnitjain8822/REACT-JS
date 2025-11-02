import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Post from './components/Post.jsx';
import Postlist from './components/Postlist.jsx';
import PostlistProvider from './store/post-list-store.jsx'; // Capitalized component name
import Createpost from './components/Createpost.jsx';

function App() {
  const [selectedtab, setSelectedtab] = useState('Home');

  return (
    <PostlistProvider>
      <div className="bigbox">
        <Sidebar selectedtab={selectedtab} settselectedtab={setSelectedtab} />
        <div className="main-content">
          <Header />

          <div className="postlist">
            {selectedtab==="Home" ?<Postlist />:<Createpost/>} 
          
          </div>
          <Footer />
        </div>
      </div>
    </PostlistProvider>
  );
}

export default App;
