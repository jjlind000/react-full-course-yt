import React, { useContext} from 'react';
import { UserContext } from './ComponentA.jsx';

export default function ComponentD() {

    // by using useContext we are traversing up the component tree to find
    // the nearest provider of the context, which in this case is ComponentA
    const user = useContext(UserContext);

    return (
      <div className="box">
        <h1>ComponentD</h1>
        <h2>{`Bye ${user}`}</h2>
      </div>
    )
  }
  