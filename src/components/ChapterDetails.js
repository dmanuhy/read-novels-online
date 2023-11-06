import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const NovelPage = () => {
    const [novels, setNovels] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9999/novels`)
            .then((res) => res.json())
            .then((data) => setNovels(data));
    }, []);


    return (
        <Container>
            <Row style={{textAlign:'center'}}>
                <h1 style={{color:'#7FFF00'}}>Đại Quản Gia Là Ma Hào</h1><br/>
                <h5 style={{color:'	#808080'}}>Chương 1: Cửu U Bi Lục</h5>
            </Row>
            <Row>
                <Col><button style={{marginLeft:'80%',color:'white' ,backgroundColor:'#5cb85c', border:'none'}}>Chương trước</button></Col>
               <Col> <button style={{backgroundColor:'#5cb85c',color:'white', border:'none'}}>Chương sau</button></Col>
            </Row>
            <Row> "content": "<p>[Có ba cách để sống sót trong một cái thế giới đổ nát </p>. <p> Hiện tại, tôi đã quên một vài cái, nhưng có một điều tôi có thể chắc chắn rằng, Bạn - người đang đọc những dòng này sẽ sống sót. </p> <p>- Ba cách để sống sót trong một thế giới đổ nát] Một trang web tiểu thuyết hiện lên trên màn hình điện thoại cũ nát của tôi. Tôi kéo lên rồi lại kéo xuống. Tôi làm chuyện này đã bao nhiêu lần rồi nhỉ? </p> <p>\" Thật sự? Đã kết thúc? \"</p> ",
        </Row>
            <Row>
                <Col><button style={{marginLeft:'80%',color:'white', backgroundColor:'#5cb85c', border:'none'}}>Chương trước</button></Col>
               <Col> <button style={{backgroundColor:'#5cb85c',color:'white', border:'none'}}>Chương sau</button></Col>
            </Row>
        </Container>
    );
};

export default NovelPage;
