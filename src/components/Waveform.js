import React from "react";
import ReactDOM from "react-dom";
import WaveSurfer from "wavesurfer";

export default class Waveform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
    };
  }

  componentDidMount() {
    this.$el = ReactDOM.findDOMNode(this);
    this.$waveform = this.$el.querySelector(".wave");
    this.wavesurfer = WaveSurfer.create({
      container: this.$waveform,
      waveColor: "#343A46",
      progressColor: "#FFFFFF",
      height: 70,
      responsive: true,
      autoCenter: true,
      barWidth: 3,
      backend: "MediaElement",
    });
    this.wavesurfer.load(this.props.src);
  }

  componentWillUnmount() {}
  render() {
    return (
      <div className="waveform">
        <div className="wave"></div>
      </div>
    );
  }
}

Waveform.defaultProps = {
  src: "",
};
