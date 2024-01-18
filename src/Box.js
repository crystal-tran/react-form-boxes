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

  //TODO:, pass box properties to style attribute
  return (
    <div className="Box">
    </div>
  );
}