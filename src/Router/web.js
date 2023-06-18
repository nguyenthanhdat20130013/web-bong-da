import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {Error} from "../component/Error";
import Home from "../component/Home";
import TransferNews from "../component/TransferNews";
import Detail from "../component/Detail";
import History from "../component/History";
import HomeType from "../component/HomeType";
import SearchResult from "../component/SearchResult";
export const webRouter=createBrowserRouter([{
    path:'/',
    element:<App/>,
    children:[{
        path:'/trang-chu/tin-chuyen-nhuong',
        element: <HomeType url="https://www.bongda.com.vn/tin-chuyen-nhuong.rss" />

    }, {
        path:'/',
        element: <Home url="https://www.bongda.com.vn/feed.rss"/>
    },
        {
            path:'/trang-chu',
            element: <Home url="https://www.bongda.com.vn/feed.rss"/>
        },
         {
            path: '/detail',
            element: <Detail/>,
        },
        {
            path: '/trang-chu/detail',
            element: <Detail/>,
        }, {
            path: '/trang-chu/vietnam',
            element: <HomeType url={"https://www.bongda.com.vn/viet-nam.rss"}/>
        }, {
            path: '/trang-chu/anh',
            element: <HomeType url={"https://www.bongda.com.vn/bong-da-anh.rss"}/>
        }, {
            path: '/trang-chu/y',
            element: <HomeType url={"https://www.bongda.com.vn/bong-da-y.rss"}/>
        }, {
            path: '/trang-chu/tindaxem',
            element: <History/>
        }, {
            path: '/v-league',
            element: <HomeType url={"https://www.bongda.com.vn/v-league.rss"}/>
        }, {
            path: '/la-liga',
            element: <HomeType url={"https://www.bongda.com.vn/la-liga.rss"}/>
        }, {
            path: '/premier-league',
            element: <HomeType url={"https://www.bongda.com.vn/premier-league.rss"}/>
        },
        // Bong da Viet Nam
        {
            path: '/doi-tuyen-quoc-gia',
            element: <HomeType url={"https://www.bongda.com.vn/doi-tuyen-quoc-gia.rss"}/>
        },
        {
            path: '/cup-quoc-gia-vn',
            element: <HomeType url={"https://www.bongda.com.vn/cup-quoc-gia-vn.rss"}/>
        },
        {
            path: '/hang-nhat-vn',
            element: <HomeType url={"https://www.bongda.com.vn/hang-nhat-vn.rss"}/>
        },
        {
            path: '/giai-tre-vn',
            element: <HomeType url={"https://www.bongda.com.vn/giai-tre-vn.rss"}/>
        },
        {
            path: '/vff',
            element: <HomeType url={"https://www.bongda.com.vn/vff.rss"}/>
        },
        {
            path: '/tin-khac-vn',
            element: <HomeType url={"https://www.bongda.com.vn/tin-khac-vn.rss"}/>
        },
        {
            path: '/bong-da-nu',
            element: <HomeType url={"https://www.bongda.com.vn/bong-da-nu.rss"}/>
        },
        // bong da anh
        {
            path: '/fa-cup',
            element: <HomeType url={"https://www.bongda.com.vn/fa-cup.rss"}/>
        },
        {
            path: '/efl',
            element: <HomeType url={"https://www.bongda.com.vn/efl-cup.rss"}/>
        },
        {
            path: '/tin-khac',
            element: <HomeType url={"https://www.bongda.com.vn/tin-khac.rss"}/>
        },
        {
            path: '/champions-league',
            element: <HomeType url={"https://www.bongda.com.vn/champions-league.rss"}/>
        },
        {
            path: '/search',
            element: <SearchResult/>
        },
        {
            path: '/bandoc',
            element: <HomeType url={"https://www.bongda.com.vn/goc-ban-doc.rss"}/>
        },
        // the loai
        {
            path: '/chau-au',
            element: <HomeType url={"https://www.bongda.com.vn/bong-da-chau-au.rss"}/>
        },
        {
            path: '/chau-a',
            element: <HomeType url={"https://www.bongda.com.vn/bong-da-chau-a.rss"}/>
        },
        {
            path: '/chau-my',
            element: <HomeType url={"https://www.bongda.com.vn/bong-da-chau-my.rss"}/>
        },
        {
            path: '/chau-phi',
            element: <HomeType url={"https://www.bongda.com.vn/bong-da-chau-phi.rss"}/>
        },
        {
            path: '/giao-huu',
            element: <HomeType url={"https://www.bongda.com.vn/giao-huu.rss"}/>
        }
    ]
}]);