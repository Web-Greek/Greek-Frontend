import React, { useContext, useEffect, useState } from 'react';
import CalendarBox from '../../components/CalendarBox';
import Schedule from '../../components/Schedule';
import TodoAddModal from '../../components/TodoAddModal';
import styles from './MyCalendarPage.module.css';
import { ColorThemeContext } from '../../Context/ColorThemeContext';

export default function MyCalendarPage() {
  const [date, setDate] = useState(new Date());
  const [modal, setModal] = useState(false);
  const [schedule, setSchedule] = useState(() => loadData());

  useEffect(() => {
    localStorage.setItem('schedule', JSON.stringify(schedule));
  }, [schedule]);

  // 일정 클릭 시 일정의 상세 페이지로 이동하는 기능
  const [isList, setIsList] = useState(true);
  const [selectedTodo, setSelectedTodo] = useState({});
  const handleTodo = (todo) => {
    setSelectedTodo(todo);
    setIsList(false);
  };
  const closeDetail = () => {
    setIsList(true);
  };

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const deleteTodoItem = (month, id) => {
    const newList = schedule[month].filter((todo) => todo.id !== id);
    setSchedule((prev) => ({
      ...prev,
      [month]: newList,
    }));
  };
  const updateTodoItem = (month, newTodo) => {
    const newList = schedule[month]
      .filter((todo) => todo.id !== newTodo.id)
      .concat(newTodo);
    setSchedule((prev) => ({
      ...prev,
      [month]: newList,
    }));
  };

  const [color, setColor] = useState('green');

  const { colorTheme, changeColorTheme } = useContext(ColorThemeContext);
  useEffect(() => {
    changeColorTheme(color);
  }, [color, changeColorTheme]);

  return (
    <div
      className={`${styles.back} ${
        colorTheme === 'pink'
          ? styles.pink
          : colorTheme === 'yellow'
          ? styles.yellow
          : styles.green
      }`}
    >
      <div className={styles.box}>
        <CalendarBox
          date={date}
          handleDate={setDate}
          schedule={schedule}
          closeDetail={closeDetail}
        />
        <Schedule
          date={date}
          openModal={openModal}
          schedule={schedule}
          deleteTodoItem={deleteTodoItem}
          isList={isList}
          selectedTodo={selectedTodo}
          handleTodo={handleTodo}
          closeDetail={closeDetail}
          updateTodoItem={updateTodoItem}
        />
        <TodoAddModal
          open={modal}
          date={date}
          closeModal={closeModal}
          schedule={schedule}
          addSchedule={setSchedule}
        />
      </div>
    </div>
  );
}

function loadData() {
  const schedule = JSON.parse(localStorage.getItem('schedule'));
  return schedule ? schedule : {};
}
