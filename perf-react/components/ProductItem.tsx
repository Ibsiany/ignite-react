import {memo} from 'react';
interface IProductProps {
    product: {
        id: number,
        price: number,
        title: string,
    }
}

function ProductItemComponent({product}:IProductProps) {
    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
})