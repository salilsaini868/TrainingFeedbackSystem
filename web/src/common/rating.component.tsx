import * as React from 'react';

class Rating extends React.Component {
  render() {
    return (
      <fieldset className="rating">
        <ol className="radio-list">
          <li><input type="radio" name="gender" /></li>
          <li><input type="radio" name="gender" /></li>
          <li><input type="radio" name="gender" /></li>
          <li><input type="radio" name="gender" /></li>
          <li><input type="radio" name="gender" /></li>
        </ol>
        <label className="full" htmlFor="star5" title="Awesome - 5 stars" />
        <label className="full" htmlFor="star4" title="Pretty good - 4 stars" />
        <label className="full" htmlFor="star3" title="Meh - 3 stars" />
        <label className="full" htmlFor="star2" title="Kinda bad - 2 stars" />
        <label className="full" htmlFor="star1" title="Sucks big time - 1 star" />
      </fieldset>
    );
  }
}

export default Rating;