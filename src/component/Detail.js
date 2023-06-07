import React, { useEffect, useState } from 'react';
import ContentDetail from "./ContentDetail";
import { useLocation } from "react-router-dom";
import Header from "./common/Header";


const Detail = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const url = 'https://api.allorigins.win/raw?url=' + queryParams.get('url');

    const [educationItems, setEducationItems] = useState([]);
    const [worldItems, setWorldItems] = useState([]);

    const feedUrlEducation = 'rss/giao-duc.rss';
    const feedUrlWorld = 'rss/the-gioi.rss';

    useEffect(() => {

    }, []);

    return (
        <div>


            <div className="container main-news">
                            <Header></Header>

                            <ContentDetail url={url} />

            </div>
        </div>
    );
}

export default Detail;
