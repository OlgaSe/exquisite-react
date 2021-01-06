import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
const EMPTY_STATE = {
  adj1: '',
  noun1: '',
  adv: '',
  verb: '',
  adj2: '',
  noun2: ''
}

const [formFields, setFormFields] = useState(EMPTY_STATE);

  const onInputChange = (event) => {
    const newFormFieldValues = {
        ...formFields,
    }
    newFormFieldValues[event.target.name] = event.target.value;

    setFormFields(newFormFieldValues);
  }


  const onFormSubmit = (event) => {
    event.preventDefault();
    const sentence = 'The ' + formFields.adj1 + ' ' + formFields.noun1 + ' ' + formFields.adv + ' ' + formFields.verb + ' ' + formFields.adj2 + ' ' + formFields.noun2 + '.'
    props.sendSubmission(sentence);
    console.log(sentence);
    setFormFields(EMPTY_STATE);// clear the forms
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
            The 
            <input name="adj1"
            placeholder="adjective"
            type="text" 
            value={formFields.adj1}
            onChange={onInputChange}/>

            <input name="noun1"
            placeholder="noun"
            type="text" 
            value={formFields.noun1}
            onChange={onInputChange}/>

            <input name="adv"
            placeholder="adverb"
            type="text" 
            value={formFields.adv}
            onChange={onInputChange}/>

            <input name="verb"
            placeholder="verb"
            type="text" 
            value={formFields.verb}
            onChange={onInputChange}/>

            the
            <input name="adj2"
            placeholder="adjective"
            type="text" 
            value={formFields.adj2}
            onChange={onInputChange}/>

            <input name="noun2"
            placeholder="noun"
            type="text" 
            value={formFields.noun2}
            onChange={onInputChange}/>
            .

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
