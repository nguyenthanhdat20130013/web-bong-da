import React from 'react';

const RelatedArticles = ({ relation }) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(relation, 'text/html');
    const items = doc.querySelectorAll('ul li');
    const articles = [];

    items.forEach((item) => {
        const title = item.querySelector('h3 a').textContent;
        const link = item.querySelector('h3 a').getAttribute('href');
        articles.push({ title, link });
    });

    return (
        <div className="p-b-30">
            <div className="how2 how2-cl4 flex-s-c">
                <h3 className="f1-m-2 cl3 tab01-title">Bài viết tương tự</h3>
            </div>
            <ul className="p-t-35">
                {articles.map((article, index) => (
                    <div className={'dis-block f1-s-10 cl2 hov-cl10 trans-03 p-tb-13'}>
                        <li key={index}>
                            <a  href={`detail?url=${encodeURIComponent(article.link)}`} className="f1-s-5 cl3 hov-cl10 trans-03">
                                {article.title}
                            </a>
                        </li>
                    </div>

                ))}
            </ul>
        </div>
    );
};

export default RelatedArticles;
