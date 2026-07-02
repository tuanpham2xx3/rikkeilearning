function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={onToggle}>
        <span>{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>

      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
}

export default FaqItem;
