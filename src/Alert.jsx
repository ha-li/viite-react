import { useState } from 'react';

export default function Alert({ type, heading, children, closable, onClose }) {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null; // if the visible is false, return nothing from <Alert />
  }
  const handleCloseClick = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div>
      <div>
        <span role="img" aria-label={type === 'warning' ? 'Warning' : 'Information'}>
          {type === 'Warning' ? '⚠️' : 'ℹ️'}
        </span>
        <span>{heading}</span>
      </div>
      {closable && (
        <button aria-label="Close">
          <span role="img" aria-label="Close" onClick={handleCloseClick}>
            ❌
          </span>
        </button>
      )}
      <div>{children}</div>
    </div>
  );
}
