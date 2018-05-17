import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormFeedback from './FormFeedback';
import FormField from './FormField';

class Form extends Component {
  static displayName = 'Form';

  static Feedback = FormFeedback;

  static propTypes = {
    fields: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string })),
    onChange: PropTypes.func,
  };

  static defaultProps = {
    fields: [],
    onChange: () => {},
  };

  render() {
    const { fields, onChange, ...rest } = this.props;

    return (
      <form {...rest}>
        {fields.map(field => <FormField onChange={onChange} {...field} key={field.id} />)}
      </form>
    );
  }
}

export default Form;
