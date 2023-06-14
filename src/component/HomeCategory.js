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
    return(
        <div className="tab-content p-t-35">
            <div className="tab-pane fade show active" id="tab1-1" role="tabpanel">
                <div className="row">
                    {rssType.length > 0 &&
                        <>
                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                        <div className="m-b-30">
                            <a href={`detail?url=${encodeURIComponent(rssType[0].link)}`} className="wrap-pic-w hov1 trans-03">
                                <img src={rssType[0].image} alt="IMG"/>
                            </a>
                            <div className="p-t-20">
                                <h5 className="p-b-5">
                                    <a href={`detail?url=${encodeURIComponent(rssType[0].link)}`} className="f1-m-3 cl2 hov-cl10 trans-03">
                                        {rssType[0].description}
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
                            <a  href={`detail?url=${encodeURIComponent(item.link)}`} className="size-w-1 wrap-pic-w hov1 trans-03">
                                <img src={item.image} alt="IMG"/>
                            </a>
                            <div className="size-w-2">
                                <h5 className="p-b-5">
                                    <a href={`detail?url=${encodeURIComponent(item.link)}`} className="f1-s-5 cl3 hov-cl10 trans-03">
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

