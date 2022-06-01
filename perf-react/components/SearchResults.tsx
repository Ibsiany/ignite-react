import {useMemo} from 'react';
import {List} from 'react-virtualized'
import {ListRowRenderer} from 'react-virtualized'
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

    const rowRenderer: ListRowRenderer = ({index, key, style}) => {
        return (
            <div key={key} style={style}>
                <ProductItem 
                    product={results[index]}
                    onAddToWishlist={onAddToWishlist}
                />
            </div>
        );
    }

    const totalPrice = useMemo(() => {
        return results.reduce((total, product) => {
            return total + product.price
        }, 0)
    }, [results])

    return (
        <div>
            <h1>{totalPrice}</h1>

            <List 
                height={300} 
                rowHeight={30}
                width={900}
                overscanRowCount={5}
                rowCount={results.length}
                rowRenderer={rowRenderer}
            />
        </div>
    )
}