class FontChooser extends React.Component {

    constructor(props) {
		super(props);
		this.state = { is_hidden: true };
    }

    click_handle() {
    	console.log('click_handle called');
    	if (this.state.is_hidden) {
			this.setState({is_hidden: false});
		}
    	else {
			this.setState({is_hidden: true});
		}
	}

    render() {
		return(
			   <div>
			   <input type="checkbox" id="boldCheckbox" hidden={this.state.is_hidden}/>
			   <button id="decreaseButton" hidden={this.state.is_hidden}>-</button>
			   <span id="fontSizeSpan" hidden={this.state.is_hidden}>{this.props.size}</span>
			   <button id="increaseButton" hidden={this.state.is_hidden}>+</button>
			   <span id="textSpan" onClick={this.click_handle.bind(this)}>{this.props.text}</span>
			   </div>
		);
    }
}

