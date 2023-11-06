import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const ChapterDetails = () => {

    const { novelId, chapterId } = useParams()

    const [novels, setNovels] = useState({});

    useEffect(() => {
        axios.get(`/novels/${novelId}`)
            .then(res => setNovels(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <Container>
            <Row style={{ textAlign: 'center' }}>
                <Link to={`/novels/${novels.id}`} className="text-decoration-none">
                    <h1 style={{ color: '#7FFF00' }}>{novels.name}</h1><br />
                </Link>
                <h5 style={{ color: '#808080' }}>Chương {novels.chapters === undefined ? "Loading" : novels.chapters[parseInt(chapterId) - 1].id}:{novels.chapters === undefined ? "Loading" : novels.chapters[parseInt(chapterId) - 1].title}</h5>

            </Row>
            <Row>
                <Col><button style={{ marginLeft: '80%', color: 'white', backgroundColor: '#5cb85c', border: 'none' }}>Chương trước</button></Col>
                <Col> <button style={{ backgroundColor: '#5cb85c', color: 'white', border: 'none' }}>Chương sau</button></Col>
            </Row>
            <Row>
                <div className="fs-5" dangerouslySetInnerHTML={{ __html: novels.chapters === undefined ? "Loading" : novels.chapters[parseInt(chapterId) - 1].content }}></div>
            </Row>
            <Row>
                <Col><button style={{ marginLeft: '80%', color: 'white', backgroundColor: '#5cb85c', border: 'none' }}>Chương trước</button></Col>
                <Col> <button style={{ backgroundColor: '#5cb85c', color: 'white', border: 'none' }}>Chương sau</button></Col>
            </Row>
        </Container>
    );
};

export default ChapterDetails;
