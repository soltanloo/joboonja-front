import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bid } from '../actions/project_actions';
import { toast } from 'react-toastify';

export class BidForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bidAmount: '',
      okayToSubmit: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if(this.props.curr.project.budget >= event.target.value && event.target.value >= 0)
      this.setState({ bidAmount: event.target.value });
    else
      this.setState({ okayToSubmit: false }, () => toast.error('مبلغ پیشنهادی نمی‌تواند بیشتر از بودجه باشد'));
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.okayToSubmit) {
      this.props.bid(this.props.curr.project.id, this.state.bidAmount);
      this.setState({ bidAmount: '' });
      event.target.reset();
    } else {
      toast.error('مبلغ پیشنهادی بالاتر از بودجه است')
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={"form-inline"}>
        <div className={"form-row ml-3 mb-2"}>
            <input
              value={this.state.bidAmount}
              onChange={this.handleChange}
              type="number"
              className={"form-control d-inline"}
              id="bidAmount"
              placeholder="پیشنهاد خود را وارد کنید"
            />
            <span className={"d-inline"} id="bidAmountUnit">تومان</span>
        </div>
        <button type="submit" className={"btn submitBtn mb-2"}>ارسال</button>
      </form>
    )
  }
}

BidForm.propTypes = {
  curr: PropTypes.object.isRequired,
  bid: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  curr: state.currentProject
})

const mapDispatchToProps = {
  bid,
}

export default connect(mapStateToProps, mapDispatchToProps)(BidForm)
