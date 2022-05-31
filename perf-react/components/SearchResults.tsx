import {useMemo} from 'react';
import {ProductItem} from './ProductItem'

interface ISearchResultsProps {
    results: Array<{
        id: number,
        price: number,
        title: string,
    }>
    onAddToWishlist: (id: number) => void 
}

export function SearchResults({results, onAddToWishlist}: ISearchResultsProps){
    const totalPrice = useMemo(() => {
        return results.reduce((total, product) => {
            return total + product.price
        }, 0)
    }, [results])

    return (
        <div>
            <h1>{totalPrice}</h1>

            {results.map(product => {
                return (
                    <ProductItem 
                        key={product.id}
                        product={product}
                        onAddToWishlist={onAddToWishlist}
                    />
                )
            })}
        </div>
    )
}