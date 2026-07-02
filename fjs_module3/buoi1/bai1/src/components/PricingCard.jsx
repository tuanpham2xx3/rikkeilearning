function PricingCard({ name, price, highlightColor }) {
  const displayPrice = price ? `${price.toLocaleString('vi-VN')} VND` : 'Liên hệ';

  return (
    <article className="pricing-card" style={{ borderColor: highlightColor }}>
      <h2>{name}</h2>
      <p className="pricing-card__price" style={{ color: highlightColor }}>
        {displayPrice}
      </p>
      <button className="pricing-card__button" style={{ backgroundColor: highlightColor }}>
        Chọn gói
      </button>
    </article>
  );
}

export default PricingCard;
