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

function Box({ box, removeBox }) {
  const { width, height, backgroundColor } = box;

  const boxStyles = {
    height,
    width,
    backgroundColor
  }
  //TODO:, how to send target to remove box
  return (
    <div>
      <div className="Box" style={ boxStyles } >
      </div>
      <button onClick={ removeBox }>Remove the box!</button>
    </div>

  );
}

export default Box;