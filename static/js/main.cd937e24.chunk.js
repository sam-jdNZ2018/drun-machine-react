(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(8),r=a.n(s),i=(a(15),a(2)),c=a(3),m=a(5),l=a(4),d=a(1),p=a(6),u=function(e){return o.a.createElement("button",{className:"drum-pad",id:e.desc,type:"button",onClick:function(t){return e.handler(t)},disabled:!e.power},e.letter,o.a.createElement("audio",{class:"clip",id:e.letter,src:e.url}))},h=["Q","W","E","A","S","D","Z","X","C"],k=["Heater 1","Heater 2","Heater 3","Heater 4","Clap","Open HH","Kick 'n Hat","Kick","Closed HH","Chord 1","Chord 2","Chord 3","Shaker","Open HH 2","Closed HH 2","Punchy Kick","Side Stick","Snare"],w=["https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3","https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3","https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3","https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3","https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3","https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3","https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3","https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3","https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3","https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3","https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3","https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3","https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3","https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3","https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3","https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3","https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3","https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"],b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).playClip=a.playClip.bind(Object(d.a)(a)),a.handleInput=a.handleInput.bind(Object(d.a)(a)),a.makeValidText=a.makeValidText.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleInput)}},{key:"componentDidUnmount",value:function(){document.removeEventListener("keydown",this.handleInput)}},{key:"handleInput",value:function(e){var t,a,n;this.props.power&&("click"==e.type?(t=document.getElementById(e.target.textContent),n=h.indexOf(e.target.textContent)):"keydown"==e.type&&(t=document.getElementById(String.fromCharCode(e.which)),n=h.indexOf(String.fromCharCode(e.which))),2==this.props.bank&&(n+=9),a=k[n],this.playClip(t,a))}},{key:"playClip",value:function(e,t){e.load(),e.volume=this.props.volume/100,e.play(),this.props.setDisplay(t)}},{key:"makeValidText",value:function(e){var t=k[e];return(t=t.replace("'","'")).replace(/\s/g,"_")}},{key:"render",value:function(){var e=this,t=[],a=0;2==this.props.bank&&(a=9);for(var n=0;n<9;n++)t.push(o.a.createElement(u,{power:this.props.power,desc:this.makeValidText(n+a),letter:h[n],url:w[n+a],handler:this.handleInput,onKeyDown:function(t){return e.handleInput(t)}}));return o.a.createElement("div",{id:"drum-grid"},t.slice(0,3),t.slice(3,6),t.slice(6,9))}}]),t}(o.a.Component),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).state={power:!0,bank:1,volume:50},a.volChange=a.volChange.bind(Object(d.a)(a)),a.bankChange=a.bankChange.bind(Object(d.a)(a)),a.powerChange=a.powerChange.bind(Object(d.a)(a)),a.setDisplay=a.setDisplay.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"volChange",value:function(e){this.setState({power:this.state.power,bank:this.state.bank,volume:e.target.value}),document.getElementById("vol-display").innerHTML="Volume: "+e.target.value}},{key:"bankChange",value:function(e){"bank1"==e&&2==this.state.bank?(this.setState({power:this.state.power,bank:1,volume:this.state.volume}),this.setDisplay("")):"bank2"==e&&1==this.state.bank&&this.setState({power:this.state.power,bank:2,volume:this.state.volume})}},{key:"powerChange",value:function(){this.setState({power:!this.state.power,bank:this.state.bank,volume:this.state.volume}),this.setDisplay("")}},{key:"setDisplay",value:function(e){document.getElementById("display").innerHTML=e}},{key:"render",value:function(){var e=this,t={backgroundColor:"white"},a={backgroundColor:"white"},n={color:"red"};return this.state.power&&(n={color:"green"},1==this.state.bank?t={backgroundColor:"green"}:a={backgroundColor:"green"}),o.a.createElement("div",{id:"drum-machine"},o.a.createElement("h1",null,"Drum Machine 2019"),o.a.createElement("div",{id:"drum-cont"},o.a.createElement(b,{power:this.state.power,bank:this.state.bank,volume:this.state.volume,setDisplay:this.setDisplay})),o.a.createElement("div",{id:"controls"},o.a.createElement("div",{id:"settings"},o.a.createElement("div",{id:"power-cont"},o.a.createElement("h2",{id:"power-title"},"Power"),o.a.createElement("div",{id:"power-toggle"},o.a.createElement("button",{id:"power",style:n,onClick:this.powerChange},o.a.createElement("i",{className:"fas fa-power-off"})))),o.a.createElement("div",{id:"bank-cont"},o.a.createElement("h2",{id:"bank-title"},"Bank"),o.a.createElement("div",{id:"bank-toggle"},o.a.createElement("button",{id:"bank1",style:t,onClick:function(t){return e.bankChange(t.target.id)},disabled:!this.state.power},"A"),o.a.createElement("button",{id:"bank2",style:a,onClick:function(t){return e.bankChange(t.target.id)},disabled:!this.state.power},"B"))),o.a.createElement("h2",{id:"vol-display"},"Volume: ",this.state.volume),o.a.createElement("input",{id:"vol-slider",type:"range",min:"0",max:"100",step:"1",defaultValue:this.state.volume,onInput:this.volChange,disabled:!this.state.power})),o.a.createElement("p",{id:"display"})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(v,null),document.getElementById("main")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.cd937e24.chunk.js.map