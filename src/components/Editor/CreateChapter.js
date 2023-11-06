import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Editor } from 'primereact/editor';

export const CreateChapter = () => {

    const navigate = useNavigate()

    const { id } = useParams()
    const [editor, setEditor] = useState({})
    const [novel, setNovel] = useState({})
    const [newChapterTitle, setNewChapterTitle] = useState("")
    const [newChapterContent, setNewChapterContent] = useState("")

    useEffect(() => {
        if (localStorage.getItem("user")) {
            setEditor(JSON.parse(localStorage.getItem("user")));
        }
        axios.get(`/novels/${id}`)
            .then(res => setNovel(res.data))
            .catch(err => console(err))
    }, [])

    const checkAuthorization = () => {
        if (editor === null || editor.id !== 2) {
            navigate("/access-denied");
        }
    }

    const buildData = () => {
        let chapters = novel.chapters;
        chapters.push({
            id: (chapters.length + 1),
            title: newChapterTitle,
            content: newChapterContent,
            uploadedDate: new Date()
        })
        return chapters
    }

    const handleCreateNewChapter = (event) => {
        event.preventDefault();
        if (newChapterContent.trim().length < 300) {
            alert("Nội dung của chương phải có ít nhất 300 ký tự !")
        } else {
            axios.patch(`/novels/${novel.id}`, {
                chapters: buildData()
            }).then(res => {
                console.log(res)
                alert("Thêm chương mới thành công!")
                navigate(`/editor/novels`)
            })
                .catch(err => console.log(err))

        }

    }

    return (
        <div style={{ backgroundColor: "#f4f4f4" }} className="p-4">
            {
                checkAuthorization()
            }
            <h2 className="text-center">{novel && novel.name}</h2>
            <h4 className="text-center">Chương {novel && novel.chapters && (novel.chapters.length + 1)}</h4>
            <div >
                <label className="fs-5 me-4 fw-bold" htmlFor="title">Tiêu đề:</label>
                <input onChange={(event) => setNewChapterTitle(event.target.value)} style={{ width: "400px" }} className="fs-5 px-2" id="title" />
            </div>
            <div className="bg-white my-4">
                <Editor value={newChapterContent} onTextChange={(event) => setNewChapterContent(event.htmlValue)} style={{ height: '600px' }} />
            </div>
            <div>
                <button onClick={(event) => handleCreateNewChapter(event)} className='btn btn-success text-uppercase'>Thêm Truyện</button>
            </div>
        </div>
    )
}