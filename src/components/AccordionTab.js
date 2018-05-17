import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from './Icon';
import { generateUniqueId } from '../utils/componentUtils';

import './AccordionTab.scss';

class AccordionTab extends Component {
  static displayName = 'Accordion.Tab';

  static propTypes = {
    id: PropTypes.string,
    children: PropTypes.node.isRequired,
    header: PropTypes.string,
    disabled: PropTypes.bool,
    headerClassName: PropTypes.string,
    contentClassName: PropTypes.string,
  };

  static defaultProps = {
    id: null,
    header: null,
    disabled: false,
    headerClassName: null,
    contentClassName: null,
  };

  static contextTypes = {
    $ps_accordion: PropTypes.shape({
      onTabClick: PropTypes.func,
      multiple: PropTypes.bool,
      isSelected: PropTypes.func,
    }),
  };

  constructor(props, context) {
    super(props);

    this.accordion = context.$ps_accordion;
  }

  componentWillMount() {
    this.id = this.props.id || generateUniqueId();
  }

  renderHeader(selected) {
    const { headerClassName, disabled, header } = this.props;
    const tabHeaderClass = classNames(headerClassName, 'accordion-header', {
      'accordion-header--active': selected,
      'accordion-header--disabled': disabled,
    });
    const headerId = `${this.id}_header`;
    const ariaControls = `${this.id}_content`;
    const icon = selected ? 'chevron-down' : 'chevron-right';

    return (
      <div className={tabHeaderClass}>
        <a
          id={headerId}
          href={`#${ariaControls}`}
          className="accordion-header__link"
          role="tab"
          aria-controls={ariaControls}
          aria-expanded={selected}
          onClick={event => this.accordion.onTabClick(event, this)}
        >
          <Icon name={icon} size="xxs" />
          <div className="u-ml-10">{header}</div>
        </a>
      </div>
    );
  }

  renderContent(selected) {
    const { contentClassName, children } = this.props;
    const tabContentWrapperClass = classNames(contentClassName, 'accordion-content__wrapper', {
      'accordion-content__wrapper--collapsed': !selected,
      'accordion-content__wrapper--expanded': selected,
    });
    const contentId = `${this.id}_content`;

    return (
      <div id={contentId} className={tabContentWrapperClass}>
        <div className="accordion-content">{children}</div>
      </div>
    );
  }

  render() {
    const { header } = this.props;
    const selected = this.accordion.isSelected(this.id);
    const tabHeader = this.renderHeader(selected);
    const tabContent = this.renderContent(selected);

    return (
      <div key={header} className="accordion-tab">
        {tabHeader}
        {tabContent}
      </div>
    );
  }
}

export default AccordionTab;
