import { Link } from "react-router-dom"

export const AccessDenied = () => {
    return (
        <>
            <div className="d-flex flex-column align-items-center gap-4 border border-5 p-5" style={{ height: "80vh" }}>
                <div className="fs-2  text-uppercase text-danger">
                    Quyền truy cập bị hạn chế !
                </div>
                <div className="fs-5 text-info">
                    Vui lòng đăng nhập với tài khoản của Editor
                </div>
                <Link className="btn btn-outline-primary fs-3" to={"/"}>Trang Chủ</Link >
            </div>

        </>
    )
}