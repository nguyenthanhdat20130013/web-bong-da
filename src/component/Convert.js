import React, {useEffect, useState} from 'react';
import Parser from 'rss-parser';

const formatPubDate = (pubDate) => {
    const date = new Date(pubDate);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };
    return date.toLocaleDateString('vi-VN', options);
};
;

export {formatPubDate};
