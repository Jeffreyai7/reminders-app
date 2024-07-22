import React from 'react';
import Reminder from '../models/Reminder';

interface ReminderListProps {
    items: Reminder[];
    removeReminders: (id : number) => void
}



function ReminderList({items, removeReminders}: ReminderListProps) {

     const deletebtn = (id: number) => {
        removeReminders(id)

     } 

    return (
        <ul>
           {
            items.map(item => <li key={item.id}><span>{item.title}</span> <button className='btn btn-danger my-3 rounded-pill' type='button' onClick={() => deletebtn(item.id) } >Delete</button> </li>)
           } 
        </ul>
    );
}

export default ReminderList;