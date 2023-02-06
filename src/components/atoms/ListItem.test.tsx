import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ListItem from './ListItem';

describe('ListItem component', () => {
  it('renders correctly', () => {
    const src = <img src="example.png" alt="example" />;
    const title = 'Example';
    const goTo = '/example';
    const { getByText, container } = render(
      <MemoryRouter>
        <ListItem src={src} title={title} goTo={goTo} />
      </MemoryRouter>
    );
    expect(container.innerHTML).toContain(title);
    expect(container.innerHTML).toContain(src.props.src);
    const link = getByText(title);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', goTo);
  });

  it('redirects to the correct page', () => {
    const src = <img src="example.png" alt="example" />;
    const title = 'Example';
    const goTo = '/example';
    const { getByText } = render(
      <MemoryRouter>
        <ListItem src={src} title={title} goTo={goTo} />
      </MemoryRouter>
    );
    const link = getByText(title);
    fireEvent.click(link);
    expect(window.location.pathname).toBe(goTo);
  });
});