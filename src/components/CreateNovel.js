import { Editor } from 'primereact/editor';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CreateNovel = () => {

    const editorId = "2";
    const [novelName, setNovelName] = useState("")
    const [author, setAuthor] = useState("")
    const [chapterTitle, setChapterTitle] = useState("")
    const [chapterContent, setChapterContent] = useState("")
    const [introduction, setIntroduction] = useState("")
    const [imageBase64, setImageBase64] = useState("")
    const [chosenGenres, setChosenGenres] = useState([])
    const [genres, setGenres] = useState([])

    useEffect(() => {
        axios.get(`/genres?_sort=name`)
            .then(res => setGenres(res.data))
            .catch(err => console.error(err));
    }, [])

    const renderEditorHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    };
    const getBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
    const handleOnChangeImage = async (event) => {
        let data = event.target.files;
        let selectedFile = data[0];
        if (selectedFile) {
            let base64 = await getBase64(selectedFile);
            setImageBase64(base64)
        }
    }

    const handleChooseGenre = (id) => {
        let genresId = chosenGenres;
        if (genresId.includes(id)) {
            let index = genresId.indexOf(id);
            genresId.splice(index, 1)
        } else {
            genresId.push(id)
        }
        setChosenGenres(genresId);
    }

    const handleCreateNovel = async (event) => {
        event.preventDefault();

        if (novelName.trim() === "") {
            alert("Thiếu tên truyện !")
        } else {
            if (author.trim() === "") {
                alert("Thiếu tên tác giả !")
            } else {
                if (introduction.trim() === "") {
                    alert("Thiếu giới thiệu truyện !")
                } else {
                    if (!chosenGenres.length > 0) {
                        alert("Vui lòng chọn ít nhất 1 thể loại cho truyện !")
                    } else {
                        if (chapterContent.trim().length < 300) {
                            alert("Độ dài của 1 chương phải có ít nhất 300 kí tự")
                        }
                        else {
                            let chapter = [];
                            chapter.push({
                                id: "1",
                                title: chapterTitle,
                                content: chapterContent,
                                uploadedDate: new Date()
                            })
                            await axios.post(`/novels`, {
                                name: novelName,
                                author: author,
                                image: imageBase64,
                                introduction: introduction,
                                chapters: chapter,
                                isHot: false,
                                isFinished: false,
                                editorId: editorId
                            })
                                .then(res => {
                                    console.log(res.data.id)
                                    insertNewNovelGenres(res.data.id)
                                })
                                .catch(err => console.error(err))
                        }
                    }
                }
            }
        }
    }

    const insertNewNovelGenres = async (newNovelId) => {
        if (newNovelId !== undefined && newNovelId !== null) {
            for (let i = 0; i < chosenGenres.length; i++) {
                await axios.post(`/novelGenre`, {
                    novelId: newNovelId,
                    genreId: chosenGenres[i]
                })
                    .then(res => console.log(res))
                    .catch(err => console.error(err))
            }
            alert("Thêm truyện thành công");
            window.location.reload();
        } else {
            alert("Không thể thêm thể loại");
        }
    }


    return (
        <>
            <div className="border p-5 mb-5">
                <div className='row'>
                    <div className='col-12 col-md-5 d-flex flex-column gap-5'>
                        <div className='d-flex align-items-center justify-content-between fs-5'>
                            <label htmlFor='novelName'>Tên Truyện</label>
                            <input id='novelName' style={{ width: "400px", height: "40px" }} className='px-2 border border-secondary border-2 rounded-2' type='text' value={novelName} onChange={(event) => setNovelName(event.target.value)} />
                        </div>
                        <div className='d-flex align-items-center justify-content-between fs-5'>
                            <label htmlFor='authorInput'>Tác Giả</label>
                            <input id='authorInput' style={{ width: "400px", height: "40px" }} className='px-2 border border-secondary border-2 rounded-2' type='text' value={author} onChange={(event) => setAuthor(event.target.value)} />
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex flex-column gap-3'>
                                <label className='fs-5 me-3'>Hình Ảnh Minh Họa</label>
                                <input onChange={(event) => handleOnChangeImage(event)} type='file' id='novelImage' hidden />
                                <label style={{ cursor: "pointer" }} htmlFor='novelImage'>
                                    <span className='border px-4 py-2 bg-primary text-white'>Tải Ảnh</span>
                                </label>
                            </div>
                            {
                                imageBase64 !== "" ?
                                    <div>
                                        <img style={{ width: "170px", height: "250px" }} src={imageBase64} alt='none' />
                                    </div>
                                    :
                                    <></>
                            }
                        </div>
                    </div>
                    <div className='col-12 col-md-7 px-5 pb-5 mt-5 mt-md-0'>
                        <label className='fs-5'>Giới thiệu</label>
                        <Editor value={introduction} headerTemplate={renderEditorHeader()} onTextChange={(event) => setIntroduction(event.htmlValue)} style={{ height: '350px' }} />
                    </div>
                </div>
                <div className='my-5'>
                    <span className='fs-5'>Chọn thể loại của truyện</span>
                    <div className='row px-5 py-2'>
                        {
                            genres.map((item, index) => {
                                return (
                                    <div className='col-3' key={index}>
                                        <input onClick={() => handleChooseGenre(item.id)} type='checkbox' id={item.id} /> <label htmlFor={item.id}>{item.name}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='my-5'>
                    <div className='d-flex justify-content-between mb-4'>
                        <div className='d-flex'>
                            <label className='fs-5 me-4'>
                                Chương 1
                            </label>
                            <input value={chapterTitle} onChange={(event) => setChapterTitle(event.target.value)} style={{ width: "400px", height: '30px' }} className='px-2 border border-secondary border-2 rounded-2' type='text' placeholder='Nhập tiêu đề (Không bắt buộc)' />
                        </div>
                        <span className='text-danger'>BẮT BUỘC: Truyện mới cần phải có chương mở đầu</span>
                    </div>
                    <Editor value={chapterContent} onTextChange={(event) => setChapterContent(event.htmlValue)} style={{ height: '600px' }} />
                </div>
                <button onClick={(event) => handleCreateNovel(event)} className='btn btn-success text-uppercase'>Thêm Truyện</button>
            </div>
        </>
    )
}

export default CreateNovel