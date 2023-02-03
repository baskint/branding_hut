import React from 'react';
import Button from '@mui/material/Button';

interface MainProps {
  name: string;
}

export const Main: React.FC<MainProps> = (props: MainProps) => {
  const name = props.name;
  return (
    <section className="phx-hero">
      <h1>{name} with TypeScript and React!</h1>

      <div>
      <Button variant="contained">Ready!</Button>
    </div>
    </section>
  );
};
