const FilmInfo = (props) => {
    return (

        <section>
            <div id="bg-color">
                <p id="para">{props.title}</p>
                <p>{props.year}</p>
                <p>{props.director}</p>
                <p>{props.duration}</p>
                <p>{props.rate}</p>
                <aside>
                    {props.genre.map((genre, j) => <p key={j} id="list">{genre}</p>)}
                </aside>
            </div>
        </section>

    );
}

export default FilmInfo;