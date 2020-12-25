import React,{useState,useEffect} from "react"
import './App.css';
import Page from "./Page";
import Pagination from "./Paginations"
import axios from "axios"
function App() {

  const [posts, setPosts] = useState([]);
  const [postPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

  useEffect(()=>{
    const getPosts = async ()=>{
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      
    }
    getPosts();
  },[])

  const paginate = (pageNumber)=>{
    setCurrentPage(pageNumber)
  } 

  return (
    <div className="App">
      <Page posts={currentPosts}/>
      <Pagination postsPerPage ={postPerPage} totalPosts= {posts.length} paginate = {paginate}/>
    </div>
  );
}

export default App;
