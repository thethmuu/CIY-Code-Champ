import { useState } from "react";
import InputWithLabel from "./components/InputWithLabel";
import useStorageState from "./hooks/useStorageState";

const list = [
    {
        title: "React",
        url: "https://reactjs.org/",
        author: "Jordan Walke",
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: "Redux",
        url: "https://redux.js.org/",
        author: "Dan Abramov, Andrew Clark",
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];

function App() {
    const [searchTerm, setSearchTerm] = useStorageState("search", "React");

    const [stories, setStories] = useState(list);

    const searchItems = stories.filter((item) => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    function handleRemoveItem(item) {
        const newStories = stories.filter((story) => {
            return story.objectID !== item.objectID;
        });
        setStories(newStories);
    }

    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }

    return (
        <div>
            <h1>My Hacker News</h1>

            <InputWithLabel
                value={searchTerm}
                handleInputChange={handleSearch}
                id="search"
            >
                <strong>Search: </strong>
            </InputWithLabel>

            <hr />

            <List list={searchItems} handleRemoveItem={handleRemoveItem} />
        </div>
    );
}

function List({ list, handleRemoveItem }) {
    // spread
    // {...obj}

    return (
        <ul>
            {list.map((item) => {
                return (
                    <Item
                        key={item.objectID}
                        item={item}
                        handleRemoveItem={handleRemoveItem}
                    />
                );
            })}
        </ul>
    );
}

// jsx('Item', {key: item.objectID, url: url, author: author})

function Item({ item, handleRemoveItem }) {
    return (
        <li>
            <span>
                <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
                <button type="button" onClick={() => handleRemoveItem(item)}>
                    Remove
                </button>
            </span>
        </li>
    );
}

export default App;
