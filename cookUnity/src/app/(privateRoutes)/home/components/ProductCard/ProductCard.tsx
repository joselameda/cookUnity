import React from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';

export interface ProductCardProps {
  title: string;
  price: number;
  description: string;
  imgUrl: string;
}
export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  description,
  imgUrl,
}) => {
  return (
    <Card sx={styles.card} data-test-id="product-card">
      <CardContent>
        <Typography variant="body1" color="text.primary">
          {title}
        </Typography>
        <Typography variant="body1" color="text.primary">
          {`$${price}`}
        </Typography>
      </CardContent>
      <CardMedia component="img" height="194" image={imgUrl} alt={title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const styles = {
  card: { maxWidth: 345 },
};
