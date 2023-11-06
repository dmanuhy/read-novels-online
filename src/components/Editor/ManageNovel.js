import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import NovelList from "../NovelList";

export const ManageNovel = () => {

    const navigate = useNavigate()
    const [editor, setEditor] = useState({})
    const [novels, setNovels] = useState({})

    useEffect(() => {
        if (localStorage.getItem("user")) {
            setEditor(JSON.parse(localStorage.getItem("user")));
        }
        axios.get(`novels?editorID=${JSON.parse(localStorage.getItem("user")).id}`)
            .then(res => setNovels(res.data))
            .catch(err => console.error(err))
    }, [])

    const checkAuthorization = () => {
        if (editor === null || editor.id !== 2) {
            navigate("/access-denied");
        }
    }

    return (
        <div>
            {
                checkAuthorization()
            }
            <div style={{ backgroundColor: "#f4f4f4" }} className="manage-novel-body">
                <div style={{ padding: "0 150px" }}>
                    <div style={{ borderBottom: "1px solid" }} className="my-2 py-4 d-flex justify-content-between align-items-center">
                        <h2>Danh sách truyện</h2>
                        <Link className="btn btn-success" to={`/editor/novels/create`}>Thêm Truyện Mới</Link>
                    </div>
                    <div>
                        <div>
                            {
                                novels && novels.length > 0 &&
                                <NovelList novels={novels} isEditor={true} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}