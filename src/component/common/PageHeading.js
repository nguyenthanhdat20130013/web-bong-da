import React from "react";
import {useParams} from "react-router-dom";


export function PageHeading(){

        const pathName = window.location.pathname;
        const path = pathName.substring(1);
        let title;
        if (path === 'trang-chu') {
            title = 'Trang chủ'
        } else if (path === 'tin-chuyen-nhuong'){
            title = 'Tin Chuyển Nhượng'
        } else if (path === 'vietnam'){
            title = 'Bóng Đá Việt Nam'
        } else if (path === 'doi-tuyen-quoc-gia'){
            title = 'Các Đội Tuyển Quốc Gia'
        } else if (path === 'v-league'){
            title = 'V-league'
        } else if (path === 'cup-quoc-gia-vn'){
            title = 'Cúp Quốc Gia'
        } else if (path === 'hang-nhat-vn'){
            title = 'Hạng Nhất'
        } else if (path === 'giai-tre-vn'){
            title = 'Giải Trẻ'
        } else if (path === 'bong-da-nu'){
            title = 'Bóng Đá Nữ'
        } else if (path === 'tin-khac-vn'){
            title = 'Tin khác'
        } else if (path === 'fa-cup'){
            title = 'Fa Cup'
        } else if (path === 'premier-league'){
            title = 'Premier League'
        }else if (path === 'efl'){
            title = 'EFL Cup'
        }else if (path === 'y'){
            title = 'Bóng Đá Ý'
        } else if (path === 'champions-league'){
            title = 'Champions League'
        } else if (path === 'anh'){
            title = 'Bóng Đá Anh'
        } else if (path === 'tindaxem'){
            title =  'Tin Đã xem'
        }

        return (
            <div className="container p-t-4 p-b-40">
                <h2 className="f1-l-1 cl2">{title}</h2>
            </div>
        );
}


export  default PageHeading