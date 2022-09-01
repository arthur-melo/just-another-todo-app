import { useSelector } from 'react-redux';

import WelcomeCardCTA from '../features/todos/WelcomeCardCTA/WelcomeCardCTA';
import { selectTodoItems } from '../features/todos/todosSlice';
import TodoList from '../features/todos/TodoList/TodoList';
import LocalStorage from '../components/LocalStorage/LocalStorage';
import Layout from '../components/Layout/Layout';

const App = () => {
  const todoItems = useSelector(selectTodoItems);

  return (
    <LocalStorage>
      <Layout>
        <WelcomeCardCTA />
        {todoItems.length > 0 && <TodoList />}
      </Layout>
    </LocalStorage>
  );
};

export default App;
