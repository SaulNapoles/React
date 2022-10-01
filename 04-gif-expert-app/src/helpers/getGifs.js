
export const getGifs = async(category) => { 
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Eh3n0oHHzMggEjZzVjaWMr72I4sjG3sq&q=${category}&limit=10`
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img  => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    // console.log(gifs);
    return gifs;
}