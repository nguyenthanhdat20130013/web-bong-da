import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import "../../Template/images/icons/favicon.png"
import "../../Template/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "../../Template/fonts/fontawesome-5.0.8/css/fontawesome-all.min.css"
import "../../Template/fonts/iconic/css/material-design-iconic-font.min.css"
import "../../Template/vendor/animate/animate.css"
import "../../Template/vendor/css-hamburgers/hamburgers.min.css"
import "../../Template/css/util.min.css"
import "../../Template/css/main.css"
import {useState} from "react";
export function Header() {

    return (
        <div>
            <header>
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
                                    <li className="">
                                        <Link to={'/trang-chu/tin-chuyen-nhuong'}>
                                            <a>Tin chuyển nhượng</a>
                                        </Link>
                                    </li>
                                    <li className="main-menu">
                                        <Link to={'/trang-chu/vietnam'}>
                                            <a>Bóng đá Việt Nam</a>
                                        </Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to={'/doi-tuyen-quoc-gia'}>
                                                    <a>Các ĐTQG</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'/v-league'}>
                                                    <a> V-League </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'/cup-quoc-gia-vn'}>
                                                    <a> Cúp Quốc Gia </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'/hang-nhat-vn'}>
                                                        <a> Hạng Nhất  </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'/giai-tre-vn'}>
                                                        <a> Giải Trẻ  </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'/bong-da-nu'}>
                                                        <a>   Bóng Đá Nữ         </a>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link to={'/vff'}>
                                                        <a> VFF </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'/tin-khac-vn'}>
                                                        <a>     Tin Khác </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                    </li>

                                    <li className="main-menu">
                                        <Link to={'/trang-chu/anh'}>
                                             <a>Bóng đá Anh</a>
                                        </Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link to={'/premier-league'}>
                                                    <a>Premier League</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'/fa-cup'}>
                                                    <a>FA Cup </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'/efl'}>
                                                    <a>EFL Cup </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'/tin-khac'}>
                                                    <a>  Tin Khác </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="mega-menu-item">
                                        <Link to={'/trang-chu/y'}>
                                            <a>Bóng đá Ý</a>
                                        </Link>

                                    </li>
                                    <li className="mega-menu-item">
                                        <Link to={'/champions-league'}>
                                            <a>Champions League</a>
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

