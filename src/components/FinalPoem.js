import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const sentences = props.submissions.map((sentence) => <div>{sentence}</div>)

  const revealButton = (
    <div className="FinalPoem__reveal-btn-container">
        <input onClick={props.revealPoem} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
  );

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {props.isSubmitted ? sentences : ''}
      </section>

      {!props.isSubmitted ? revealButton : ''}
    
    </div>
  );
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
