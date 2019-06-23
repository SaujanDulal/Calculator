import React, { Component } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/input';
import { ClearButton } from './components/ClearButton';
import * as math from 'mathjs';

class App extends Component {
	state = {
		input: ''
	};

	addToInput = (val) => {
		this.setState({ input: this.state.input + val });
	};

	handleEqual = () => {
		this.setState({ input: math.evaluate(this.state.input) });
	};
	render() {
		return (
			<div className="App">
				<div className="calc-wrapper">
					<Input input={this.state.input} />
					<div className="row">
						<Button addToInput={this.addToInput}>7</Button>
						<Button addToInput={this.addToInput}>8</Button>
						<Button addToInput={this.addToInput}>9</Button>
						<Button addToInput={this.addToInput}>/</Button>
					</div>
					<div className="row">
						<Button addToInput={this.addToInput}>4</Button>
						<Button addToInput={this.addToInput}>5</Button>
						<Button addToInput={this.addToInput}>6</Button>
						<Button addToInput={this.addToInput}>*</Button>
					</div>
					<div className="row">
						<Button addToInput={this.addToInput}>1</Button>
						<Button addToInput={this.addToInput}>2</Button>
						<Button addToInput={this.addToInput}>3</Button>
						<Button addToInput={this.addToInput}>+</Button>
					</div>
					<div className="row">
						<Button addToInput={this.addToInput}>.</Button>
						<Button addToInput={this.addToInput}>0</Button>
						<Button addToInput={() => this.handleEqual()}>=</Button>
						<Button addToInput={this.addToInput}>-</Button>
					</div>
					<div className="row">
						<ClearButton handleClear={() => this.setState({ input: '' })}>Clear</ClearButton>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
