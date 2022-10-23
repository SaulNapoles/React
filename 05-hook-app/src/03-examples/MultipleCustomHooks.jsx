import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';

const initialValue = 1;

export const MultipleCustomHooks = () => {
    
    

    const { counter, increment, decrement } = useCounter( initialValue )
    const { data, isLoading, hasError } = useFetch(`https://breakingbadapi.com/api/quotes/${ counter }`)

    const { quote_id, author, quote } = !!data && data[0];
    console.log(data);  



    return (
    <>
    
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
            // Operador ternario 
            (isLoading) 
                ? (
                    <LoadingQuote/>
                )
                : (
                    <Quote author={ author } quote={ quote }/>
                )
        }
        
        


        <button 
            className="btn btn-primary" 
            disabled={ isLoading }
            onClick={ () => increment() }>
            Next quote
        </button>

        <button 
            className="btn btn-primary" 
            disabled={ quote_id === 1 || isLoading }
            onClick={ () => decrement() }>
            Previus quote
        </button>

    </>
  )
}
