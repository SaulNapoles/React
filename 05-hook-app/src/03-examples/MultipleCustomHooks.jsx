import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch'

const initialValue = 1;

export const MultipleCustomHooks = () => {
    
    

    const { counter, increment, decrement } = useCounter( initialValue )
    const { data, isLoading, hasError } = useFetch(`https://breakingbadapi.com/api/quotes/${ counter }`)

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

        <button 
            className="btn btn-primary" 
            onClick={ () => increment() }>
            Next quote
        </button>

        <button 
            className="btn btn-primary" 
            onClick={ () => decrement() }>
            Previus quote
        </button>

    </>
  )
}
