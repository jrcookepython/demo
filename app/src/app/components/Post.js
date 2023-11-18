export default function Post({ title, author, content}) {
    // const button = !following ? <button>Follow</button> : <button>Unfollow</button>
    // if (following)
    return (
        <div className="card">
            <h1>{title}</h1>
            <h3>By: {author}</h3>
            <p>{content}</p>
            {/* {button} */}
            {/* {following && <button>Unfollow</button>}
            {!following && <button>Follow</button>} */}
            {/* {following ? <button>Unfollow</button> : <button>Follow</button>} */}
            {/* <button> {following ? "Unfollow" : "Follow" } </button> */}
            {/* conditional for jsx */}
        </div>
    )

}

export function Games ({ name, year, genre }) {
    return (
        <div>
            <h1>Video Game: {name}</h1>
            <h4>Year of game: {year}</h4>
            <p>Genre: {genre}</p>
        </div>
    )
}

