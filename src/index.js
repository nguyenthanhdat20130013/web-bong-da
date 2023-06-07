import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./store/Store";
import {Route, RouterProvider, Routes} from "react-router-dom";
import {webRouter} from "./Router/web";
import Home from "./component/Home";
import TransferNews from "./component/TransferNews";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={webRouter}>
                <switch>
                    <Routes>
                        <Route path="/trang-chu">
                            <Home url="https://www.bongda.com.vn/bong-da-anh.rss"></Home>
                        </Route>

                        <Route path="/trang-chu/tin-chuyen-nhuong">
                            <TransferNews url = "https://www.bongda.com.vn/feed.rss"></TransferNews>
                        </Route>
                    </Routes>
                </switch>
            </RouterProvider>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
