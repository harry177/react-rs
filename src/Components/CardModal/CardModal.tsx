import React from 'react';
import './CardModal.css';

interface Props {
  active: boolean;
  setActive: (value: boolean) => void;
  children: JSX.Element | JSX.Element[];
}

export const CardModal = ({ active, setActive, children }: Props) => (
  <div
    className={active ? 'modal active' : 'modal'}
    onMouseDown={() => setActive(false)}
    role="button"
    tabIndex={0}
  >
    <div
      className={active ? 'modal__inner active' : 'modal__inner'}
      onMouseDown={(item) => item.stopPropagation()}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  </div>
);
