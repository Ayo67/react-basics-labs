import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Wash and dry the dishes." />
      <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put it away." />
      <Task title="Tidy" deadline="Today" description="Tidy up the living room and kitchen." />
    </div>
  );
}

export default App;
