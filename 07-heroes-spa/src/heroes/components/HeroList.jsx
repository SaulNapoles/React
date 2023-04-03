
import { HeroCard } from './';
import { getHeroesByPliblisher } from '../helpers'
import { useMemo } from 'react';


export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPliblisher( publisher ), [ publisher ]) ;
  
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
           heroes.map( hero => (
                <HeroCard 
                  key={ hero.id } 
                  { ...hero }
                />
          ))          
        }
    </div>
  )
}
