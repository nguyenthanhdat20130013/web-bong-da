import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import cheerio from "cheerio";


export function HotNews() {
    const [hotNews, setHotNews] = useState([]);
    const url = 'https://cors-anywhere.herokuapp.com/' + 'https://www.bongda.com.vn/';

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const html = await response.text();
            const $ = cheerio.load(html);
            const items = $('.list_news_hot li');
            const hotNewData = [];

            $(items).each((index, element) => {
                hotNewData.push({
                    title: $(element).find('span').text().trim(),
                    link: $(element).find('a').attr('href'),
                })
            });
            setHotNews(hotNewData);
        };

        fetchData();
    }, []);

    return (
    <div className="col-md-10 col-lg-4">
        <div className="p-l-10 p-rl-0-sr991 p-b-20">
            <div>
                <div className="how2 how2-cl4 flex-s-c">
                    <h3 className="f1-m-2 cl3 tab01-title">
                        Tin Nóng
                    </h3>
                </div>
                <ul className="p-t-35">
                    {hotNews.length > 0 ?
                        (
                            hotNews.slice(0,5).map((item, index) => (
                    <li className="flex-wr-sb-s p-b-22">
                        <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                            {index + 1}
                        </div>

                        <a
                           href={`detail?url=${encodeURIComponent(item.link)}`}
                           className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                            {item.title}
                        </a>
                    </li>
                            )))
                        : (
                            <p>Loading...</p>
                        )}
                </ul>
            </div>


            <div className="flex-c-s p-t-8">
                <a href="#">
                    <img className="max-w-full" src="images/banner-02.jpg" alt="IMG"/>
                </a>
            </div>


            <div className="p-t-50">
                <div className="how2 how2-cl4 flex-s-c">
                    <h3 className="f1-m-2 cl3 tab01-title">
                        Stay Connected
                    </h3>
                </div>

                <ul className="p-t-35">
                    <li className="flex-wr-sb-c p-b-20">
                        <a href="#"
                           className="size-a-8 flex-c-c borad-3 size-a-8 bg-facebook fs-16 cl0 hov-cl0">
                            <span className="fab fa-facebook-f"></span>
                        </a>

                        <div className="size-w-3 flex-wr-sb-c">
										<span className="f1-s-8 cl3 p-r-20">
											6879 Fans
										</span>

                            <a href="#" className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03">
                                Like
                            </a>
                        </div>
                    </li>

                    <li className="flex-wr-sb-c p-b-20">
                        <a href="#"
                           className="size-a-8 flex-c-c borad-3 size-a-8 bg-twitter fs-16 cl0 hov-cl0">
                            <span className="fab fa-twitter"></span>
                        </a>

                        <div className="size-w-3 flex-wr-sb-c">
										<span className="f1-s-8 cl3 p-r-20">
											568 Followers
										</span>

                            <a href="#" className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03">
                                Follow
                            </a>
                        </div>
                    </li>

                    <li className="flex-wr-sb-c p-b-20">
                        <a href="#"
                           className="size-a-8 flex-c-c borad-3 size-a-8 bg-youtube fs-16 cl0 hov-cl0">
                            <span className="fab fa-youtube"></span>
                        </a>

                        <div className="size-w-3 flex-wr-sb-c">
										<span className="f1-s-8 cl3 p-r-20">
											5039 Subscribers
										</span>

                            <a href="#" className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03">
                                Subscribe
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)
};

export default HotNews
