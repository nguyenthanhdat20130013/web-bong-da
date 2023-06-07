import React, {useEffect, useState} from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import {formatPubDate} from "../component/Convert";
import { Link } from 'react-router-dom';

import "../Template/images/icons/favicon.png"
import "../Template/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "../Template/fonts/fontawesome-5.0.8/css/fontawesome-all.min.css"
import "../Template/fonts/iconic/css/material-design-iconic-font.min.css"
import "../Template/vendor/animate/animate.css"
import "../Template/vendor/css-hamburgers/hamburgers.min.css"
import "../Template/css/util.min.css"
import "../Template/css/main.css"
import Header from "../component/common/Header";
const ContentDetail = ({ url }) => {
    const [articleTitle, setArticleTitle] = useState('');
    const [articleDescription, setArticleDescription] = useState('');
    const [articleContent, setArticleContent] = useState('');
    const [publishDate, setPublishDate] = useState('');

    useEffect(() => {
        const getContent = async () => {
            try {
                const response = await fetch('https://cors-anywhere.herokuapp.com/' + url);
                const html = await response.text();
                const $ = cheerio.load(html);

                // Lấy tiêu đề bài viết
                const title = $('h1').text()
                setArticleTitle(title);

                // // Lấy mô tả bài viết
                // const description = $('.detail-sapo').text();
                // setArticleDescription(description);

                // Lấy nội dung bài viết
                const content = $('#content_detail');
                setArticleContent(content);

                // Lấy ngày đăng bài viết
                const publishDate = $('[data-role="publishdate"]').text().trim();
                setPublishDate(formatPubDate(publishDate));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getContent();
    }, [url]);


    return (
        <div>
                <Link to="/trang-chu">Trang chủ</Link>

                <h1 style={{
                    fontSize: '36px',

                }}>{articleTitle}</h1>
                <div>  {articleContent ? (
                    <div dangerouslySetInnerHTML={{__html: articleContent}}/>
                ) : (
                    <div>Đang tải trang, chờ xíu....</div>
                )}</div>
        </div>

    );

};

export default ContentDetail;
