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
                                    {/* Most Popular */}
                                    <div className="p-b-23">
                                        <div className="how2 how2-cl4 flex-s-c">
                                            <h3 className="f1-m-2 cl3 tab01-title">Most Popular</h3>
                                        </div>
                                        <ul className="p-t-35">
                                            <li className="flex-wr-sb-s p-b-22">
                                                <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                    1
                                                </div>
                                                <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                </a>
                                            </li>
                                            <li className="flex-wr-sb-s p-b-22">
                                                <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                    2
                                                </div>
                                                <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                                                    Proin velit consectetur non neque
                                                </a>
                                            </li>
                                            <li className="flex-wr-sb-s p-b-22">
                                                <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                    3
                                                </div>
                                                <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                                                    Nunc vestibulum, enim vitae condimentum volutpat lobortis
                                                    ante
                                                </a>
                                            </li>
                                            <li className="flex-wr-sb-s p-b-22">
                                                <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                    4
                                                </div>
                                                <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                                                    Proin velit justo consectetur non neque elementum
                                                </a>
                                            </li>
                                            <li className="flex-wr-sb-s p-b-22">
                                                <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0">
                                                    5
                                                </div>
                                                <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                                                    Proin velit consectetur non neque
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*  */}
                                    <div className="flex-c-s p-b-50">
                                        <a href="#">
                                            <img
                                                className="max-w-full"
                                                src="images/banner-02.jpg"
                                                alt="IMG"
                                            />
                                        </a>
                                    </div>
                                    {/* Tag */}
                                    <div>
                                        <div className="how2 how2-cl4 flex-s-c m-b-30">
                                            <h3 className="f1-m-2 cl3 tab01-title">Tags</h3>
                                        </div>
                                        <div className="flex-wr-s-s m-rl--5">
                                            <a
                                                href="#"
                                                className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                                            >
                                                Fashion
                                            </a>
                                            <a
                                                href="#"
                                                className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                                            >
                                                Lifestyle
                                            </a>
                                            <a
                                                href="#"
                                                className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                                            >
                                                Denim
                                            </a>
                                            <a
                                                href="#"
                                                className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                                            >
                                                Streetstyle
                                            </a>
                                            <a
                                                href="#"
                                                className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                                            >
                                                Crafts
                                            </a>
                                            <a
                                                href="#"
                                                className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                                            >
                                                Magazine
                                            </a>
                                            <a
                                                href="#"
                                                className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                                            >
                                                News
                                            </a>
                                            <a
                                                href="#"
                                                className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                                            >
                                                Blogs
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <footer>
                <div className="bg2 p-t-40 p-b-25">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 p-b-20">
                                <div className="size-h-3 flex-s-c">
                                    <a href="index.html">
                                        <img
                                            className="max-s-full"
                                            src="images/icons/logo-02.png"
                                            alt="LOGO"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <p className="f1-s-1 cl11 p-b-16">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur tempor magna eget elit efficitur, at accumsan sem
                                        placerat. Nulla tellus libero, mattis nec molestie at, facilisis
                                        ut turpis. Vestibulum dolor metus, tincidunt eget odio
                                    </p>
                                    <p className="f1-s-1 cl11 p-b-16">
                                        Any questions? Call us on (+1) 96 716 6879
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
                                <div className="size-h-3 flex-s-c">
                                    <h5 className="f1-m-7 cl0">Popular Posts</h5>
                                </div>
                                <ul>
                                    <li className="flex-wr-sb-s p-b-20">
                                        <a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
                                            <img src="images/popular-post-01.jpg" alt="IMG"/>
                                        </a>
                                        <div className="size-w-5">
                                            <h6 className="p-b-5">
                                                <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
                                                    Donec metus orci, malesuada et lectus vitae
                                                </a>
                                            </h6>
                                            <span className="f1-s-3 cl6">Feb 17</span>
                                        </div>
                                    </li>
                                    <li className="flex-wr-sb-s p-b-20">
                                        <a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
                                            <img src="images/popular-post-02.jpg" alt="IMG"/>
                                        </a>
                                        <div className="size-w-5">
                                            <h6 className="p-b-5">
                                                <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                </a>
                                            </h6>
                                            <span className="f1-s-3 cl6">Feb 16</span>
                                        </div>
                                    </li>
                                    <li className="flex-wr-sb-s p-b-20">
                                        <a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
                                            <img src="images/popular-post-03.jpg" alt="IMG"/>
                                        </a>
                                        <div className="size-w-5">
                                            <h6 className="p-b-5">
                                                <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
                                                    Suspendisse dictum enim quis imperdiet auctor
                                                </a>
                                            </h6>
                                            <span className="f1-s-3 cl6">Feb 15</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-lg-4 p-b-20">
                                <div className="size-h-3 flex-s-c">
                                    <h5 className="f1-m-7 cl0">Category</h5>
                                </div>
                                <ul className="m-t--12">
                                    <li className="how-bor1 p-rl-5 p-tb-10">
                                        <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                            Fashion (22)
                                        </a>
                                    </li>
                                    <li className="how-bor1 p-rl-5 p-tb-10">
                                        <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                            Technology (29)
                                        </a>
                                    </li>
                                    <li className="how-bor1 p-rl-5 p-tb-10">
                                        <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                            Street Style (15)
                                        </a>
                                    </li>
                                    <li className="how-bor1 p-rl-5 p-tb-10">
                                        <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                            Life Style (28)
                                        </a>
                                    </li>
                                    <li className="how-bor1 p-rl-5 p-tb-10">
                                        <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                            DIY &amp; Crafts (16)
                                        </a>
                                    </li>
                                </ul>
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
        </div>
    );
};

export default SearchResult;
