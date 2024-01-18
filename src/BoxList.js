import React, { useState } from 'react';
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from 'uuid';

/** Render all of the Box components and NewBoxForm component
 *
 * Props: None
 *
 * State:
 * - boxes: an array like [{id, width, height, backgroundColor}, ...]
 *
 *
 * App -> BoxList -> Box
 * App -> BoxList -> NewBoxForm
 */
function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /**updates state of boxes to add a new box *///show form of box
  //could destructure box here
  function addBox(box) {
    let newBox = { ...box, id: uuid() }; // {id, height, width, bc}
    setBoxes(curr => [...curr, newBox]);
  }

  /**updates state of boxes to remove box */
  function removeBox(id) {
    console.log("remove box, id:", id);
    setBoxes(curr => curr.filter(b => b.id !== id));
  }

  /**render list of boxes */
  function renderBoxes() {
    return (
      boxes.map(box => (
        <Box
          key={box.id}
          id={box.id}
          height={box.height}
          width={box.width}
          backgroundColor={box.backgroundColor}
          removeBox={removeBox}
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

export default BoxList;