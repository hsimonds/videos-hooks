import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';


const App = () => {
    
    const [selectedVideo, setSelectedVideo] = useState(null);
    const {videos, search} = useVideos('react programming');

    //Anytime videos changes, we updated selected videos
    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search}/>
            <div className='ui grid'>
                <div className='ui row'>
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className='five wide column'>
                        <VideoList 
                        //THESE 2 LINES ARE EQUIVALENT, value being passed into function and passed out to setSelectedVideo are identical
                        //onVideoSelect={(video) => setSelectedVideo(video)} 
                        onVideoSelect={setSelectedVideo}
                        videos={videos}/>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default App;