import React from 'react';
import * as SketchActions from '../../actions/SketchActions';
import MidiInputs from '../../inputs/MidiInputs';

export default class InputSelectMidi extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			learning: false
		}

		if (this.props.modifierId) {
			this.state.mode = 'modifier';
		} else {
			this.state.mode = 'param';
		}

	}

	componentWillMount() {
		if (!this.props.inputId) {
			this.startLearning();
		}
	}

	startLearning() {

		MidiInputs.once('message', (id, val) => {

			if (this.state.mode == 'modifier') {
				SketchActions.updateSketchParamModifierInput(this.props.sketchId, this.props.paramKey, this.props.modifierId, 'midi', id);
			} else {
				SketchActions.updateSketchParamInput(this.props.sketchId, this.props.paramKey, 'midi', id);
			}
			
		});

		this.setState({
			learning: true
		})
	}


	render() {

		const paramKey = this.props.paramKey;

		let text, button;

		 if (!this.state.learning) {
         	text = this.props.inputId;
         	button = <button onClick={this.startLearning.bind(this)}>Edit</button>;
         } else {
         	text = 'Learning...';
         	button = '';
         }

		return (
		  
		  <div>
		  	{text} {button}
          </div>

		)
	}

}