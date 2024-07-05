import React, { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import { Empty, Header, Infos, Task } from '@components';
import { ITask, useHome } from './hooks';

export function HomeScreen() {
  const {
    handleDelete,
    handleDone,
    handleTaskAdd,
    task,
    setTask,
    newTaskInputRef,
    tasks,
    created,
    completed,
  } = useHome();

  function renderTask({ item }: { item: ITask }) {
    return (
      <Task
        key={item.id}
        onRemove={() => handleDelete(item.id)}
        onDone={() => handleDone(item.id)}
        {...item}
      />
    );
  }

  return (
    <Fragment>
      <StatusBar style="light" translucent />
      <View style={styles.container}>
        <Header
          inputRef={newTaskInputRef}
          task={task}
          onChangeText={setTask}
          onPress={handleTaskAdd}
        />
        <Infos completed={completed} created={created} />
        <FlatList
          data={tasks}
          ListEmptyComponent={<Empty />}
          renderItem={renderTask}
        />
      </View>
    </Fragment>
  );
}
