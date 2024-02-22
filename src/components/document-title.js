import { useEffect } from "react";

export default function useDocumentTitle(text, defaultvalue){


    useEffect(()=> {
        document.title = (!text)? defaultvalue:text;
    });
}