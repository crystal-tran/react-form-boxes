import React from 'react';
/** Renders a box and a remove button for that box
 *
 * Props:
 * - box: object {id, width, height, color}
 * - removeBox (a function on the parent BoxList) on click
 *
 * State: None
 *
 * BoxList -> Box
 */

function Box({ id, height, width, backgroundColor, removeBox }) {
  const boxStyles = {
    height,
    width,
    backgroundColor
 }


  function remove(){
    console.log("remove, id:", id);
    removeBox(id);
  }

  return (
    <div>
      <div className="Box" id={id} style={ boxStyles } >
      </div>
      <button onClick={remove}>Remove the box!</button>
    </div>

  );
}

export default Box;