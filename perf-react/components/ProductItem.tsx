interface IProductProps {
    product: {
        id: number,
        price: number,
        title: string,
    }
}

export function ProductItem({product}:IProductProps) {
    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
        </div>
    )
}