import React, {useState} from 'react';
import './Video.styles.scss';

export default function Video() {
    const [youtubeID] = useState('iI2D4LbV6Os')
    return(
        <div className="container">
            <div className="video-container">
                <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                
                src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
                </iframe>
            </div>
            <div className="our-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget tortor posuere felis lacinia vehicula quis sed urna. Etiam eu magna lorem. Ut dignissim justo non justo finibus, nec elementum ipsum scelerisque. Vivamus rutrum id orci placerat iaculis. Maecenas egestas arcu commodo, commodo ex non, ultrices tellus. Praesent gravida elit neque, eu feugiat mauris faucibus eu. Fusce nec rhoncus lacus, id sodales elit. Nam in augue magna. Maecenas sagittis tincidunt venenatis. Donec quam libero, commodo in porta ut, condimentum sed ante. Nullam id ex aliquet, condimentum lorem in, fermentum massa. Fusce aliquet turpis volutpat aliquam mattis. Proin mollis augue at. Praesent gravida elit neque, eu feugiat mauris faucibus eu. Fusce nec rhoncus lacus, id sodales elit. Nam in augue magna. Maecenas sagittis tincidunt venenatis.</p>
            </div>
        </div>

    )
    
}




