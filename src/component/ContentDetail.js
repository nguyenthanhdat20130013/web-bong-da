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

                // Lấy mô tả bài viết
                const description = $('.sapo_detail ').text();
                setArticleDescription(description);

                // Lấy nội dung bài viết
                const content = $('#content_detail');
                setArticleContent(content);

                // Lấy ngày đăng bài viết
                const publishDate = $('.text-right').text();

                setPublishDate(publishDate);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getContent();
    }, [url]);


    return (
        // <div>
        //         <Link to="/trang-chu">Trang chủ</Link>
        //
        //         <h1 style={{
        //             fontSize: '36px',
        //
        //         }}>{articleTitle}</h1>
        //         <div>  {articleContent ? (
        //             <div dangerouslySetInnerHTML={{__html: articleContent}}/>
        //         ) : (
        //             <div>Đang tải trang, chờ xíu....</div>
        //         )}</div>
        // </div>
        <div>
            <div className="container">
                <div className="headline bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                    <div className="f2-s-1 p-r-30 m-tb-6">
                        <a href="index.html" className="breadcrumb-item f1-s-3 cl9">
                            Home
                        </a>

                        <a href="blog-list-01.html" className="breadcrumb-item f1-s-3 cl9">
                            Blog
                        </a>

                        <span className="breadcrumb-item f1-s-3 cl9">
					pellentesque
				</span>
                    </div>

                    <div className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6">
                        <input className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45" type="text" name="search"
                               placeholder="Search"/>
                        <button className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03">
                            <i className="zmdi zmdi-search"></i>
                        </button>
                    </div>
                </div>
            </div>


            <section className="bg0 p-b-140 p-t-10">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8 p-b-30">
                            <div className="p-r-10 p-r-0-sr991">

                                <div className="p-b-70">


                                    <a className="f1-l-3 cl2 p-b-16 p-t-33 respon2">
                                        {articleTitle}
                                    </a>

                                    <div className="flex-wr-s-s p-b-40">
								<span className="f1-s-3 cl8 m-r-15">
									<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
										{publishDate}
									</a>


								</span>
                                        <div>
                                            <h5 style={{fontSize: 17 + 'px'}} className="f1-l-3 cl2 p-b-16 p-t-33 respon2">
                                                {articleDescription}
                                            </h5>
                                        </div>
                                    </div>
                                    <div>  {articleContent ? (
                                        <div dangerouslySetInnerHTML={{__html: articleContent}}/>
                                    ) : (
                                        <div>Đang tải trang, chờ xíu....</div>
                                    )}</div>
                                    <div className="flex-s-s p-t-12 p-b-15">
								<span className="f1-s-12 cl5 m-r-8">
									Tags:
								</span>

                                        <div className="flex-wr-s-s size-w-0">
                                            <a href="#" className="f1-s-12 cl8 hov-link1 m-r-15">Bóng đá
                                            </a>
                                        </div>
                                    </div>


                                    <div className="flex-s-s">
								<span className="f1-s-12 cl5 p-t-1 m-r-15">
									Chia sẻ:
								</span>

                                        <div className="flex-wr-s-s size-w-0">
                                            <a href="#"
                                               className="dis-block f1-s-13 cl0 bg-facebook borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
                                                <i className="fab fa-facebook-f m-r-7"></i>
                                                Facebook
                                            </a>

                                            <a href="#"
                                               className="dis-block f1-s-13 cl0 bg-twitter borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
                                                <i className="fab fa-twitter m-r-7"></i>
                                                Twitter
                                            </a>

                                            <a href="#"
                                               className="dis-block f1-s-13 cl0 bg-google borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
                                                <i className="fab fa-google-plus-g m-r-7"></i>
                                                Google+
                                            </a>

                                            <a href="#"
                                               className="dis-block f1-s-13 cl0 bg-pinterest borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
                                                <i className="fab fa-pinterest-p m-r-7"></i>
                                                Pinterest
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-10 col-lg-4 p-b-30">
                            <div className="p-l-10 p-rl-0-sr991 p-t-70">

                                <div className="p-b-60">
                                    <div className="how2 how2-cl4 flex-s-c">
                                        <h3 className="f1-m-2 cl3 tab01-title">
                                            Danh mục
                                        </h3>
                                    </div>

                                    <ul className="p-t-35">
                                        <li className="how-bor3 p-rl-4">
                                            <a href="#"
                                               className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                                                Fashion
                                            </a>
                                        </li>

                                        <li className="how-bor3 p-rl-4">
                                            <a href="#"
                                               className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                                                Beauty
                                            </a>
                                        </li>

                                        <li className="how-bor3 p-rl-4">
                                            <a href="#"
                                               className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                                                Street Style
                                            </a>
                                        </li>

                                        <li className="how-bor3 p-rl-4">
                                            <a href="#"
                                               className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                                                Life Style
                                            </a>
                                        </li>

                                        <li className="how-bor3 p-rl-4">
                                            <a href="#"
                                               className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                                                DIY & Crafts
                                            </a>
                                        </li>
                                    </ul>
                                </div>





                                <div className="p-b-30">
                                    <div className="how2 how2-cl4 flex-s-c">
                                        <h3 className="f1-m-2 cl3 tab01-title">
                                            Bài đăng hot
                                        </h3>
                                    </div>

                                    <ul className="p-t-35">
                                        <li className="flex-wr-sb-s p-b-30">
                                            <a href="#" className="size-w-10 wrap-pic-w hov1 trans-03">
                                                <img src="images/popular-post-04.jpg" alt="IMG"/>
                                            </a>

                                            <div className="size-w-11">
                                                <h6 className="p-b-4">
                                                    <a href="blog-detail-02.html"
                                                       className="f1-s-5 cl3 hov-cl10 trans-03">
                                                        Donec metus orci, malesuada et lectus vitae
                                                    </a>
                                                </h6>

                                                <span className="cl8 txt-center p-b-24">
											<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
												Music
											</a>

											<span className="f1-s-3 m-rl-3">
												-
											</span>

											<span className="f1-s-3">
												Feb 18
											</span>
										</span>
                                            </div>
                                        </li>

                                        <li className="flex-wr-sb-s p-b-30">
                                            <a href="#" className="size-w-10 wrap-pic-w hov1 trans-03">
                                                <img src="images/popular-post-05.jpg" alt="IMG"/>
                                            </a>

                                            <div className="size-w-11">
                                                <h6 className="p-b-4">
                                                    <a href="blog-detail-02.html"
                                                       className="f1-s-5 cl3 hov-cl10 trans-03">
                                                        Donec metus orci, malesuada et lectus vitae
                                                    </a>
                                                </h6>

                                                <span className="cl8 txt-center p-b-24">
											<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
												Game
											</a>

											<span className="f1-s-3 m-rl-3">
												-
											</span>

											<span className="f1-s-3">
												Feb 16
											</span>
										</span>
                                            </div>
                                        </li>

                                        <li className="flex-wr-sb-s p-b-30">
                                            <a href="#" className="size-w-10 wrap-pic-w hov1 trans-03">
                                                <img src="images/popular-post-06.jpg" alt="IMG"/>
                                            </a>

                                            <div className="size-w-11">
                                                <h6 className="p-b-4">
                                                    <a href="blog-detail-02.html"
                                                       className="f1-s-5 cl3 hov-cl10 trans-03">
                                                        Donec metus orci, malesuada et lectus vitae
                                                    </a>
                                                </h6>

                                                <span className="cl8 txt-center p-b-24">
											<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
												Celebrity
											</a>

											<span className="f1-s-3 m-rl-3">
												-
											</span>

											<span className="f1-s-3">
												Feb 12
											</span>
										</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>


                                <div>
                                    <div className="how2 how2-cl4 flex-s-c m-b-30">
                                        <h3 className="f1-m-2 cl3 tab01-title">
                                            Tags
                                        </h3>
                                    </div>

                                    <div className="flex-wr-s-s m-rl--5">
                                        <a href="#"
                                           className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                            Fashion
                                        </a>

                                        <a href="#"
                                           className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                            Lifestyle
                                        </a>

                                        <a href="#"
                                           className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                            Denim
                                        </a>

                                        <a href="#"
                                           className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                            Streetstyle
                                        </a>

                                        <a href="#"
                                           className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                            Crafts
                                        </a>

                                        <a href="#"
                                           className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                            Magazine
                                        </a>

                                        <a href="#"
                                           className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                            News
                                        </a>

                                        <a href="#"
                                           className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                            Blogs
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );

};

export default ContentDetail;
