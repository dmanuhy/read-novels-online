import { Link, useParams } from "react-router-dom"
import "../assets/css/NovelDetail.scss"
import GenreList from "./GenreList"
import axios from "axios"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const NovelDetail = () => {

    const { id } = useParams()
    const [novel, setNovel] = useState([]);
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        axios.get(`/novels/${id}?_embed=novelGenre`)
            .then(res => {
                setNovel(res.data)
            })
            .catch(err => console.error(err));
        axios.get(`/genres`)
            .then(res => {
                setGenres(res.data)
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <div className="novel-detail-body">
            <div className="container py-4">
                <div className="row">
                    <div className="d-flex flex-column left-content col-12 col-lg-9">
                        <div className="title fs-5 text-uppercase">
                            <span>Thông Tin Truyện</span>
                        </div>
                        <div className="novel-detail row py-4">
                            <div className="left-side col-4">
                                <div className="novel-image mb-4">
                                    <img src={novel && novel.image} alt={novel && novel.name} />
                                </div>
                                <div className="novel-author">
                                    <span className="fw-bold">Tác giả: </span> <span className="author-name">{novel.author}</span>
                                </div>
                                <div className="genres">
                                    <span className="fw-bold">Thể Loại: </span>
                                    {
                                        novel.novelGenre && novel.novelGenre.map((novelGenre) => {
                                            return (
                                                <span key={novelGenre.genreId}>
                                                    [<Link to={`/genres/${novelGenre.genreId}`} className='text-decoration-none text-dark'>{genres.find((genre) => genre.id === novelGenre.genreId).name}</Link>] < span > </span>
                                                </span>
                                            )
                                        })
                                    }
                                </div>
                                <div>
                                    <span className="fw-bold">Trạng Thái: </span> <span>{novel.isFinished === true ? "Hoàn thành" : "Đang sáng tác"}</span>
                                </div>
                            </div>
                            <div className="right-side col-8">
                                <div className="novel-name text-center">
                                    <span className="rounded-2 fw-bold fs-4 text-uppercase">{novel.name}</span>
                                </div>
                                <div className="border border-secondary my-4"></div>
                                <div>
                                    <div style={{ fontSize: "18px" }} className="fw-bold mb-4">Giới thiệu:</div>
                                    <div style={{ fontSize: "18px" }} dangerouslySetInnerHTML={{ __html: novel.introduction }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="title fs-5 text-uppercase">
                            Danh sách chương
                        </div>
                        <div className="chapters row py-3 px-5">
                            {
                                novel && novel.chapters && novel.chapters.map((item, index) => {
                                    return (
                                        <div className="col-6" key={index}>
                                            <Link to={`/novels/${novel.id}/chapters/${item.id}`} className="text-decoration-none text-dark"><FontAwesomeIcon icon="fa-solid fa-angle-right" /><span className="fs-5"> Chương {item.id}: {item.title}</span></Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="right-content col-3 d-none d-lg-block">
                        <GenreList />
                    </div>
                </div>
            </div>
        </div >

    )
}