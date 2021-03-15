const FilmInfo = (props) => {
    return (
        <section>
            <div id="bg-color">
                <p id="para">{props.title}</p>
                <p>{props.year}</p>
                <p>{props.director}</p>
                <p>{props.duration}</p>
                <p>{props.rate}</p>
                <p>{props.genre}</p>
            </div>
        </section>
    );
}

export default FilmInfo;