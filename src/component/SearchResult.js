import React, {useEffect, useState} from 'react';
import cheerio from 'cheerio';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import "../Template/images/icons/favicon.png"
import "../Template/vendor/bootstrap/css/bootstrap.min.css"
import "../Template/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "../Template/fonts/fontawesome-5.0.8/css/fontawesome-all.min.css"
import "../Template/fonts/iconic/css/material-design-iconic-font.min.css"
import "../Template/vendor/animate/animate.css"
import "../Template/vendor/css-hamburgers/hamburgers.min.css"
import "../Template/css/util.min.css"
import "../Template/css/main.css"
import Header from "./common/Header";
import Footer from "./common/Footer";
import HotNews from "./HotNews";

const SearchResult = ({ q }) => {
    const [articles, setArticles] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const url = 'https://cors-anywhere.herokuapp.com/' + 'https://www.bongda.com.vn/' +  queryParams.get('q') + '-search/';

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(url);
            const html = await response.text();
            const $ = cheerio.load(html);
            const items = $('.list_top_news li');
            const articlesData = [];

            $(items).each((index, element) => {
                articlesData.push({
                    title: $(element).find('.title_list_top_news').text().trim(),
                    timePublish: $(element).find('.time_comment').text().trim(),
                    image: $(element).find('img').attr('src'),
                    link: $(element).find('a').attr('href'),
                    description: $(element).find('.sapo_news').text().trim(),
                })
            });
            setArticles(articlesData);
        };

        fetchData();
    }, [q]);


    /*// Search
    let navigate = useNavigate();
    const  [value, setvalue] = useState('');
    const  onChange = (event)=>{
        setvalue(event.target.value);
    }
    const onSearch = (value) =>{
        /!*!/https://www.bongda.com.vn/${value}search/!*!/
        let seacrchValue = value.replace(/\s+/g, '+');
        navigate(`/search?q=${seacrchValue}`);
        //navigate(`/search?q=${'https://www.bongda.com.vn/'+ seacrchValue + '-search/'}`);
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch(value);
        }
    };
*/
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


            <title>Category Page v1</title>
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
                            <span className="breadcrumb-item f1-s-3 cl9">Tìm kiếm</span>
                        </div>
                        <form>
                        <div className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6">
                                <input
                                    className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45"
                                    type="text"
                                    name="q"
                                    placeholder="Search"
                                    /*value={value}
                                    onChange={onChange}
                                    onKeyDown={handleKeyDown}*/
                                />
                                <button /*onClick={() => onSearch(value)} */ className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03 search-btn">
                                    <i className="zmdi zmdi-search" />
                                </button>
                        </div>
                    </form>
                    </div>
                </div>
                {/* Page heading */}
                <div className="container p-t-4 p-b-40">
                    <h2 className="f1-l-1 cl2">Tìm kiếm tin tức liên quan đến "{queryParams.get('q')}"</h2>
                </div>
                {/* Post */}
                <section className="bg0 p-b-55">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-8 p-b-80">
                                <div className="p-r-10 p-r-0-sr991">
                                    <div className="m-t--40 p-b-40">
                                        {articles.length > 0 ?
                                            (
                                                articles.slice(0,7).map((item, index) => (
                                            <div className="flex-wr-sb-s p-t-40 p-b-15 how-bor2">
                                                <a
                                                    href={`detail?url=${encodeURIComponent(item.link)}`}
                                                    className="size-w-8 wrap-pic-w hov1 trans-03 w-full-sr575 m-b-25"
                                                >
                                                    <img src={item.image} alt="IMG"/>
                                                </a>
                                                <div className="size-w-9 w-full-sr575 m-b-25">
                                                    <h5 className="p-b-1" >
                                                        <a style={{ fontSize: '21px'}}
                                                            href={`detail?url=${encodeURIComponent(item.link)}`}
                                                            className="f1-l-1 cl2 hov-cl10 trans-03 respon2"
                                                        >
                                                            {item.title}
                                                        </a>
                                                    </h5>
                                                    <div className="cl8 p-b-18">
                                                       {/* <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                            by John Alvarado
                                                        </a>*/}
                                                        <span className="f1-s-3 m-rl-3">-</span>
                                                        <span className="f1-s-3">{item.timePublish}</span>
                                                    </div>
                                                    <p className="f1-s-1 cl6 p-b-10">
                                                        {item.description}
                                                    </p>
                                                    {/*<a style={{ lineHeight: '1'}}
                                                        href={`detail?url=${encodeURIComponent(item.link)}`}
                                                        className="f1-s-1 cl9 hov-cl10 trans-03"
                                                    >
                                                        Read More
                                                        <i className="m-l-2 fa fa-long-arrow-alt-right" />
                                                    </a>*/}
                                                </div>
                                            </div>
                                                    )))
                                            : (
                                                <p>Loading...</p>
                                            )}
                                    </div>
                                    <a
                                        href="#"
                                        className="flex-c-c size-a-13 bo-all-1 bocl11 f1-m-6 cl6 hov-btn1 trans-03"
                                    >
                                        Load More
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-10 col-lg-4 p-b-80">
                                <div className="p-l-10 p-rl-0-sr991">
                                    {/* Subscribe */}
                                    <div className="bg10 p-rl-35 p-t-28 p-b-35 m-b-50">
                                        <h5 className="f1-m-5 cl0 p-b-10">Subscribe</h5>
                                        <p className="f1-s-1 cl0 p-b-25">
                                            Get all latest content delivered to your email a few times a
                                            month.
                                        </p>
                                        <form className="size-a-9 pos-relative">
                                            <input
                                                className="s-full f1-m-6 cl6 plh9 p-l-20 p-r-55"
                                                type="text"
                                                name="email"
                                                placeholder="Email"
                                            />
                                            <button className="size-a-10 flex-c-c ab-t-r fs-16 cl9 hov-cl10 trans-03">
                                                <i className="fa fa-arrow-right" />
                                            </button>
                                        </form>
                                    </div>
                                    <div className="p-b-23">
                                        <HotNews></HotNews>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer></Footer>
        </div>
    );
};

export default SearchResult;
