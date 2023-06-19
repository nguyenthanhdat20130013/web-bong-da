import React, { useState, useEffect } from 'react';
import "../Template/images/icons/favicon.png"
import "../Template/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "../Template/fonts/fontawesome-5.0.8/css/fontawesome-all.min.css"
import "../Template/fonts/iconic/css/material-design-iconic-font.min.css"
import "../Template/vendor/animate/animate.css"
import "../Template/vendor/css-hamburgers/hamburgers.min.css"
import "../Template/css/util.min.css"
import "../Template/css/main.css"
import Header from "../component/common/Header";

export function HomeCategory(props){
    const [rssType, setRssType] = useState([]);

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
                    image : item.querySelector("image").textContent,
                    link: item.querySelector("link").textContent,
                    pubDate: item.querySelector("pubDate").textContent,
                });
            });
            setRssType(rssItems);
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
        const article = rssType.find(item => item.title === title);

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

    return(
        <div className="tab-content p-t-35">
            <div className="tab-pane fade show active" id="tab1-1" role="tabpanel">
                <div className="row">
                    {rssType.length > 0 &&
                        <>
                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                        <div className="m-b-30">
                            <a onClick={() => add(rssType[0].title)}
                                href={`detail?url=${encodeURIComponent(rssType[0].link)}`} className="wrap-pic-w hov1 trans-03">
                                <img src={rssType[0].image} alt="IMG"/>
                            </a>
                            <div className="p-t-20">
                                <h5 className="p-b-5">
                                    <a onClick={() => add(rssType[0].title)}
                                        href={`detail?url=${encodeURIComponent(rssType[0].link)}`} className="f1-m-3 cl2 hov-cl10 trans-03">
                                        {rssType[0].title}
                                    </a>
                                </h5>
                                <span className="cl8">
                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">{rssType[0].pubDate}</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </>
                }
                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                        {rssType.length > 0 &&
                            <>
                                {rssType.slice(1, 4).map((item, index) => (
                        <div className="flex-wr-sb-s m-b-30">
                            <a onClick={() => add(item.title)}
                                href={`detail?url=${encodeURIComponent(item.link)}`} className="size-w-1 wrap-pic-w hov1 trans-03">
                                <img src={item.image} alt="IMG"/>
                            </a>
                            <div className="size-w-2">
                                <h5 className="p-b-5">
                                    <a onClick={() => add(item.title)}
                                        href={`detail?url=${encodeURIComponent(item.link)}`} className="f1-s-5 cl3 hov-cl10 trans-03">
                                        {item.title}
                                    </a>
                                </h5>
                                <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">{item.pubDate}</a>
                                </span>
                            </div>
                        </div>
                                ))}
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeCategory

