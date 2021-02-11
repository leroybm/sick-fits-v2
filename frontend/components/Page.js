import PropTypes from 'prop-types';

export default function Page({ children }) {
  return (
    <main>
      <h1>Header</h1>
      {children}
    </main>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
