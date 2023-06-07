import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {Error} from "../component/Error";
import Home from "../component/Home";
import TransferNews from "../component/TransferNews";
import Detail from "../component/Detail";
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
        }

    ]
}]);