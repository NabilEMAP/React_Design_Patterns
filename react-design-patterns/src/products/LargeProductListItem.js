export const LargeProductListItem = ({ product }) => {
    const { name, price, description, rating } = product;

    return (
        <>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>{description}</p>
            <p>Rating: {rating}</p>
        </>
    );
}