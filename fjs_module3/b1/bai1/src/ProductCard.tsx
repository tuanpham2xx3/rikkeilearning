type ProductCardProps = {
  title: string;
  price: number;
  inStock: boolean;
};

export default function ProductCard({
  title,
  price,
  inStock,
}: ProductCardProps) {
  return (
    <>
      <div>
        <h3>{title}</h3>
        <p>{price}</p>
        <p> { inStock ? "Còn hàng" : "Hết hàng" }</p>
      </div>
    </>
  );
}
