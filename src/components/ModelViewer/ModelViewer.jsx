import React, { useEffect, useState } from 'react';
import './ModelViewer.scss';
import { useViewer } from './ModelViewerConfig.js';
import { CirclePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ColorLensIcon from '@material-ui/icons/ColorLens';

const ModelViewer = ({ file, setFile }) => {
	const [ binds, { load, userSettings, clearScene } ] = useViewer();
	const [ showColorPicker, setVisibility ] = useState(false);
	const [ selectedColor, setColor ] = useState('#ffffff');

	useEffect(
		() => {
			load(file);
		},
		[ file ]
	);

	const removeModelFromState = () => {
		setFile(null);
	};

    const handleColorButton = () => {
        setVisibility(!showColorPicker);
    };
    
	const handleColorChange = (color) => {
		const { hex } = color;
		setColor(hex);
		userSettings(hex);
	};

	return (
		<div className="modelViewerContainer">
			<div className="modelOptions">
				<Button
					className="clearButton"
					startIcon={<ColorLensIcon />}
					variant="outlined"
					size="medium"
					color="primary"
					onClick={handleColorButton}
				>
					Elegir un color
				</Button>
				<Button
					className="clearButton"
					startIcon={<DeleteIcon />}
					variant="outlined"
					size="medium"
					color="secondary"
					onClick={(clearScene, removeModelFromState)}
				>
					Borrar
				</Button>
			</div>
			<div className="colorPickerContainer">
				{showColorPicker ? (
					<CirclePicker className="colorPicker" color={selectedColor} onChange={handleColorChange} />
				) : null}
			</div>

			<canvas className="modelCanvas" ref={binds} />
		</div>
	);
};

export default ModelViewer;
