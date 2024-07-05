import { uuid } from '@utils';
import { useRef, useState } from 'react';
import { Alert, TextInput } from 'react-native';

export type ITask = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export function useHome() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [task, setTask] = useState('');
  const newTaskInputRef = useRef<TextInput>(null);

  const created = tasks.length;
  const completed = tasks.filter(({ isCompleted }) => isCompleted).length;

  function handleTaskAdd() {
    if (task.length) {
      const taskExists = tasks.some(
        (t) => t.title.trim().toLowerCase() === task.trim().toLowerCase(),
      );

      if (taskExists) {
        Alert.alert('Ops...', 'Já existe uma tarefa com este título.');
        return;
      }

      setTasks((prevTasks) => [
        ...prevTasks,
        { id: uuid(), isCompleted: false, title: task.trim() },
      ]);

      setTask('');
      newTaskInputRef.current?.blur();
    }
  }

  function handleDelete(id: string) {
    Alert.alert('Excluir tarefa', 'Deseja excluir essa tarefa?', [
      {
        text: 'Sim',
        style: 'default',
        onPress: () => {
          setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  function handleDone(id: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  }

  return {
    handleDelete,
    handleDone,
    handleTaskAdd,
    newTaskInputRef,
    task,
    setTask,
    tasks,
    created,
    completed,
  };
}
