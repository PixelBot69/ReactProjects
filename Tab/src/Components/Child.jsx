import { useState } from "react";

export default function Tab({ tabContent = [], onChange }) {
  const [index, setIndex] = useState(0);

  function handleClick(index) {
    setIndex(index);
    onChange(index);
  }

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        {tabContent.map((item, idx) => (
          <span key={item.label} style={{ marginRight: '10px', cursor: 'pointer' }} onClick={() => handleClick(idx)}>
            {item.label}
          </span>
        ))}
      </div>
      <div>{tabContent[index]?.content}</div>
    </div>
  );
}
