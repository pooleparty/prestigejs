import React from 'react';
import { storiesOf } from '@storybook/react';
import kebabCase from 'lodash/kebabCase';
import smoothscroll from 'smoothscroll-polyfill';
import stickyfill from 'stickyfilljs';
import Navbar from '../src/components/Navbar';
import Nav from '../src/components/Nav';

import './styles.scss';
import './navbar.scss';

smoothscroll.polyfill();
stickyfill.add(document.querySelectorAll('.navigation--sticky'));

// The following polyfills need to be included in order to support these behaviors
// in older browsers.
// [smoothscroll](https://github.com/iamdustan/smoothscroll)
// [stickyfill](https://github.com/wilddeer/stickyfill)

const links = [
  { label: 'Section 1', mobile: false },
  { label: 'Section 2', mobile: true },
  { label: 'Section 3', mobile: true },
  { label: 'Section 4', mobile: false },
  { label: 'Section 5', mobile: true },
].map(link => ({ ...link, id: kebabCase(link.label) }));

const handleClick = id => (event) => {
  event.preventDefault();
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  window.history.replaceState(null, null, `#${id}`);
};

function renderNav() {
  return (
    <Nav>
      {links.map(link => (
        <Nav.Item key={link.id}>
          <Nav.Link
            className={!link.mobile ? 'u-hidden-sm' : ''}
            href={`#${link.id}`}
            onClick={handleClick(link.id)}
            key={link.id}
          >
            {link.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

storiesOf('Navbar', module)
  .add('light', () => (
    <div>
      <Navbar color="light">{renderNav()}</Navbar>
      <div>
        {links.map(link => (
          <section className="app-section" id={link.id} key={link.id}>
            <h1>{link.label}</h1>
          </section>
        ))}
      </div>
    </div>
  ))
  .add('dark', () => (
    <div>
      <Navbar color="dark">{renderNav()}</Navbar>
      <div>
        {links.map(link => (
          <section className="app-section" id={link.id} key={link.id}>
            <h1>{link.label}</h1>
          </section>
        ))}
      </div>
    </div>
  ))
  .add('sticky', () => (
    <div>
      <Navbar color="light" sticky>
        {renderNav()}
      </Navbar>
      <div>
        {links.map(link => (
          <section className="app-section" id={link.id} key={link.id}>
            <h1>{link.label}</h1>
          </section>
        ))}
      </div>
    </div>
  ));
