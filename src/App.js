import {useEffect, useRef, useState} from 'react';
import soundClap from './sounds/clap.mp3';
import soundHihatOpen from './sounds/hihat-open.mp3';
import soundHihat from './sounds/hihat.mp3';
import soundKick from './sounds/kick.mp3';
import soundRim from './sounds/rimshot.mp3';
import soundSnare from './sounds/snare.mp3';
import soundOne from './sounds/sound-1.mp3';
import soundTwo from './sounds/sound-2.mp3';
import soundThree from './sounds/sound-3.mp3';

function defineKeyName(code){
  switch(code){
    case 81:
      return 'q';
    case 87:
      return 'w'
    case 69:
      return 'e'

    case 65:
      return 'a'
    case 83:
      return 's'
    case 68:
      return 'd'

    case 90:
      return 'z'
    case 88:
      return 'x'
    case 67:
      return 'c'

    default: 
      return '';
  }
}

function audioPlay(elem){
  let audioElem = elem.querySelector('audio');
  audioElem.currentTime = 0;
  audioElem.play();
}

function getSoundName(elem){
  return elem.querySelector('audio').getAttribute('name')
}

function App() {
  let rootElem = useRef(null);
  let [soundName, setSoundName] = useState('');
  useEffect(()=>{
    let element = rootElem.current;
      document.onkeyup = function(e){
        let code = e.keyCode;
        let keyName = defineKeyName(code);

        let button = element.querySelector(`#${keyName}`)
        button.classList.toggle('active');
      };
      document.onkeydown = function(e){
        let code = e.keyCode;
        let keyName = defineKeyName(code);

        let button = element.querySelector(`#${keyName}`)
        button.classList.toggle('active');
        audioPlay(button);
        setSoundName(getSoundName(button));
      };

      document.querySelectorAll('.machine__pad').forEach(elem=>{
        elem.addEventListener('click', function(){
          audioPlay(this);
          setSoundName(getSoundName(this));
        })
      })
  }, []);
  return (
    <div class="machine" ref={rootElem}>
    <div class="machine__head">
       <div class="machine__head-screen">
          <p class="machine__screen-text">{soundName}</p>
       </div>
    </div>
    <div class="machine__body">
       <button class="machine__pad" id='q'>
          <p class="machine__pad-text">Q</p>
          <audio src={soundOne} class="machine__pad-audio" name='sound-1'></audio>
       </button>
       <button class="machine__pad" id='w'>
          <p class="machine__pad-text">w</p>
          <audio src={soundTwo} class="machine__pad-audio" name='sound-2'></audio>
       </button>
       <button class="machine__pad" id='e'>
          <p class="machine__pad-text">e</p>
          <audio src={soundThree} class="machine__pad-audio" name='sound-3'></audio>
       </button>
       <button class="machine__pad" id='a'>
          <p class="machine__pad-text">a</p>
          <audio src={soundHihatOpen} class="machine__pad-audio" name='hi-hat open'></audio>
       </button>
       <button class="machine__pad" id='s'>
          <p class="machine__pad-text">s</p>
          <audio src={soundHihat} class="machine__pad-audio" name='hi-hat closed'></audio>
       </button>
       <button class="machine__pad" id='d'>
          <p class="machine__pad-text">d</p>
          <audio src={soundClap} class="machine__pad-audio" name='clap'></audio>
       </button>
       <button class="machine__pad" id='z'>
          <p class="machine__pad-text">z</p>
          <audio src={soundRim} class="machine__pad-audio" name='rimshot'></audio>
       </button>
       <button class="machine__pad" id='x'>
          <p class="machine__pad-text">x</p>
          <audio src={soundSnare} class="machine__pad-audio" name='snare'></audio>
       </button>
       <button class="machine__pad" id='c'>
          <p class="machine__pad-text">c</p>
          <audio src={soundKick} class="machine__pad-audio" name='kick'></audio>
       </button>
    </div>
 </div>
  );
}

export default App;
