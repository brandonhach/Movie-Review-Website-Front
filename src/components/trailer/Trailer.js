import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Trailer.css";

import React from "react";

const Trailer = () => {
	let param = useParams();
	let key = param.ytTrailerId;

	return <div className="react-player-container">Trailer</div>;
};

export default Trailer;
