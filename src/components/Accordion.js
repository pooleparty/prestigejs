import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { generateUniqueId } from '../utils/componentUtils';
import AccordionTab from './AccordionTab';

import './Accordion.scss';

class Accordion extends Component {
  static displayName = 'Accordion';

  static defaultProps = {
    id: null,
    activeId: null,
    className: null,
    multiple: false,
    onTabOpen: null,
    onTabClose: null,
  };

  static propTypes = {
    id: PropTypes.string,
    children: PropTypes.node,
    activeId: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    className: PropTypes.string,
    multiple: PropTypes.bool,
    onTabOpen: PropTypes.func,
    onTabClose: PropTypes.func,
  };

  static childContextTypes = {
    $ps_accordion: PropTypes.shape({
      onTabClick: PropTypes.func,
      multiple: PropTypes.bool,
      isSelected: PropTypes.func,
    }),
  };

  state = {
    activeId: this.props.activeId,
  };

  getChildContext() {
    return {
      $ps_accordion: {
        onTabClick: this.onTabClick,
        multiple: this.props.multiple,
        isSelected: this.isSelected,
      },
    };
  }

  componentWillMount() {
    this.id = this.props.id || generateUniqueId();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeId != null) {
      this.setState({
        activeId: nextProps.activeId,
      });
    }
  }

  onTabClick = (event, tab) => {
    if (!tab.props.disabled) {
      const selected = this.isSelected(tab.id);
      this.expandingTabIndex = selected ? null : tab.id;

      if (this.props.multiple) {
        let indexes = this.state.activeId || [];
        if (selected) {
          indexes = indexes.filter(index => index !== tab.id);
        } else {
          indexes = [...indexes, tab.id];
        }

        this.setState({ activeId: indexes });
      } else if (selected) {
        this.setState({ activeId: null });
      } else {
        this.setState({ activeId: tab.id });
      }

      const callback = selected ? this.props.onTabOpen : this.props.onTabClose;
      if (callback) {
        callback({ originalEvent: event, index: tab.id });
      }
    }

    event.preventDefault();
  };

  isSelected = i =>
    (this.props.multiple
      ? this.state.activeId && this.state.activeId.indexOf(i) !== -1
      : this.state.activeId === i);

  render() {
    // const tabs = React.Children.map(this.props.children, (tab, index) =>
    //   this.renderTab(tab, index),
    // );
    const className = classNames('accordion', this.props.className);

    return (
      <div id={this.id} className={className}>
        {this.props.children}
      </div>
    );
  }
}

Accordion.Tab = AccordionTab;

export default Accordion;
