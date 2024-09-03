import propTypes from 'prop-types';

function Xbutton({ onNavClick }) {
  return (
    <div className="size-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="size-6 fill-white"
        onClick={() => onNavClick(false)}
      >
        <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
      </svg>
    </div>
  );
}

export default Xbutton;

Xbutton.propTypes = {
  onNavClick: propTypes.func,
};