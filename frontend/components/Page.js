import PropTypes from 'prop-types';

import Header from './Header';

export default function Page({ children }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
