import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../assets/css/ChapterDetails.scss"

const ChapterDetails = () => {

    const { novelId, chapterId } = useParams()

    const [novels, setNovels] = useState({});

    useEffect(() => {
        axios.get(`/novels/${novelId}`)
            .then(res => setNovels(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="py-4" style={{ backgroundColor: "#f4f4f4" }}>
            <Container>
                <Row style={{ textAlign: 'center' }}>
                    <Link to={`/novels/${novels && novels.id}`} className="text-decoration-none">
                        <h1 className="text-success">{novels && novels.name}</h1><br />
                    </Link>
                    <h4 style={{ color: '#808080' }}>Chương {novels.chapters === undefined ? "Loading" : novels.chapters[parseInt(chapterId) - 1].id}: {novels.chapters === undefined ? "Loading" : novels.chapters[parseInt(chapterId) - 1].title}</h4>


                </Row>
                <div className="d-flex justify-content-center my-4 gap-4">
                    {
                        (parseInt(chapterId) - 1 !== 0) &&
                        <div><Link to={`/novels/${novels.id}/chapters/${parseInt(chapterId) - 1}`} className="btn btn-success btn-lg">Chương trước</Link></div>
                    }
                    {
                        (novels.chapters && novels.chapters[parseInt(chapterId)]) &&
                        <div><Link to={`/novels/${novels.id}/chapters/${parseInt(chapterId) + 1}`} className="btn btn-success btn-lg">Chương sau</Link></div>
                    }

                </div>

                <div className="chapter-content fs-5" dangerouslySetInnerHTML={{ __html: novels.chapters === undefined ? "Loading" : novels.chapters[parseInt(chapterId) - 1].content }}></div>

                <div className="d-flex justify-content-center my-4 gap-4">
                    {
                        (parseInt(chapterId) - 1 !== 0) &&
                        <div><Link to={`/novels/${novels.id}/chapters/${parseInt(chapterId) - 1}`} className="btn btn-success btn-lg">Chương trước</Link></div>
                    }
                    {
                        (novels.chapters && novels.chapters[parseInt(chapterId)]) &&
                        <div><Link to={`/novels/${novels.id}/chapters/${parseInt(chapterId) + 1}`} className="btn btn-success btn-lg">Chương sau</Link></div>
                    }

                </div>
            </Container>
        </div>

    );
};

export default ChapterDetails;
