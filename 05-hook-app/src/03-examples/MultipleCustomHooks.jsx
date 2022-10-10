import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {
  
    const { data, isLoading, hasError } = useFetch('https://breakingbadapi.com/api/quotes/1')

    const { author, quote } = !!data && data[0];
    console.log(data);



    return (
    <>
    
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
            // Operador ternario 
            (isLoading) 
                ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                : (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1">{ author }</p>
                        <footer className="blockquote-footer">{ quote }</footer>
                    </blockquote>
                )
        }

        <button className="btn btn-primary">
            Next quote
        </button>


    </>
  )
}
