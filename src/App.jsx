import { useEffect, useState } from "react";

function App() {
    const [searchTerm, setSearchTerm] = useState(
        localStorage.getItem("search") || "React"
    );

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

    const searchItems = list.filter((item) => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }

    return (
        <div>
            <h1>My Hacker News</h1>

            <Search searchTerm={searchTerm} handleSearch={handleSearch} />

            <hr />

            <List list={searchItems} />
        </div>
    );
}

function Search({ handleSearch, searchTerm }) {
    function handleChange(event) {
        handleSearch(event);
    }

    useEffect(() => {
        localStorage.setItem("search", searchTerm);
    }, [searchTerm]);

    return (
        <div>
            <label htmlFor="search">Search: </label>
            {/* uncontrolled component -> controlled component */}
            <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
}

function List({ list }) {
    // spread
    // {...obj}

    return (
        <ul>
            {list.map((item) => {
                return <Item key={item.objectID} item={item} />;
            })}
        </ul>
    );
}

// jsx('Item', {key: item.objectID, url: url, author: author})

function Item({ item }) {
    return (
        <li>
            <span>
                <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
        </li>
    );
}

export default App;
