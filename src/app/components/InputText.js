import React from 'react'

export default class InputText extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        value : ''
    }
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  onChange (event) {
    this.setState({
      value: event.target.value
    })
  }
  onClick () {
    this.props.onClick(this.state.value)
    this.setState({
      value: ''
    })
  }
  render() {
    return (
      <div>
        <input onChange={this.onChange} disabled={!this.props.enabled} />
        <a style={this.props.enabled ? undefined : { color: 'red' }}
          onClick={this.onClick}>{this.props.text}</a>
      </div>
    )
  }
}
