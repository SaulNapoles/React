// Importaciones de React primero

// Despues Importaciones de componentes o hooks
import { GifGridItem } from "./GifGridItem";
// Luego Importaciones de nuetro codigo
import { useFetchGifs } from "../hooks/useFetchGifs"; //primero los custom Hooks


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
        
        <h3>{ category }</h3>    
        {
            isLoading && (<h2>Cargando...</h2>) // And logico; si isLoaging es True, ejecuta la siguiente parte despues de &&
        }

        <div className="card-grid">
            {
                images.map(  ( image ) => (
                    <GifGridItem 
                        key={ image.id }
                        { ...image }
                    />
                ))
            }
        </div>

        </>
    )
}