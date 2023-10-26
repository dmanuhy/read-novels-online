import { useState } from 'react'
import '../assets/css/novel-genres.scss'
import { useEffect } from 'react';
import axios from 'axios';
const GenreList = () => {

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios.get(`/genres`)
            .then(res => setGenres(res.data))
            .catch(err => console.error(err));
    }, [])


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
                                    <div className="genre-name">{item.name}</div>
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