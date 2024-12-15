window.addEventListener("load", function(){ // wait for the window to load before trying to access DOM
document.getElementById("chattable").contentWindow.postMessage(`
@font-face {
font-family: "Mono";
src: url('https://coruscating-phoenix-ae894a.netlify.app/fonts/DotGothic16-Regular.ttf');
}
@keyframes hovering {
from {
 margin-bottom: 3px;
}
to {
 margin-bottom: 0;
}
}
body {
  display: flex
}
#main {
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
}
.allMessages {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 0.5rem;
background: white;
border: 1px dotted;
font-family: courier, times;
font-size: 11pt;
border-radius: 0 3px 3px 3px;
margin: 5px;
line-height: 12pt;
position: relative;
color: #222;
width: auto;
padding: 10px;
}
}
br {
height: 6pt;
}
h1 {
margin: auto;
}
.allMessages:hover:after {
content: ' ';
position: absolute;
left: 0;
top: 0;
height: 100%;
width: 100%;
border-radius: inherit;
background-color: rgba(0, 0, 0, 0.05);
pointer-events: none;
}
.sent {
}
.recieved {
}
#background {
  height: unset !important;
scrollbar-color: #CCC transparent;
scrollbar-width: thin;
}
.msgBody {
cursor: text;
}
#input {
color: #333;
background-color: white;
border: none;
font-family: courier, times;
font-size: 10pt;
padding: 5px;
width: calc(100% - 10px);
border-radius: 0;
margin: 0;
}
#input::placeholder {
font-family: courier, times;
}
#input:empty::before {
content: "Send note [ENTER]";
}
#input:focus {
outline: dotted 1px #000;
}
a {
font-family: inherit;
}
#timestamp {
color: #555;
font-size: 10pt;
}
.senderInfo {
text-decoration: underline;
text-decoration-color: #000;
font-family: courier, times;
font-style: italic;
}
.senderInfo * {
display: inline-block;
text-decoration: none;
}
.badge {
display: none;
}
.senderInfo:has(.owner), .senderInfo:has(.mod) {
font-weight: bold;
text-decoration-color: #FF0000;
text-decoration-style: wavy;
}
.senderInfo:has(.beta) {
font-weight: bold;
text-decoration-color: #0000FF;
}
.senderInfo:after {
display: inline-block;
content: " wrote,";

font-style: italic;

margin-left: 0.5em;
text-decoration: none !important;
}
#top_banner {
display: none;
}
#settings {
filter: invert(50%);
opacity: 0.75;
}
#settings:hover {
filter: invert(10%);
}
#textInput {
border: 1px dotted;
}
blockquote {
font-style: italic;
}
#loadMore {
font-family: Verdana;
}
.pinned > .allMessages:hover::before {
display: none;
}
.pinned:after {
display: inline-block;
position: absolute;
right: 2px;
top: 2px;
content: "";
}
#emojiTray {
border: 1px dotted;
}
#settingsMenu {
font-family: courier, times;
color: #111;
}
#settingsMenu hr {
border: none;
height: 1px;
width: 100%;
background-color: rgb(208, 208, 191);
}
#settingsMenu input[type=text] {
border: none;
background-color: #F0F0A3;
font-family: courier, times;
color: #111;
border-bottom: solid 1px rgb(208, 208, 191);
}
#save {
background-color: #F0F0A3;
font-family: courier, times;
color: #111;
border: solid 1px rgb(208, 208, 191);
}
#is_typing {
background-color: transparent;
border: none;
border-radius: 1px;
position: absolute;
right: 7px;
bottom: 27px;
overflow: visible;
width: auto;
justify-content: flex-end;
}
#is_typing:before {
color: #222;
content: "Someone is typing";
font-size: 8pt;
background-color: transparent;
}
#is_typing > span {
height: 2px;
width: 2px;
borer-radius: 0;
background-color: #222;
}

`, "*");
});