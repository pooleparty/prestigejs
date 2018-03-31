import React from 'react';
import PropTypes from 'prop-types';

import FormFeedback from './FormFeedback';
import FormField from './FormField';

function Form(props) {
  const { fields, onChange, ...rest } = props;

  return (
    <form {...rest}>
      {fields.map(field => <FormField onChange={onChange} {...field} key={field.id} />)}
    </form>
  );
}

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string })),
  onChange: PropTypes.func,
};

Form.defaultProps = {
  fields: [],
  onChange: () => {},
};

Form.displayName = 'Form';

Form.Feedback = FormFeedback;

export default Form;
