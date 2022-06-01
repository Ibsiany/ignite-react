import {memo, useState} from 'react';
import dynamic from 'next/dynamic';
import {AddProductToWishlistProps} from './AddProductToWishlist';
import lodash from 'lodash';


// carregar uma informação somente quando precisar
const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
    return import('./AddProductToWishlist').then(mod => mod.AddProductToWishlist)
}, {
    loading: () => <span>Carregando</span>
})

interface IProductProps {
    product: {
        id: number,
        price: number,
        title: string,
    }
    onAddToWishlist: (id: number) => void 
}

function ProductItemComponent({product,onAddToWishlist}:IProductProps) {
    const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)

    return (
        <div>
            {product.title} - <strong>{product.price}</strong>

            <button onClick={() => setIsAddingToWishlist(true)}>Adicionar ao favoritos</button>
            
            
            {isAddingToWishlist && (
                <AddProductToWishlist 
                    onAddToWishlist={() => onAddToWishlist(product.id)}
                    onRequestClose={() => setIsAddingToWishlist(false)}
                />
            )}
            
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return lodash.isEqual(prevProps.product, nextProps.product)
})