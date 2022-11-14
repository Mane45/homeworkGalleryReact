import { useState } from "react";
import "./Search.css";

function Search({ renderContent }) {
  const [searchtext, setSearchtext] = useState("");
  const [images, setImages] = useState([]);
  const handleChange = (e) => {
    setSearchtext(e.target.value);
  };
  const addTask = (e) => {
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${searchtext}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((response) => {
        setImages(response.photos.photo);
      });
    setSearchtext("");
  };
  return (
    <div className="searchWrapper">
      <div>
        <input
          id="input"
          type="text"
          placeholder="search"
          onChange={handleChange}
          value={searchtext}
        />
        <button className="search" onClick={(e) => addTask(e)}>Search</button>
      </div>

      {renderContent(images)}
    </div>
  );
}

export default Search;
