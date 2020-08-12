import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const KEY = "AIzaSyCxNxfwCqWR9p0EffNV8ZZecZbLeWpD8rM";


const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get("/youtube/v3/search", {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: KEY,
                safeSearch: 'none'
            }
        });
        setVideos(response.data.items);
    };

    //EQUIVALENT
    //return [videos, search];
    return { videos, search }; 

};

export default useVideos
