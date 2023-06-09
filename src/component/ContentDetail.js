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
import RelatedArticles from "./RelatedArticles";
import Footer from "./common/Footer";
import Header from "./common/Header";

const ContentDetail = ({ url }) => {
    const [articleTitle, setArticleTitle] = useState('');
    const [articleDescription, setArticleDescription] = useState('');
    const [articleContent, setArticleContent] = useState('');
    const [publishDate, setPublishDate] = useState('');
    const [relation, setRelation] = useState(null);
    const [articleContentRead, setArticleContentRead] = useState('');
    const [isSpeaking, setIsSpeaking] = useState(false); // Trạng thái đang đọc
    const [isVisible, setIsVisible] = useState(false);
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
                const cleanedDescription = description.replace('BongDa.com.vn', '');
                setArticleDescription(cleanedDescription);
                // Lấy bài viết tương tự và cập nhật state
                try {
                    const rela = $('.new_relation_top').html();
                    setRelation(rela);
                } catch (error) {
                    console.error('Error fetching related articles:', error);
                    setRelation(null); // Nếu có lỗi, đặt giá trị relation là null
                }
                // Lấy nội dung bài viết
                const content = $('#content_detail');
                content.find('div.new_relation_top.pkg.in-article-related-news').remove();
                setArticleContent(content);
                //Lấy ngày đăng bài viết
                const publishDate = $('.text-right').text();
                const cleanedPublishDate = publishDate.replace('Copy Link', '');
                setPublishDate(cleanedPublishDate);
                // Đọc nội dung bài viết
                content.find('div.new_relation_top.pkg.in-article-related-news').remove();
                content.find('expEdit').remove();
                const ct = content.text();
                setArticleContentRead(ct);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getContent();
    }, [url]);
    const handleTextToSpeech = () => {
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(
                articleTitle + ' ' + articleDescription + ' ' + articleContentRead
            );
            speech.lang = 'vi-VN'; // Đặt ngôn ngữ của văn bản thành tiếng Việt

            if (!isSpeaking) {
                // Bắt đầu đọc nếu chưa đọc
                speechSynthesis.speak(speech);
                setIsSpeaking(true);
            } else {
                // Tạm dừng hoặc dừng đọc nếu đang đọc
                if (speechSynthesis.paused) {
                    speechSynthesis.resume(); // Tiếp tục đọc nếu đã tạm dừng
                } else {
                    speechSynthesis.pause(); // Tạm dừng đọc nếu đang đọc
                }
            }
        } else {
            console.log('Trình duyệt của bạn không hỗ trợ text-to-speech.');
        }
    };

    // Quản lý sự kiện trước khi chuyển trang hoặc tải lại trang
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (isSpeaking) {
                event.preventDefault();
                event.returnValue = ''; // Hiển thị thông báo xác nhận rời khỏi trang
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isSpeaking]);
    // Hiển thị nút "Trở lại đầu trang" khi cuộn xuống một khoảng cách nhất định
    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Thêm sự kiện lắng nghe cuộn trang khi thành phần được tạo
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Cuộn trang lên đầu khi người dùng nhấp vào nút
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <div>
            <title>{articleTitle}</title>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Header></Header>
            <div className="container">
                <div className="headline bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                    <div className="f2-s-1">
                        {/* Nút phát/tạm dừng */}

                    </div>

                    <div className="pos-relative bo-1-rad-22 of-hidden bocl11 m-tb-6">
                        <button onClick={handleTextToSpeech}>{isSpeaking ? 'Tạm dừng' : 'Đọc bài viết'}</button>

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
                                    )}
                                        <style>
                                            {`
                                                h2 {
                                                  font-size: 1rem;
                                                }
                                            `}
                                        </style></div>
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
                                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                                               className="dis-block f1-s-13 cl0 bg-facebook borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
                                               target="_blank"
                                               rel="noopener noreferrer">
                                                <i className="fab fa-facebook-f m-r-7"></i>
                                                Facebook
                                            </a>
                                            <a href={`https://twitter.com/share?url=${url}`}
                                               className="dis-block f1-s-13 cl0 bg-twitter borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
                                               target="_blank"
                                               rel="noopener noreferrer">
                                                <i className="fab fa-facebook-f m-r-7"></i>
                                                Twitter
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-10 col-lg-4 p-b-30">
                            <div className="p-l-10 p-rl-0-sr991 p-t-70">
                                {relation && (
                                    <div>
                                        <RelatedArticles relation={relation} />
                                    </div>
                                )}
                                {/* Tag */}
                                <div>
                                    <div className="how2 how2-cl4 flex-s-c m-b-30">
                                        <h3 className="f1-m-2 cl3 tab01-title">Thẻ</h3>
                                    </div>
                                    <div className="flex-wr-s-s m-rl--5">
                                        <Link to={'/trang-chu/vietnam'}>
                                            <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                Việt Nam
                                            </a>
                                        </Link>
                                        <Link to={'/v-league'}>
                                            <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                V-League
                                            </a>
                                        </Link>
                                        <Link to={'/giai-tre-vn'}>
                                            <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                Giải trẻ VN
                                            </a>
                                        </Link>
                                        <Link to={'/fa-cup'}>
                                            <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                FA Cup
                                            </a>
                                        </Link>
                                        <Link to={'/chau-au'}>
                                            <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                Châu Âu
                                            </a>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Back to top */}
            {isVisible && (
                <button className="scroll-to-top-button" onClick={scrollToTop}>
                    <i className="fa fa-angle-double-up" aria-hidden="true"></i>
                </button>
            )}
        </div>

    );

};

export default ContentDetail;
