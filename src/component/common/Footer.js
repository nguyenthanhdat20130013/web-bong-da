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

export function Footer() {
    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div>
            <footer>
                <div className="bg2 p-t-40 p-b-25">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 p-b-20">
                                <div className="size-h-3 flex-s-c">

                                        <a href="#">
                                            <img src="https://www.bongda.com.vn/templates/themes/images/logo_red.png" alt="LOGO"/>
                                        </a>


                                </div>
                                <div>
                                    <p className="f1-s-1 cl15">
                                        Chào mừng bạn đến với trang web tin tức bóng đá! Chúng tôi là nguồn cung cấp tin tức hàng đầu về thế giới bóng đá
                                        , đem đến cho bạn những thông tin mới nhất, bình luận chính xác và sự phân tích sâu sắc về những trận đấu
                                        , câu chuyện hậu trường và các sự kiện quan trọng.
                                       . Hãy cùng chúng tôi tìm hiểu về thế giới bóng đá qua mọi góc nhìn và truyền cảm hứng cho đam mê của bạn!
                                    </p>
                                    <div className="p-t-15">
                                        <a href="https://www.facebook.com/kcntt.nlu" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                            <span className="fab fa-facebook-f"/>
                                        </a>
                                        <a href="https://www.youtube.com/@FPTBongDaViet" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                            <span className="fab fa-youtube"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 p-b-20">
                                <Link to={'/bandoc'} onClick={handleLinkClick} className={"gocbandoc"}>
                                    <div className="size-h-3 flex-s-c">
                                        <h5 className="f1-m-7 cl0">Góc bạn đọc</h5>
                                    </div>
                                </Link>
                                <Link to={'/tin-khac'} onClick={handleLinkClick} className={"gocbandoc"}>
                                    <div className="flex-s-c">
                                        <h5 className="f1-m-7 cl0">Tin khác</h5>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-6 col-lg-4 p-b-20">
                                <div className="size-h-3 flex-s-c">
                                    <h5 className="f1-m-7 cl0">Thể loại bóng đá</h5>
                                </div>
                                <ul className="m-t--12">
                                    <li className="how-bor1 p-rl-5 p-tb-10">
                                        <Link to={'/chau-au'} onClick={handleLinkClick}>
                                            <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                                Bóng Đá Châu Âu
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="m-t--12">
                                    <li className="how-bor1 p-rl-5 p-tb-10">
                                        <Link to={'/chau-a'} onClick={handleLinkClick}>
                                            <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                                Bóng Đá Châu Á
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="m-t--12">
                                    <li className="how-bor1 p-rl-5 p-tb-10">
                                        <Link to={'/chau-my'} onClick={handleLinkClick}>
                                            <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                                Bóng Đá Châu Mỹ
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="m-t--12">
                                    <li className="how-bor1 p-rl-5 p-tb-10">
                                        <Link to={'/chau-phi'} onClick={handleLinkClick}>
                                            <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                                Bóng đá Châu Phi
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="m-t--12">
                                    <li className="how-bor1 p-rl-5 p-tb-10">
                                        <Link to={'/giao-huu'} onClick={handleLinkClick}>
                                            <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                                Giao hữu
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg11">
                    <div className="container size-h-4 flex-c-c p-tb-15">
        <span className="f1-s-1 cl0 txt-center">
          Copyright © 2023
          <a href="#" className="f1-s-1 cl10 hov-link1">
              Copyright © All rights reserved
              <i className="fa fa-heart" aria-hidden="true"/>
          </a>
        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
