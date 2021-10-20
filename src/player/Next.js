import React from 'react'
import "../App.css";
import {useState} from 'react';
import {FaAngleLeft,FaAngleRight  } from "react-icons/fa";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {Link} from "react-router-dom";


const Next = () => {
    const [song,setSong] = useState(
        [{
          title:"Shershah",
          src:"./musicplayer/Songone.MP3",
          artist:"Arjit",
          img:"./Images/Imageone.jpeg"
        },
        {
         title:"Two States",
         src:"./musicplayer/Songtwo.MP3",
         artist:"Arjit",
         img:"./Images/Imagetwo.jpeg"
     
        }]
      )
    return (
        <>
        <div className = "parentCard"> 
            <div className = "imageControl" >
            <img className="adjustimage" src="./Images/Imagetwo.jpeg"/>
            </div> 
            <div className = "titledivision" >
                  <h2 className = "Title"> {song[1].title} </h2>
                  <h4 className = "Title">{song[1].artist}</h4>
            </div> 
            <div className = "audiocontent">
           <ButtonGroup>
            <Button><Link to={'/Prev'}> <FaAngleLeft className="buttoncontent"/></Link></Button>
            <Button><Link to={'/Next'}><FaAngleRight className="buttoncontent"/></Link> </Button>
           </ButtonGroup> 
            <audio id="audioiconadjust" src="./musicplayer/Songtwo.MP3"
               preload="auto" controls autoplay>
            </audio>
            </div> 
            <div>
             <h3> <strong>Next Song  :-</strong>{song[0].title}</h3>
             </div> 
    
    
       </div>   
       </>
    )
}
export default Next ;