import React from "react";
import {useParams} from "react-router-dom";


export function PageHeading(){

    const pathName = window.location.pathname;
    const path = pathName.substring(1);
    let b1,b2;
    if (path === 'trang-chu') {
        b1 = 'Trang chủ'
        b2 = 'Mới Nhất'
    } else if (path === 'tin-chuyen-nhuong'){
        b1 = 'Trang chủ'
        b2 = 'Tin Chuyển Nhượng'
    } else if (path === 'vietnam'){
        b1 = 'Trang chủ'
        b2 = '̉Bóng Đá Việt Nam'
    } else if (path === 'doi-tuyen-quoc-gia'){
        b1 = 'Bóng Đá Việt Nam'
        b2 = '̉Các Đội Tuyển Quốc Gia'
    } else if (path === 'v-league'){
        b1 = 'Bóng Đá Việt Nam'
        b2 = 'V-league'
    } else if (path === 'cup-quoc-gia-vn'){
        b1 = 'Bóng Đá Việt Nam'
        b2 = 'Cúp Quốc Gia'
    } else if (path === 'hang-nhat-vn'){
        b1 = 'Bóng Đá Việt Nam'
        b2 = 'Hạng Nhất'
    } else if (path === 'giai-tre-vn'){
        b1 = 'Bóng Đá Việt Nam'
        b2 = 'Giải Trẻ'
    } else if (path === 'bong-da-nu'){
        b1 = 'Bóng Đá Việt Nam'
        b2 = 'Bóng Đá Nữ'
    } else if (path === 'tin-khac-vn'){
        b1 = 'Trang chủ'
        b2 = 'Tin khác'
    } else if (path === 'fa-cup'){
        b1 = 'Bóng Đá Anh'
        b2 = 'Fa Cup'
    } else if (path === 'premier-league'){
        b1 = 'Bóng Đá Anh'
        b2 = 'Premier League'
    }else if (path === 'efl'){
        b1 = 'Bóng Đá Anh'
        b2 = 'EFL Cup'
    }else if (path === 'y'){
        b1 = 'Trang chủ'
        b2 = 'Bóng Đá Ý'
    } else if (path === 'champions-league'){
        b1 = 'Trang chủ'
        b2 = 'Champions League'
    }  else if (path === 'anh'){
        b1 = 'Trang chủ'
        b2 = 'Bóng Đá Anh'
    }  else if (path === 'tindaxem'){
        b1 = 'Trang chủ'
        b2 = 'Tin Đã xem'
    }


    return (
        <div className="container">
            <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                <div className="f2-s-1 p-r-30 m-tb-6">
                    <a href="index.html" className="breadcrumb-item f1-s-3 cl9">
                        {b1}
                    </a>
                    <a href="category-02.html" className="breadcrumb-item f1-s-3 cl9">
                        {b2}
                    </a>
                </div>
                <form action={"/search"}>
                    <div className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6">
                        <input
                            className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45"
                            type="text"
                            name="q"
                            placeholder="Search"
                        />
                        <button className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03 search-btn">
                            <i className="zmdi zmdi-search" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}


export  default PageHeading