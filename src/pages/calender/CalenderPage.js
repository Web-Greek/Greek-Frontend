import React from 'react';
import { ColorThemeProvider } from '../../Context/ColorThemeContext';
import MyCalendarPage from './MyCalendarPage';

const CalendarPage = () => {
  return (
    <ColorThemeProvider>
      <MyCalendarPage />
    </ColorThemeProvider>
  );
};

export default CalendarPage;
