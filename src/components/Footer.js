import "../assets/css/Footer.scss"

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row d-flex justify-content-between text-white">
                        <div className="col-6 p-5 text-center">
                            <div>@Copyright 2023</div>
                        </div>
                        <div className="col-6 p-5 text-center">
                            <div>
                                <span>More Information</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;