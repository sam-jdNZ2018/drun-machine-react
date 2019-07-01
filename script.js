const render = ReactDOM;
const LETTERS = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
const TEXT = [
"Heater 1",
"Heater 2",
"Heater 3",
"Heater 4",
"Clap",
"Open HH",
"Kick 'n Hat",
"Kick",
"Closed HH",
"Chord 1",
"Chord 2",
"Chord 3",
"Shaker",
"Open HH 2",
"Closed HH 2",
"Punchy Kick",
"Side Stick",
"Snare"];

const SOUNDS = [
"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"];


const Pad = props => {
  return (
    React.createElement("button", {
      className: "drum-pad",
      id: props.desc,
      type: "button",
      onClick: e => props.handler(e), disabled: !props.power },

    props.letter,
    React.createElement("audio", { class: "clip", id: props.letter, src: props.url })));


};

class PadGroup extends React.Component {
  constructor(props) {
    super(props);
    this.playClip = this.playClip.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.makeValidText = this.makeValidText.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleInput);
  }

  componentDidUnmount() {
    document.removeEventListener("keydown", this.handleInput);
  }

  //Determine, if the machine has power, whether the input came from a button or key press and
  //pass relevant data on what clip should be played and what text to display to playClip
  handleInput(e) {
    if (this.props.power) {
      let clip;
      let text;
      let index;
      if (e.type == "click") {
        clip = document.getElementById(e.target.textContent);
        index = LETTERS.indexOf(e.target.textContent);
      } else if (e.type == "keydown") {
        clip = document.getElementById(String.fromCharCode(e.which));
        index = LETTERS.indexOf(String.fromCharCode(e.which));
      }
      if (this.props.bank == 2) {
        index = index + 9;
      }
      text = TEXT[index];
      this.playClip(clip, text);
    }
  }

  //Play the clip associated with the button that was pressed and
  //display that clip's description in the display <input>
  playClip(clip, text) {
    clip.load();
    clip.volume = this.props.volume / 100;
    clip.play();
    this.props.setDisplay(text);
  }

  //Convert a string from the TEXT array at the index provided into a valid jQuery selector
  makeValidText(index) {
    let s = TEXT[index];
    s = s.replace("'", "\'");
    return s.replace(/\s/g, "\_");
  }

  render() {
    let pads = [];
    let j = 0;
    if (this.props.bank == 2) {j = 9;}
    for (let i = 0; i < 9; i++) {
      pads.push(
      React.createElement(Pad, { power: this.props.power,
        desc: this.makeValidText(i + j),
        letter: LETTERS[i],
        url: SOUNDS[i + j],
        handler: this.handleInput,
        onKeyDown: e => handleInput(e) }));


    }

    return (
      React.createElement("div", { id: "drum-grid" },
      pads.slice(0, 3),
      pads.slice(3, 6),
      pads.slice(6, 9)));


  }}


class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = { power: true, bank: 1, volume: 50 };
    this.volChange = this.volChange.bind(this);
    this.bankChange = this.bankChange.bind(this);
    this.powerChange = this.powerChange.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
  }

  //Change the volume to the current setting of the volume slider
  volChange(e) {
    this.setState({
      power: this.state.power,
      bank: this.state.bank,
      volume: e.target.value });

    document.getElementById("vol-display").innerHTML =
    "Volume: " + e.target.value;
  }

  //Change the bank to the opposite setting of what it currently is. This changes the sound clips to the alternate set
  bankChange(id) {
    if (id == "bank1" && this.state.bank == 2) {
      this.setState({
        power: this.state.power,
        bank: 1,
        volume: this.state.volume });

      this.setDisplay("");
    } else
    if (id == "bank2" && this.state.bank == 1) {
      this.setState({
        power: this.state.power,
        bank: 2,
        volume: this.state.volume });

    }

  }

  //Either turns the pads on or off, depending on their current state
  powerChange() {
    this.setState({
      power: !this.state.power,
      bank: this.state.bank,
      volume: this.state.volume });

    this.setDisplay("");
  }

  //Set the text displayed by the display <input> text element 
  setDisplay(text) {
    document.getElementById("display").innerHTML = text;
  }

  render() {
    let bank1Col = { backgroundColor: "white" };
    let bank2Col = { backgroundColor: "white" };
    let powerCol = { color: "red" };
    if (this.state.power) {
      powerCol = { color: "green" };
      if (this.state.bank == 1) {
        bank1Col = { backgroundColor: "green" };
      } else
      {
        bank2Col = { backgroundColor: "green" };
      }
    }
    return (
      React.createElement("div", { id: "drum-machine" },
      React.createElement("h1", null, "Drum Machine 2019"),
      React.createElement("div", { id: "drum-cont" },
      React.createElement(PadGroup, { power: this.state.power, bank: this.state.bank, volume: this.state.volume, setDisplay: this.setDisplay })),

      React.createElement("div", { id: "controls" },
      React.createElement("div", { id: "settings" },
      React.createElement("div", { id: "power-cont" },
      React.createElement("h2", { id: "power-title" }, "Power"),
      React.createElement("div", { id: "power-toggle" },
      React.createElement("button", { id: "power", style: powerCol, onClick: this.powerChange },
      React.createElement("i", { className: "fas fa-power-off" })))),



      React.createElement("div", { id: "bank-cont" },
      React.createElement("h2", { id: "bank-title" }, "Bank"),
      React.createElement("div", { id: "bank-toggle" },
      React.createElement("button", { id: "bank1", style: bank1Col, onClick: e => this.bankChange(e.target.id), disabled: !this.state.power }, "A"),
      React.createElement("button", { id: "bank2", style: bank2Col, onClick: e => this.bankChange(e.target.id), disabled: !this.state.power }, "B"))),


      React.createElement("h2", { id: "vol-display" }, "Volume: ", this.state.volume),
      React.createElement("input", { id: "vol-slider", type: "range", min: "0", max: "100", step: "1", defaultValue: this.state.volume, onInput: this.volChange, disabled: !this.state.power })),

      React.createElement("p", { id: "display" }))));



  }}


ReactDOM.render(React.createElement(DrumMachine, null), document.getElementById("main"));