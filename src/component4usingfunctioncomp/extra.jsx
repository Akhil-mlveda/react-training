import { useState } from 'react';
const COLORS = ['white', 'red', 'blue', 'black', 'cream'];
function Extra() {
  const [values, setValues] = useState({
    name: '', color: '', age: '', habits: '' 
  });
  const set = (name) => {
      return ({ target: { value } }) => {
          console.log(value);
          setValues(oldValues => ({...oldValues, [name]: value }));
        }
  };
  return (
    <form>
      <h2>Register Your Cat</h2>
      <label>Name*:</label>
      <input value={values.name} onChange={set('name')} />
      <label>Color*:</label>
      <select value={values.color} onChange={set('color')}>
        <option value="">Select color</option>
        {COLORS.map(c => <option key={c}>{c}</option>)}
      </select>
      <label>Age*:</label>
      <input value={values.age} onChange={set('age')} />
      <label>Habits:</label>
      <textarea value={values.habits} onChange={set('habits')} />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Extra;