import Aplayer from "aplayer";
import 'aplayer/dist/APlayer.min.css'
import { useEffect } from "react";

export default function MusicPlayer() {
    const options={
        mutex:true,
        order:"random",
        mini:false,
        lrcType:3,
        audio:[
            {
                name:'After Rain',
                artist:"aimer",
                url:"/after rain/3-After Rain live in soleil _ver.aac",
                cover:"logo.png",
                lrc:"/after rain/After Rain(soleil et pluie ver.) .lrc"

            },
            {
                name:"告白之夜",
                artist:"AYASA",
                url:"/告白之夜/告白の夜 (告白之夜) - Ayasa绚沙.mp3",
                cover:"logo.png",
                lrc:"/告白之夜/告白之夜-ALisa-歌词.lrc"
            },
            {
                name:"終わらない冒険",
                artist:"Lisa",
                url:"/无尽的冒险/終わらない冒険 (无尽的冒险) - LiSA.mp3",
                cover:"logo.png",
                lrc:"/无尽的冒险/終わらない冒険 - LiSA.lrc"

            }
        ]
    }

    useEffect(()=>{
    const aplayer=new Aplayer(options
    )
    console.log("1")
    },[])
    return (
        <div className="aplayer w-1/3">
        </div>
    )
}