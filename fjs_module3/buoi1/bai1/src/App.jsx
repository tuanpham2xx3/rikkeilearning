import PricingCard from './components/PricingCard.jsx';

function App() {
  return (
    <main className="page">
      <section className="pricing">
        <div className="pricing__header">
          <p className="pricing__eyebrow">SaaS Pricing</p>
          <h1>Bảng giá dịch vụ</h1>
          <p>Chọn gói phù hợp với quy mô và nhu cầu sử dụng của doanh nghiệp.</p>
        </div>

        <div className="pricing__grid">
          <PricingCard name="Basic" price={99000} highlightColor="#2563eb" />
          <PricingCard name="Pro" price={199000} highlightColor="#16a34a" />
          <PricingCard name="Enterprise" price={null} highlightColor="#dc2626" />
        </div>
      </section>
    </main>
  );
}

export default App;
