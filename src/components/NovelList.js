import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/NovelList.scss"

const NovelList = (props) => {
    let { novels } = props;
    return (
        <div className="novel-list">
            {
                novels && novels.length > 0 ?
                    novels.map((item, index) => {
                        return (
                            <div className="novel row py-1" key={index}>
                                <div className="novel-image col-5 col-md-3">
                                    <img style={{ width: "170px", height: "250px" }} src={item.image} alt={item.name} />
                                </div>
                                <div className="novel-general col-7  col-md-9 d-flex flex-column justify-content-center gap-1">
                                    <Link className="novel-name text-decoration-none text-dark fw-bold" to={`/novels/${item.id}`}>
                                        <FontAwesomeIcon icon="fa-solid fa-book" />
                                        <span className="ms-1">{item.name}</span>
                                    </Link>
                                    <div className="novel-author fst-italic">
                                        <FontAwesomeIcon icon="fa-solid fa-pencil" />
                                        <span className="ms-1">{item.author}</span>
                                    </div>
                                    <div className="novel-introduction d-none d-md-block" dangerouslySetInnerHTML={{ __html: item.introduction }}>
                                    </div>
                                    <div className="novel-newest-chapter">
                                        <span>Chương Mới Nhất: </span>
                                        <Link to={`/novels/${item.id}/chapters/${item.chapters[item.chapters.length - 1].id}`} className="chapter-link text-decoration-none">Chương {item.chapters[item.chapters.length - 1].id}</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :
                    <div className="mt-2 text-danger">
                        Không tìm thấy truyện nào !
                    </div>
            }
        </div>
    )
}

export default NovelList