import { useEffect } from "react";
import { useState } from "react"

export const VedioList = ()=>{
    const [vedioList, setVedioList] = useState(null);

    useEffect(()=>{

    },[])

    const fun = async()=>{
        const filePicker = await window.showOpenFilePicker({
        })
        let url = await filePicker[0].getFile();
        url = URL.createObjectURL(url);
        setVedioList(url);
        console.log(url);
    }
    return (
        <>
        <h1 onClick={fun}>
            hello
        </h1>
        <video controls src={vedioList}  width="1280px" height="720px">
        </video>
        </>
    )
}