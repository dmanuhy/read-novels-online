
import GenreList from './GenreList';
import "../assets/css/Home.scss"
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

    const [hotNovels, setHotNovels] = useState([])

    useEffect(() => {
        axios.get(`/novels?_page=1&_limit=12`)
            .then(res => setHotNovels(res.data))
            .catch(err => console.error(err));
    }, [])

    return (
        <>
            <div className="home-body py-4">
                <div className="container home-container">
                    <div className="home-section row g-3 text-center mb-5">
                        <div className="title text-start text-uppercase col-12">Truyện HOT</div>
                        {
                            hotNovels.length > 0 &&
                            hotNovels.map((item, index) => {
                                return (
                                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                        <div className="novel position-relative">
                                            <img className="card-img-top novel-image img-fluid" src={item.image}
                                                alt="..." />
                                            <div className="novel-name py-1 text-center">
                                                <span>{item.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="home-section row g-3 text-center mb-4">
                        <div className="text-start col-12 col-lg-9">
                            <div className="title text-uppercase">Truyện Mới Cập Nhật</div>
                            <div className="new-novel row">
                                <div className="new-novel-name col-9 col-lg-5">Yêu Thầm Tiếng Vọng</div>
                                <div className="d-none d-lg-block new-novel-genre col-3">Tình Cảm, Hài Hước</div>
                                <div className="new-novel-chapter col-3 col-lg-2">Chương 20</div>
                                <div className="d-none d-lg-block updated-time col-2">2 Giờ Trước</div>
                            </div>
                            <div className="new-novel row">
                                <div className="new-novel-name col-9 col-lg-5">Yêu Thầm Tiếng Vọng</div>
                                <div className="d-none d-lg-block new-novel-genre col-3">Tình Cảm, Hài Hước</div>
                                <div className="new-novel-chapter col-3 col-lg-2">Chương 19</div>
                                <div className="d-none d-lg-block updated-time col-2">2 Giờ Trước</div>
                            </div>
                            <div className="new-novel row">
                                <div className="new-novel-name col-9 col-lg-5">Yêu Thầm Tiếng Vọng</div>
                                <div className="d-none d-lg-block new-novel-genre col-3">Tình Cảm, Hài Hước</div>
                                <div className="new-novel-chapter col-3 col-lg-2">Chương 18</div>
                                <div className="d-none d-lg-block updated-time col-2">2 Giờ Trước</div>
                            </div>
                            <div className="new-novel row">
                                <div className="new-novel-name col-9 col-lg-5">Yêu Thầm Tiếng Vọng</div>
                                <div className="d-none d-lg-block new-novel-genre col-3">Tình Cảm, Hài Hước</div>
                                <div className="new-novel-chapter col-3 col-lg-2">Chương 17</div>
                                <div className="d-none d-lg-block updated-time col-2">2 Giờ Trước</div>
                            </div>
                            <div className="new-novel row">
                                <div className="new-novel-name col-9 col-lg-5">Yêu Thầm Tiếng Vọng</div>
                                <div className="d-none d-lg-block new-novel-genre col-3">Tình Cảm, Hài Hước</div>
                                <div className="new-novel-chapter col-3 col-lg-2">Chương 16</div>
                                <div className="d-none d-lg-block updated-time col-2">2 Giờ Trước</div>
                            </div>
                            <div className="new-novel row">
                                <div className="new-novel-name col-9 col-lg-5">Yêu Thầm Tiếng Vọng</div>
                                <div className="d-none d-lg-block new-novel-genre col-3">Tình Cảm, Hài Hước</div>
                                <div className="new-novel-chapter col-3 col-lg-2">Chương 15</div>
                                <div className="d-none d-lg-block updated-time col-2">2 Giờ Trước</div>
                            </div>
                            <div className="new-novel row">
                                <div className="new-novel-name col-9 col-lg-5">Yêu Thầm Tiếng Vọng</div>
                                <div className="d-none d-lg-block new-novel-genre col-3">Tình Cảm, Hài Hước</div>
                                <div className="new-novel-chapter col-3 col-lg-2">Chương 15</div>
                                <div className="d-none d-lg-block updated-time col-2">2 Giờ Trước</div>
                            </div>
                            <div className="new-novel row">
                                <div className="new-novel-name col-9 col-lg-5">Yêu Thầm Tiếng Vọng</div>
                                <div className="d-none d-lg-block new-novel-genre col-3">Tình Cảm, Hài Hước</div>
                                <div className="new-novel-chapter col-3 col-lg-2">Chương 15</div>
                                <div className="d-none d-lg-block updated-time col-2">2 Giờ Trước</div>
                            </div>
                            <div className="new-novel row">
                                <div className="new-novel-name col-9 col-lg-5">Yêu Thầm Tiếng Vọng</div>
                                <div className="d-none d-lg-block new-novel-genre col-3">Tình Cảm, Hài Hước</div>
                                <div className="new-novel-chapter col-3 col-lg-2">Chương 15</div>
                                <div className="d-none d-lg-block updated-time col-2">2 Giờ Trước</div>
                            </div>
                            <div className="new-novel row">
                                <div className="new-novel-name col-9 col-lg-5">Yêu Thầm Tiếng Vọng</div>
                                <div className="d-none d-lg-block new-novel-genre col-3">Tình Cảm, Hài Hước</div>
                                <div className="new-novel-chapter col-3 col-lg-2">Chương 15</div>
                                <div className="d-none d-lg-block updated-time col-2">2 Giờ Trước</div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 ps-3 d-none d-lg-block">
                            <GenreList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;