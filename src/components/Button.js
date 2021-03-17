const Button = (props) => {
    return (
        <article id="buttons">
            <button onClick={props.handleAscending}>Sort by data Ascending</button>
            <button onClick={props.handleDescending}>Sort by data Descending</button>
            <button onClick={props.handleRate}>Best Rate</button>
            <button onClick={props.handleAlphabetAsc}>A-Z</button>
            <button onClick={props.handleAlphabetDes}>Z-A</button>
        </article>
    );
}

export default Button;

