'use client';

import React, { ReactNode } from 'react';
import Button from '@mui/material/Button';

interface CookUnityButtonProps {
  onClick: () => void;
  stylesOverwrite?: React.CSSProperties;
  startIcon?: ReactNode;
  label: string;
  orderNumber?: number | null;
  dataTestId?: string;
}
export const CookUnityButton: React.FC<CookUnityButtonProps> = ({
  onClick,
  startIcon,
  label,
  orderNumber,
  dataTestId,
}) => {
  return (
    <Button
      onClick={onClick}
      variant="text"
      size="large"
      className="cta"
      color="primary"
      data-test-id={dataTestId}
      sx={styles.button}
      startIcon={startIcon}>
      {orderNumber && (
        <span data-test-id={'cart-counter'}>{`${orderNumber}`}</span>
      )}
      <span>{label}</span>
    </Button>
  );
};

const styles = {
  button: {
    backgroundColor: 'gold',
    color: 'black',
    padding: '5px 10px',
    borderRadius: '5px',
    height: 'min-content',
  },
};
