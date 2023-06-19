import React, {useEffect, useState} from 'react';
import Header from "./common/Header";
import Footer from "./common/Footer";

function SavedArticles() {
    // Lấy danh sách bài báo từ localStorage
    const savedArticles = localStorage.getItem('savedArticles');
    let articles = savedArticles ? JSON.parse(savedArticles) : [];
    const [isVisible, setIsVisible] = useState(false);
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
            <title>Tin đã xem</title>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Header></Header>
            <section className="bg0 p-t-70 p-b-55">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="p-b-80">
                            <h1>Tin đã xem</h1>
                            <div className="row">
                                {articles.length > 0 &&
                                    <>
                                        {articles.map((article, index) => (
                                            <>
                                                <div className="col-sm-4 p-r-25 p-r-15-sr991">
                                                    {/* Item latest */}
                                                    <div className="m-b-45">
                                                        <a href={`detail?url=${encodeURIComponent(article.link)}`}
                                                            className="wrap-pic-w hov1 trans-03">
                                                            <img src={article.image} alt="IMG"/>
                                                        </a>
                                                        <div className="p-t-16">
                                                            <h5 className="p-b-5">
                                                                <a href={`detail?url=${encodeURIComponent(article.link)}`}
                                                                    className="f1-m-3 cl2 hov-cl10 trans-03">
                                                                    {article.title}
                                                                </a>
                                                            </h5>
                                                            <span className="cl8">
                                                         <a href={`detail?url=${encodeURIComponent(article.link)}`}
                                                            className="f1-s-4 cl8 hov-cl10 trans-03">
                                                          {article.description}
                                                         </a>
                                                    <span className="f1-s-3 m-rl-3">-</span>
                                                    <span className="f1-s-3">{article.pubDate}</span>
                                                    </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </>
                                }
                            </div>
                            {/* Pagination */}
                            <div className="flex-wr-s-c m-rl--7 p-t-15">
                                <a href="#" className="flex-c-c pagi-item hov-btn1 trans-03 m-all-7 pagi-active">
                                    1
                                </a>
                                <a href="#" className="flex-c-c pagi-item hov-btn1 trans-03 m-all-7">
                                    2
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
            {/* Back to top */}
            {isVisible && (
                <button className="scroll-to-top-button" onClick={scrollToTop}>
                    <i className="fa fa-angle-double-up" aria-hidden="true"></i>
                </button>
            )}
        </div>
    )
}

export default SavedArticles;
