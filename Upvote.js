import React from 'react';
import upvoteBas from './images/icon/upvote.svg';
import upvoteHaut from './images/icon/upvote2.svg';
import upvote from './Home'
import { useState } from 'react';
import { useEffect } from 'react';


function Upvote() {
    

    const [count, setCount] = useState(0);


    return (
      <div>
        <div className="bg-white-0 text-black text-xl font-bold flex w-max py-1 rounded-lg">
            {/* if(!isUpvoted){ */}
                {<button onClick={() => setCount(upvote + 1)} className="pl-2">
                <img src={upvoteHaut} className=""></img>
                </button>
            }
          <span className="px-2">upvote</span>
          {<button onClick={() => setCount(count - 1)} className="pr-2">
            <img src={upvoteBas} className=""></img>
          </button>}
        </div>
      </div>
    );
  }


export default Upvote;