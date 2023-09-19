import './CreateTodoButton.css';

export function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(e) => {
          console.log('le diste click')
          console.log(e)
          console.log(e.target)
        }
      }
    >+</button>
  );
}
