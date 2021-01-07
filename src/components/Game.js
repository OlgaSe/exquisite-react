import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  //keep the list of sentence in the Game comp,
  const [sentenceList, setSentenceList] = useState([]);
  const [isRevealedPoem, setRevealedPoem] = useState(false);
  //state - finished game, show Final Poem comp or RecentSubmission

  const addSentence = (sentence) => {
    const newSentenceList = [...sentenceList];
    newSentenceList.push(sentence);

    setSentenceList(newSentenceList);
    console.log(sentenceList);
  }
  
  const revealPoem = () => {
    setRevealedPoem(true);
  }

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  const recentAndSubmissionComponents = (
    <div>
    <RecentSubmission 
    submission={sentenceList.length > 0 ? sentenceList[sentenceList.length-1] : ''}/>

    <PlayerSubmissionForm 
    index={sentenceList.length + 1} 
    sendSubmission={addSentence} 
    fields={FIELDS}/>
    </div>
  )

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      {!isRevealedPoem ? recentAndSubmissionComponents : ''}
      
      <FinalPoem 
      isSubmitted={isRevealedPoem}
      submissions={sentenceList}
      revealPoem={revealPoem}/>

    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
