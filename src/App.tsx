import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/Reminder';
import ReminderService from "./services/reminder"
import NewReminder from './components/NewReminder';



function App() {
 const [reminders, setReminders] = useState<Reminder[]>([])
 
 const removeReminders = (id: number) => {
  setReminders(reminders.filter(reminder => reminder.id !== id) )

} 

const addReminder = async (title: string) => {
 
const newReminder = await ReminderService.addReminder(title)
setReminders([newReminder, ...reminders])

}

 useEffect(() => {
loadReminders()
 }, [])

 const loadReminders = async () => {
 
  const reminders = await ReminderService.getReminders();
  setReminders(reminders)

 }

 return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} removeReminders={removeReminders}  />
    </div>
  );
}

export default App;



