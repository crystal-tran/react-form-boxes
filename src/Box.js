import React from 'react';
/** Renders a box and a remove button for that box
 *
 * Props:
 * - id: unique box id
 * -height: box height
 * -width: box width
 * -backgroundColor: box background color
 * - removeBox: (a function on the parent BoxList) to remove box on click
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
 };

/** Send id to parent to remove box */
  function handleRemove(){
    removeBox(id);
  }
  //don't need id-not required by app
  return (
    <div>
      <div className="Box" id={id} style={ boxStyles } >
      </div>
      <button onClick={handleRemove}>Remove the box!</button>
    </div>

  );
}

export default Box;