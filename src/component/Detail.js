import React, {useEffect, useState} from 'react';
import ContentDetail from "./ContentDetail";
import {useLocation} from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";


const Detail = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const url = 'https://api.allorigins.win/raw?url=' + queryParams.get('url');
    const [articleTitle, setArticleTitle] = useState('');
    useEffect(() => {
    }, []);

    return (
        <div>
            <ContentDetail url={url}/>
            <Footer></Footer>
        </div>
    );
}

export default Detail;
