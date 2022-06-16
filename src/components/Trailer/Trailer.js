import React from 'react';
import YouTube from "react-youtube";

const Trailer = ({trailer}) => {
    return (
        <div className="trailer">
             {trailer?
                <YouTube
                    videoId={trailer.key}
                    className="videoPlayer"
                    opts={{width:'500'}}
                />
                :
                <YouTube

                    className="videoPlayer"
                />
            }
        </div>
    );
};


export {Trailer};
