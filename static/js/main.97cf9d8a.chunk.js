(window["webpackJsonp04-tictactoe-boyan"]=window["webpackJsonp04-tictactoe-boyan"]||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(7),i=r.n(s);r(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=r(1),l=r(2),u=r(4),o=r(3),h=r(5),m=r(8);var d=function(e){return a.a.createElement("button",{className:"square",onClick:e.handleClick}," ",e.value)},v=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"renderSquare",value:function(e){var t=this;return a.a.createElement(d,{value:this.props.squareArr[e],handleClick:function(){return t.props.handleClick(e)}})}},{key:"render",value:function(){return a.a.createElement("div",{className:"main"},a.a.createElement("div",{className:"row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),a.a.createElement("div",{className:"row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),a.a.createElement("div",{className:"row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(n.Component);var f=function(e){var t,r=e.setWinner,n=e.nextPlayer;return t=r?a.a.createElement("h3",{className:"winner"}," The Winner is: ",r," !"):e.squareArr.every(function(e){return e})?a.a.createElement("h3",{className:"winner"}," No winner!"):a.a.createElement("h3",{className:"status"}," Next player is: ",n?"X":"O"),a.a.createElement("div",null,t,a.a.createElement("button",{className:"restart",onClick:e.restartGame}," Restart game "))},y=function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(u.a)(this,Object(o.a)(t).call(this,e))).checkWinner=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(m.a)(t[n],3),s=a[0],i=a[1],c=a[2];if(e[s]&&e[s]===e[i]&&e[s]===e[c])return r.setState({setWinner:e[s]}),e[s]}return null},r.restartGame=function(){r.setState({squareArr:Array(9).fill(null),nextPlayer:!0,setWinner:null})},r.state={squareArr:Array(9).fill(null),nextPlayer:!0,setWinner:null},r}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){var t=this.state.squareArr;t[e]||this.state.setWinner||(t[e]=this.state.nextPlayer?"X":"O",this.setState({squareArr:t,nextPlayer:!this.state.nextPlayer}),this.checkWinner(t))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"game"},a.a.createElement(v,{handleClick:function(t){return e.handleClick(t)},nextPlayer:this.state.nextPlayer,squareArr:this.state.squareArr}),a.a.createElement(f,{setWinner:this.state.setWinner,nextPlayer:this.state.nextPlayer,squareArr:this.state.squareArr,restartGame:this.restartGame}))}}]),t}(n.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(y,null)}}]),t}(n.Component);r(15);i.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,r){e.exports=r(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.97cf9d8a.chunk.js.map