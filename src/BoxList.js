import React, { useState } from 'react';
import NewBoxForm from "./NewBoxForm";
import Box from "./Box"
import { v4 as uuid } from 'uuid';

/** Render all of the Box components and NewBoxForm component
 *
 * Props: None
 *
 * State:
 * - boxes: an array like [{id, width, height, color}, ...]
 *
 *
 *
 * App -> BoxList -> Box
 * App -> BoxList -> NewBoxForm
 */
function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /**updates state of boxes to add a new box */
    function addBox(box) {
    let newBox = { box, id: uuid() };
    setBoxes(curr => [...curr, newBox]);
    }

  /**updates state of boxes to remove box */
    function removeBox(evt) {
    console.log("evt", evt);
    }
  /**render list of boxes */
    function renderBoxes() {
      return (
        boxes.map(box => (
        <Box
          id={box.id}
          height={box.height}
          width={box.width}
          backgroundColor={box.backgroundColor}
        />
        ))
      );
    }

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>

    );
};