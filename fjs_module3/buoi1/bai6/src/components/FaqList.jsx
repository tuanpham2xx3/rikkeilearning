import { useState } from 'react';
import FaqItem from './FaqItem.jsx';

const faqs = [
  {
    question: 'React là gì?',
    answer: 'React là thư viện JavaScript dùng để xây dựng giao diện người dùng.',
  },
  {
    question: 'Component là gì?',
    answer: 'Component là một phần giao diện có thể tái sử dụng trong ứng dụng.',
  },
  {
    question: 'Props dùng để làm gì?',
    answer: 'Props dùng để truyền dữ liệu từ component cha xuống component con.',
  },
  {
    question: 'State khác props như thế nào?',
    answer: 'State là dữ liệu nội bộ có thể thay đổi, còn props là dữ liệu được truyền từ bên ngoài.',
  },
  {
    question: 'Lifting State Up là gì?',
    answer: 'Lifting State Up là đưa state lên component cha để các component con dùng chung một nguồn dữ liệu.',
  },
];

function FaqList() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h1>Câu hỏi thường gặp</h1>

      {faqs.map((faq, index) => (
        <FaqItem
          key={faq.question}
          question={faq.question}
          answer={faq.answer}
          isOpen={activeIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </section>
  );
}

export default FaqList;
