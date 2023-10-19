import '../assets/css/novel-genres.scss'
import genres from "../json/genres.json"

const GenreList = () => {

    return (
        <>
            <div className="novel-genres">
                <div className="novel-genres-title text-center text-uppercase fs-5">Thể Loại Truyện</div>
                <div className="genre-list text-start row px-4 g-2">
                    {
                        genres && genres.length > 0 &&
                        genres.map((item, index) => {
                            return (
                                < div className="genre-item col-6" key={item.id} >
                                    <div className="genre-name">{item.genre}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div >

        </>
    )
}

export default GenreList;