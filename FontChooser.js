class FontChooser extends React.Component {

    constructor(props) {
		super(props);
		this.state = { is_hidden: true, is_bold: false, font_size: this.props.size,
			font_color: 'black', min: 1, max: 20 };
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

	checkbox_handle() {
    	console.log('checkbox_handle called');
    	if (this.state.is_bold) {
    		this.setState({is_bold: false});
		}
    	else {
    		this.setState({is_bold: true});
		}
	}

	increase_handle() {
    	console.log('increase_handle called');
		var new_size = parseInt(this.state.font_size) + 1
		console.log('new_size: ' + new_size);
		console.log('this.state.max: ' + this.state.max);
		if (new_size <= this.state.max) {
			console.log('increasing size...');
			this.setState({font_size: new_size, font_color: 'black'});
		}
		else {
			this.setState({font_color: 'red'})
		}
	}

	decrease_handle() {
    	console.log('decrease_handle called');
		var new_size = this.state.font_size - 1;
		if (new_size >= this.state.min) {
			console.log('decreasing size...');
			this.setState({font_size: new_size, font_color: 'black'});
		}
		else {
			this.setState({font_color: 'red'})
		}
	}

	reset_font_handle() {
    	console.log('reset_handle called');
    	console.log('this.props.size: ' + this.props.size);
    	// TODO: why doesn't { font_size: default_size } or { font_size: this.props.size } work?
    	var default_size = this.props.size;
    	this.setState({font_size: 16, font_color: 'black'});
	}

    render() {
    	var weight = this.state.is_bold ? 'bold' : 'normal';
    	console.log('this.state.font_size: ' + this.state.font_size);
		return(
			   <div>
			   <input type="checkbox" id="boldCheckbox" hidden={this.state.is_hidden}
					  onClick={this.checkbox_handle.bind(this)}/>
			   <button id="decreaseButton" hidden={this.state.is_hidden}
					   onClick={this.decrease_handle.bind(this)}>-</button>
			   <span style={{color: this.state.font_color}} id="fontSizeSpan" hidden={this.state.is_hidden}
					 onDoubleClick={this.reset_font_handle.bind(this)}>{this.state.font_size}</span>
			   <button id="increaseButton" hidden={this.state.is_hidden}
					   onClick={this.increase_handle.bind(this)}>+</button>
			   <span style={{fontWeight: weight, fontSize: this.state.font_size}} id="textSpan"
					 onClick={this.click_handle.bind(this)}>{this.props.text}</span>
			   </div>
		);
    }
}

