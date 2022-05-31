import {memo} from 'react';
interface IProductProps {
    product: {
        id: number,
        price: number,
        title: string,
    }
    onAddToWishlist: (id: number) => void 
}

function ProductItemComponent({product,onAddToWishlist}:IProductProps) {
    return (
        <div>
            {product.title} - <strong>{product.price}</strong>

            <button type="button" onClick={() => onAddToWishlist(product.id)}>Add too wishlist</button>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
})