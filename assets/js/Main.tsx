import React from 'react';

interface MainProps {
  name: string;
}

export const Main: React.FC<MainProps> = (props: MainProps) => {
  const name = props.name;
  return (
    <section className="phx-hero">
      <h1>{name} with TypeScript and React!</h1>
      <p>We are ready to go!</p>
    </section>
  );
};
