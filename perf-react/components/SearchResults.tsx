import {ProductItem} from './ProductItem'

interface ISearchResultsProps {
    results: Array<{
        id: number,
        price: number,
        title: string,
    }>
}

export function SearchResults({results}: ISearchResultsProps){
    return (
        <div>
            {results.map(product => {
                return (
                    <ProductItem product={product}/>
                )
            })}
        </div>
    )
}