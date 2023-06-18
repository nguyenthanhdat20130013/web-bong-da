import React, {useState, useEffect} from 'react';
import "../Template/images/icons/favicon.png"
import "../Template/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "../Template/fonts/fontawesome-5.0.8/css/fontawesome-all.min.css"
import "../Template/fonts/iconic/css/material-design-iconic-font.min.css"
import "../Template/vendor/animate/animate.css"
import "../Template/vendor/css-hamburgers/hamburgers.min.css"
import "../Template/css/util.min.css"
import "../Template/css/main.css"
import Header from "../component/common/Header";
import HomeCategory from "./HomeCategory";
import {Link, useNavigate} from "react-router-dom";
import Footer from "./common/Footer";

export function Home(props) {
    const [rssHome, setRssHome] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(
                "https://api.allorigins.win/get?url=" +
                encodeURIComponent(props.url)
            );
            let data = await response.json();
            let parser = new DOMParser();
            let xml = parser.parseFromString(data.contents, "application/xml");
            let items = xml.querySelectorAll("item");
            let rssItems = [];
            items.forEach((item) => {
                rssItems.push({
                    title: item.querySelector("title").textContent,
                    description: item.querySelector("description").textContent,
                    image: item.querySelector("image").textContent,
                    link: item.querySelector("link").textContent,
                    pubDate: item.querySelector("pubDate").textContent,
                    isXem: false,
                });
            });
            setRssHome(rssItems);
        };
        fetchData();
    }, [props.url]);

    function isArticleExist(title) {
        const savedArticles = localStorage.getItem('savedArticles');
        if (savedArticles) {
            const articles = JSON.parse(savedArticles);
            return articles.some(article => article.title === title);
        }
        return false;
    }

    function add(title) {
        // Kiểm tra bài báo đã tồn tại trong localStorage
        if (isArticleExist(title)) {
            console.log('Bài báo đã tồn tại trong localStorage.');
            return;
        }

        // Tìm bài báo theo tiêu đề trong rssHome
        const article = rssHome.find(item => item.title === title);

        // Kiểm tra nếu bài báo không tồn tại trong rssHome
        if (!article) {
            console.log('Không tìm thấy bài báo trong rssHome.');
            return;
        }

        // Lấy danh sách bài báo từ localStorage
        const savedArticles = localStorage.getItem('savedArticles');
        let articles = savedArticles ? JSON.parse(savedArticles) : [];

        // Thêm bài báo vào danh sách
        articles.push({
            link: article.link,
            image: article.image,
            title: article.title,
            description: article.description,
            pubDate: article.pubDate
        });

        // Lưu danh sách bài báo vào localStorage
        localStorage.setItem('savedArticles', JSON.stringify(articles));

        console.log('Bài báo đã được lưu vào localStorage.');
    }
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
            <title>Trang chủ</title>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Header></Header>

            {/* Breadcrumb */}
            <div className="container">
                <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                    <div className="f2-s-1 p-r-30 m-tb-6">
                        <a href="index.html" className="breadcrumb-item f1-s-3 cl9">
                            Trang chủ
                        </a>
                        <a href="category-02.html" className="breadcrumb-item f1-s-3 cl9">
                            Mới nhất
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
                                <i className="zmdi zmdi-search"/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Page heading */}
            <div className="container p-t-4 p-b-40">
                <h2 className="f1-l-1 cl2">Mới nhất</h2>
            </div>
            {/* Feature post */}
            <section className="bg0">
                <div className="container">
                    <div className="row m-rl--1">
                        <div className="col-md-6 p-rl-1 p-b-2">
                            {rssHome.length > 0 &&
                                <>
                                    <div className="bg-img1 size-a-3 how1 pos-relative"
                                         style={{backgroundImage: `url(${rssHome[0].image})`}}>
                                        <a onClick={() => add(rssHome[0].title)}
                                           href={`detail?url=${encodeURIComponent(rssHome[0].link)}`}

                                           className="dis-block how1-child1 trans-03"
                                        />
                                        <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                                            <a style={{zIndex: '3', fontSize: '23px'}}
                                               onClick={() => add(rssHome[0].title)}
                                               href={`detail?url=${encodeURIComponent(rssHome[0].link)}`}
                                               className="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03">
                                                {rssHome[0].title}
                                            </a>

                                            <span className="how1-child2">
                        <span className="f1-s-4 cl11">{rssHome[0].pubDate}</span>
                <a style={{opacity: '0.98'}} onClick={() => add(rssHome[0].title)}
                   href={`detail?url=${encodeURIComponent(rssHome[0].link)}`}
                   className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                    {rssHome[0].description}
                </a>
              </span>
                                        </div>
                                    </div>

                                </>
                            }
                        </div>
                        <div className="col-md-6 p-rl-1">
                            <div className="row m-rl--1">
                                {rssHome.length > 0 &&
                                    <>
                                        {rssHome.slice(1, 5).map((item, index) => (
                                            <div className="col-sm-6 p-rl-1 p-b-2" key={index}>
                                                <div className="bg-img1 size-a-14 how1 pos-relative"
                                                     style={{backgroundImage: `url(${item.image})`}}>
                                                    <a onClick={() => add(item.title)}
                                                       href={`detail?url=${encodeURIComponent(item.link)}`}
                                                       className="dis-block how1-child1 trans-03"
                                                    />
                                                    <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                                                        <a onClick={() => add(item.title)}
                                                           href={`detail?url=${encodeURIComponent(item.link)}`}
                                                           className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                                                        >
                                                            {item.title}
                                                        </a>
                                                        <h3 className="how1-child2 m-t-14">
                                                            <a onClick={() => add(item.title)}
                                                               href={`detail?url=${encodeURIComponent(item.link)}`}
                                                               className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03"
                                                            >
                                                                {item.description}
                                                            </a>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg0 p-t-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="p-b-20">
                                <div className="tab01 p-b-20">
                                    <div className="tab01-head how2 how2-cl1 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                                        <h3 className="f1-m-2 cl12 tab01-title">
                                            V-LEAGUE
                                        </h3>
                                        <Link to='/v-league'>
                                            <a className="tab01-link f1-s-1 cl9 hov-cl10 trans-03">
                                                Xem thêm
                                                <i className="fs-12 m-l-5 fa fa-caret-right"></i>
                                            </a>
                                        </Link>
                                    </div>
                                    <HomeCategory url="https://www.bongda.com.vn/v-league.rss"/>
                                </div>
                                <div className="tab01 p-b-20">
                                    <div className="tab01-head how2 how2-cl1 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                                        <h3 className="f1-m-2 cl12 tab01-title">
                                            LA LIGA
                                        </h3>
                                        <Link to='/la-liga'>
                                            <a className="tab01-link f1-s-1 cl9 hov-cl10 trans-03">
                                                Xem thêm
                                                <i className="fs-12 m-l-5 fa fa-caret-right"></i>
                                            </a>
                                        </Link>
                                    </div>
                                    <HomeCategory url="https://www.bongda.com.vn/la-liga.rss"/>
                                </div>
                                <div className="tab01 p-b-20">
                                    <div className="tab01-head how2 how2-cl1 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                                        <h3 className="f1-m-2 cl12 tab01-title">
                                            Premier League
                                        </h3>
                                        <Link to='/premier-league'>
                                            <a className="tab01-link f1-s-1 cl9 hov-cl10 trans-03">
                                                Xem thêm
                                                <i className="fs-12 m-l-5 fa fa-caret-right"></i>
                                            </a>
                                        </Link>
                                    </div>
                                    <HomeCategory url="https://www.bongda.com.vn/premier-league.rss"/>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-10 col-lg-4">
                            <div className="p-l-10 p-rl-0-sr991">
                                {/* Subscribe */}
                                <div className="bg10 p-rl-35 p-t-28 p-b-35 m-b-50">
                                    <h5 className="f1-m-5 cl0 p-b-10">Đăng ký</h5>
                                    <p className="f1-s-1 cl0 p-b-25">
                                        Đăng ký để nhận được thông báo về các tin tức mới nhất và hấp dẫn nhất về bóng đá !
                                    </p>
                                    <form className="size-a-9 pos-relative">
                                        <input
                                            className="s-full f1-m-6 cl6 plh9 p-l-20 p-r-55"
                                            type="text"
                                            name="email"
                                            placeholder="Địa chỉ email"
                                        />
                                        <button className="size-a-10 flex-c-c ab-t-r fs-16 cl9 hov-cl10 trans-03">
                                            <i className="fa fa-arrow-right"/>
                                        </button>
                                    </form>
                                </div>
                                {/* Most Popular */}
                                {/*  */}
                                <div className="flex-c-s p-b-50">
                                    <a href="#">
                                        <img
                                            className="max-w-full"
                                            src="https://antimatter.vn/wp-content/uploads/2022/05/anh-bong-da-cau-thu-ra-san-dau.jpg"
                                            alt="IMG"
                                        />
                                    </a>
                                </div>
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
            {/* Post */}
            <section className="bg0 p-t-70 p-b-55">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="p-b-80">
                            <h1 className="f1-m-2 cl3 tab01-title">
                                Tin nổi bật
                            </h1>
                            <div className="row">
                                {rssHome.length > 0 &&
                                    <>
                                        {rssHome.slice(5, 24).map((item, index) => (
                                            <>
                                                <div className="col-sm-4 p-r-25 p-r-15-sr991">
                                                    {/* Item latest */}
                                                    <div className="m-b-45">

                                                        <a onClick={() => add(item.title)}
                                                           href={`detail?url=${encodeURIComponent(item.link)}`}
                                                           className="wrap-pic-w hov1 trans-03"
                                                        >
                                                            <img src={item.image} alt="IMG"/>
                                                        </a>

                                                        <div className="p-t-16">
                                                            <h5 className="p-b-5">
                                                                <a onClick={() => add(item.title)}
                                                                   href={`detail?url=${encodeURIComponent(item.link)}`}
                                                                   className="f1-m-3 cl2 hov-cl10 trans-03"
                                                                >
                                                                    {item.title}
                                                                </a>
                                                            </h5>
                                                            <span className="cl8">

                    <a onClick={() => add(item.title)}
                       href={`detail?url=${encodeURIComponent(item.link)}`} className="f1-s-4 cl8 hov-cl10 trans-03">
                      {item.description}
                    </a>
                    <span className="f1-s-3 m-rl-3">-</span>
                                                    <span className="f1-s-3">{item.pubDate}</span>
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
                                <a
                                    href="#"
                                    className="flex-c-c pagi-item hov-btn1 trans-03 m-all-7 pagi-active"
                                >
                                    1
                                </a>
                                <a
                                    href="#"
                                    className="flex-c-c pagi-item hov-btn1 trans-03 m-all-7"
                                >
                                    2
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
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

export default Home

