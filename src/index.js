import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Loading from "./load";
import { Axios } from "./axios";
import "./styles.css";
import PostsList from "./list";

function App() {  
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [hasError, setHasError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const inputEl = useRef(null);

  const fetchPosts = async (q) => {
    setIsLoading(() => true);

    try {
      const { data } = await Axios.get(q);
      setPosts(data.hits);
      setHasError(() => false);
      setIsLoading(() => false);
    } catch (e) {
      setIsLoading(() => false);
      setHasError(() => true);
      setMessageError(e);
    }
  };

  useEffect(() => {
    fetchPosts("random");
  }, []);

  const submitSearch = (e, q) => {
    e.preventDefault();
    fetchPosts(q);
    setQuery(() => "");
    inputEl.current.focus();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <h1>World News</h1>
      <form>
        <input
          type="text"
          ref={inputEl}
          value={query}
          onChange={handleChange}
          placeholder="search anything..."
        />
        <button onClick={(event) => submitSearch(event, query)} type="submit">
          Search
        </button>
      </form>
      {hasError && (
        <div className="error">
          some error ( ({messageError})
        </div>
      )}
      {isLoading ? (
        <Loading />
      ) : (
          <PostsList list={posts} />
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
