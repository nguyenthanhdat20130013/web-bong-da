import React from "react";
import {Link} from "react-router-dom";
import "../../Template/images/icons/favicon.png"
import "../../Template/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "../../Template/fonts/fontawesome-5.0.8/css/fontawesome-all.min.css"
import "../../Template/fonts/iconic/css/material-design-iconic-font.min.css"
import "../../Template/vendor/animate/animate.css"
import "../../Template/vendor/css-hamburgers/hamburgers.min.css"
import "../../Template/css/util.min.css"
import "../../Template/css/main.css"
export function Header() {
    return (
        <div>
            <header>
                <script src="../../Template/js/main.js"></script>
                <script src="../../Template/vendor/bootstrap/js/bootstrap.min.js"></script>
                <script src="../../Template/vendor/jquery/jquery-3.2.1.min.js"></script>
                <script src="../../Template/vendor/animsition/js/animsition.min.js"></script>
                <script src="../../Template/vendor/bootstrap/js/popper.js"></script>
                <div className="container-menu-desktop">
                    <div className="wrap-logo container">
                        <div className="logo">
                            <Link to={'/trang-chu'}>
                                <a><img src="https://admin.bongda.com.vn/img/logo.png" alt="LOGO"/></a>
                            </Link>

                        </div>
                    </div>
                    <div className="wrap-main-nav">
                        <div className="main-nav">

                            <nav className="menu-desktop">
                                <a className="logo-stick" href="index.html">
                                    <img src="../../Template/images/icons/favicon.png" alt="LOGO"/>
                                </a>

                                <ul className="main-menu">
                                    <li>
                                        <Link to={'/trang-chu'}>
                                            <a>Trang chủ</a>
                                        </Link>

                                    </li>
                                    <li className="mega-menu-item">
                                        <Link to={'/trang-chu/tin-chuyen-nhuong'}>
                                            <a>Tin chuyển nhượng</a>
                                        </Link>
                                    </li>

                                    <li className="mega-menu-item">
                                        <Link to={'/trang-chu/vietnam'}>
                                            <a>Bóng đá Việt Nam</a>
                                        </Link>
                                    </li>

                                    <li className="mega-menu-item">
                                        <Link to={'/trang-chu/anh'}>
                                             <a>Bóng đá Anh</a>
                                        </Link>

                                    </li>

                                    <li className="mega-menu-item">
                                        <Link to={'/trang-chu/y'}>
                                            <a>Bóng đá Ý</a>
                                        </Link>

                                    </li>
                                    <li className="mega-menu-item">
                                        <Link to={'/trang-chu/bandoc'}>
                                            <a>Góc bạn đọc</a>
                                        </Link>

                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;

