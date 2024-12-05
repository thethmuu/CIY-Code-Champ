import { useEffect, useState } from "react";
import InputWithLabel from "./components/InputWithLabel";
import List from "./components/List";
import useStorageState from "./hooks/useStorageState";

const initialStories = [
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

function fetchStories() {
    // return Promise.resolve({ data: { stories: initialStories } });
    return new Promise((resolve) => {
        setTimeout(() => resolve({ data: { stories: initialStories } }), 3000);
        // setTimeout(() => reject(), 3000);
    });
}

function App() {
    const [searchTerm, setSearchTerm] = useStorageState("search", "");

    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

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

    useEffect(() => {
        setIsLoading(true);
        fetchStories()
            .then((result) => {
                setStories(result.data.stories);
            })
            .catch(() => {
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

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

            {isError && <p>Something went wrong!</p>}

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <List list={searchItems} handleRemoveItem={handleRemoveItem} />
            )}
        </div>
    );
}

export default App;
