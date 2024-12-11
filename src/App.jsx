import { useCallback, useEffect, useReducer } from "react";
import InputWithLabel from "./components/InputWithLabel";
import List from "./components/List";
import useStorageState from "./hooks/useStorageState";
import axios from "axios";

const storiesReducer = (state, action) => {
    switch (action.type) {
        case "STORIES_FETCH_START":
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case "STORIES_FETCH_SUCCESS":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload,
            };
        case "STORIES_FETCH_FAILURE":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case "REMOVE_STORY":
            return {
                ...state,
                data: state.data.filter(
                    (story) => story.objectID !== action.payload.objectID
                ),
            };
        default:
            throw new Error();
    }
};

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

function App() {
    const [searchTerm, setSearchTerm] = useStorageState("search", "");

    const [stories, dispatchStories] = useReducer(storiesReducer, {
        data: [],
        isLoading: false,
        isError: false,
    });

    const searchItems = stories.data.filter((item) => {
        return item.title?.toLowerCase().includes(searchTerm.toLowerCase());
    });

    function handleRemoveItem(item) {
        // setStories(newStories);
        dispatchStories({
            type: "REMOVE_STORY",
            payload: item,
        });
    }

    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }

    // memo(r)ized function
    const fetchStories = useCallback(() => {
        if (searchTerm === "") return;
        dispatchStories({ type: "STORIES_FETCH_START" });

        axios
            .get(API_ENDPOINT + searchTerm)
            .then((result) => {
                dispatchStories({
                    type: "STORIES_FETCH_SUCCESS",
                    payload: result.data.hits,
                });
                // setStories(result.data.stories)
            })
            .catch(() => {
                dispatchStories({ type: "STORIES_FETCH_FAILURE" });
            });
    }, [searchTerm]);

    useEffect(() => {
        fetchStories();
    }, [fetchStories]);

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

            {stories.isError && <p>Something went wrong!</p>}

            {stories.isLoading ? (
                <p>Loading...</p>
            ) : (
                <List list={searchItems} handleRemoveItem={handleRemoveItem} />
            )}
        </div>
    );
}

export default App;
