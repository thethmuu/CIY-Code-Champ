import Item from "./Item";

export default function List({ list, handleRemoveItem }) {
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
