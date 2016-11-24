import React from 'react';
import ReactDOM from 'react-dom';

class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : ""
        }
        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }
    onChange(event) {
        this.state.value = event.target.value
    }
    onClick() {
        this.props.onClick(this.state.value)
        this.state.value = this.textInput.value = ""
    }
    render() {
        return <div>
            <input onChange={this.onChange} disabled={!this.props.enabled} ref={ input => this.textInput = input}/>
            <a style={this.props.enabled ? undefined : { color: 'red' }}
               onClick={this.onClick}>{this.props.text}</a>
        </div>
    }
}


export default InputText
