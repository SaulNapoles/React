import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
  
    const [images, setImages] = useState( [] );
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async () =>{
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, []);

    return {
        // images: images,
        images, //En ES6 cuando se tiene una propiedad con el mismo nombre de la variable que se retorna se puede dejar asi
        isLoading
    }

}
