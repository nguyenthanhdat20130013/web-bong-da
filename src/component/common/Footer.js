import React from "react";

export function Footer() {
    return (
        <div>
    <footer>
        <div className="bg2 p-t-40 p-b-25">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 p-b-20">
                        <div className="size-h-3 flex-s-c">
                            <a href="">
                                <img
                                    className="max-s-full"
                                    src="https://www.bongda.com.vn/templates/themes/images/logo_red.png"
                                    alt="LOGO"
                                />
                            </a>
                        </div>
                        <div>
                            <p className="f1-s-1 cl11 p-b-16">
                                Giấy phép: Số 29/GP-TTĐT của Bộ Thông tin - Truyền thông ngày 11/02/2010 và GP số 53/GP-STTTT của Sở Thông tin và Truyền thông TP. Hồ Chí Minh cấp ngày 4/8/2021.
                                Chịu trách nhiệm nội dung: TS. Võ Danh Hải.
                                Bongda.com.vn giữ bản quyền nội dung trên website này. Cấm sao chép dưới mọi hình thức nếu không có sự chấp thuận bằng văn bản.
                                Vận hành và phát triển bởi Công ty Cổ phần Yêu Thể Thao.
                            </p>
                            <p className="f1-s-1 cl11 p-b-16">
                                Quảng cáo: 0909 74 64 28.
                            </p>
                            <div className="p-t-15">
                                <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                    <span className="fab fa-facebook-f"/>
                                </a>
                                <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                    <span className="fab fa-twitter"/>
                                </a>
                                <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                    <span className="fab fa-pinterest-p"/>
                                </a>
                                <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                    <span className="fab fa-vimeo-v"/>
                                </a>
                                <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                    <span className="fab fa-youtube"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 p-b-20">
                        <div className="footer_left fl" style={{color: "white",paddingTop:20}}>
                            <div className="clwhite fontUTM f18 mar_bottom20">LIÊN HỆ:</div>
                            <p><i className="fa fa-map-marker" aria-hidden="true"></i> <strong>Địa chỉ:</strong> 02 Đinh
                                Tiên Hoàng, P.Đa Kao, Q.1, TP.HCM.</p>
                            <p><i className="fa fa-phone" aria-hidden="true"></i> <strong>Điện thoại:</strong> (08)
                                3910-5017.</p>
                            <p><i className="fa fa-fax" aria-hidden="true"></i> <strong>Fax:</strong> (08) 3910-5019.
                            </p>
                            <p><i className="fa fa-exclamation-circle" aria-hidden="true"></i> <strong>Quảng
                                cáo:</strong> 0909 74 64 28.</p>
                            <p><i className="fa fa-envelope-o" aria-hidden="true"></i> <strong>Liên hệ quảng
                                cáo: </strong>quangcao@bongda.com.vn</p>
                            <p><i className="fa fa-envelope-o" aria-hidden="true"></i> <strong> Email: </strong>hotro@bongda.com.vn
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg11">
            <div className="container size-h-4 flex-c-c p-tb-15">
            <span className="f1-s-1 cl0 txt-center">
              Copyright © 2018
              <a href="#" className="f1-s-1 cl10 hov-link1">
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="fa fa-heart" aria-hidden="true"/> by{" "}
              </a>
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </span>
            </div>
        </div>
    </footer>
            <div className="btn-back-to-top" id="myBtn">
                            <span className="symbol-btn-back-to-top">
                              <span className="fas fa-angle-up"/>
                            </span>


            </div>
        </div>
)};

export default Footer