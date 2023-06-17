import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {Error} from "../component/Error";
import Home from "../component/Home";
import TransferNews from "../component/TransferNews";
import Detail from "../component/Detail";
import SearchResult from "../component/SearchResult";
export const webRouter=createBrowserRouter([{
    path:'/',
    element:<App/>,
    children:[{
        path:'/trang-chu/tin-chuyen-nhuong',
        element: <Home url="https://www.bongda.com.vn/tin-chuyen-nhuong.rss" />

    }, {
        path:'/',
        element: <Home url="https://www.bongda.com.vn/feed.rss"/>
    },
        {
            path:'/trang-chu',
            element: <Home url="https://www.bongda.com.vn/feed.rss"/>
        },
        , {
            path: '/detail',
            element: <Detail/>,
        },
        {
            path: '/trang-chu/detail',
            element: <Detail/>,
        }, {
            path: '/trang-chu/vietnam',
            element: <Home url={"https://www.bongda.com.vn/viet-nam.rss"}/>
        }, {
            path: '/trang-chu/anh',
            element: <Home url={"https://www.bongda.com.vn/bong-da-anh.rss"}/>
        }, {
            path: '/trang-chu/y',
            element: <Home url={"https://www.bongda.com.vn/bong-da-y.rss"}/>
        }, {
            path: '/trang-chu/bandoc',
            element: <Home url={"https://www.bongda.com.vn/goc-ban-doc.rss"}/>
        },
        // Bong da Viet Nam
        {
            path: '/doi-tuyen-quoc-gia',
            element: <Home url={"https://www.bongda.com.vn/doi-tuyen-quoc-gia.rss"}/>
        },
        {
            path: '/cup-quoc-gia-vn',
            element: <Home url={"https://www.bongda.com.vn/cup-quoc-gia-vn.rss"}/>
        },
        {
            path: '/v-league',
            element: <Home url={"https://www.bongda.com.vn/v-league.rss"}/>
        },
        {
            path: '/hang-nhat-vn',
            element: <Home url={"https://www.bongda.com.vn/hang-nhat-vn.rss"}/>
        },
        {
            path: '/giai-tre-vn',
            element: <Home url={"https://www.bongda.com.vn/giai-tre-vn.rss"}/>
        },
        {
            path: '/vff',
            element: <Home url={"https://www.bongda.com.vn/vff.rss"}/>
        },
        {
            path: '/tin-khac-vn',
            element: <Home url={"https://www.bongda.com.vn/tin-khac-vn.rss"}/>
        },
        {
            path: '/bong-da-nu',
            element: <Home url={"https://www.bongda.com.vn/bong-da-nu.rss"}/>
        },
        // bong da anh
        {
            path: '/premier-league',
            element: <Home url={"https://www.bongda.com.vn/premier-league.rss"}/>
        },
        {
            path: '/fa-cup',
            element: <Home url={"https://www.bongda.com.vn/fa-cup.rss"}/>
        },
        {
            path: '/efl',
            element: <Home url={"https://www.bongda.com.vn/efl-cup.rss"}/>
        },
        {
            path: '/tin-khac',
            element: <Home url={"https://www.bongda.com.vn/tin-khac.rss"}/>
        },
        {
            path: '/champions-league',
                element: <Home url={"https://www.bongda.com.vn/champions-league.rss"}/>
        },
        {
            path: '/search',
            element: <Detail/>
        },
    ]
}]);