// jsx('Item', {key: item.objectID, url: url, author: author})

export default function Item({ item, handleRemoveItem }) {
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
