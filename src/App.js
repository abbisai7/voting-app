import React from 'react';
import './App.css';

import VotingBox from './components/votingbox.js'

function App() {
  return (
    <div className="container">
        <hr />
        <h1>Voting App ( thinking in react.js )</h1>
        <hr />
        <VotingBox title="VEG_ITEMS" />
        <hr />
        <VotingBox title="NON_VEG_ITEMS" />
      </div>
  );
}

export default App;
