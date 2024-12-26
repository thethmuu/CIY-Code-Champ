import InputWithLabel from "./InputWithLabel";

function SearchForm({ handleSubmit, searchTerm, handleSearch }) {
    return (
        <form onSubmit={handleSubmit}>
            <InputWithLabel
                value={searchTerm}
                handleInputChange={handleSearch}
                id="search"
            >
                <strong>Search: </strong>
            </InputWithLabel>

            <button disabled={!searchTerm}>Search</button>
        </form>
    );
}

export default SearchForm;
