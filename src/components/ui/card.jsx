// src/components/ui/card.jsx
export const Card = ({ children, className }) => (
  <div className={`bg-white rounded-xl p-4 shadow ${className || ""}`}>
    {children}
  </div>
);

