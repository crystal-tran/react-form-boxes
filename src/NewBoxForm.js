import React, { useState } from 'react'
/** Renders a form when submited and creates a new box
 *
 * Props:
 * - addBox (a function on the parent Box) on submit
 *
 * State:
 * - formdata
 *
 * Box -> NewBoxForm
 */

function NewBoxForm({ addBox }) {
  const initialState = { height: "", width: "", backgroundColor: "" };
  const [formData, setFormData] = useState(initialState);

  /** Send {height, width, backgroundColor} to parent & clear form*/
  function handleSubmit(evt){
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  /**Update formData state w/ curr state of input element */
  function handleChange(evt){
    const { name, value } = evt.target;
    setFormData(curr => ({
      ...curr,
      [name]: value,
    }));
  }

  /** render form */
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <button>Add a new box!</button>
    </form>
  );
}

export default NewBoxForm;