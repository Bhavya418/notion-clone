import {useState, useEffect} from "react";

export const useScrollTop =(thresold=10)=>{
    const [scrollTop, setScrollTop] = useState(false);
    useEffect(()=>{
        const handleScroll =()=>{
            if(window.scrollY>thresold){
                setScrollTop(true);
            }
            else{
                setScrollTop(false);
            }
        }
        window.addEventListener("scroll",handleScroll);
        return ()=>{
            window.removeEventListener("scroll",handleScroll);
        }
    }, [thresold]);
    return scrollTop;
    
}