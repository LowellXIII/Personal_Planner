import React, {useState} from 'react';
import './View.css';

const Daily = () => {
    const [events, setEvents] = useState(Array(24).fill({eventTitle:"", eventDescription:""}));

    const updateEvent = (timeStart, timeStop, newEvent, eventDescription) => {
        setEvents(prev => {
            const updatedEvents = [...prev];
            for(let i = timeStart; i < timeStop; i++){
                updatedEvents[i] = {
                    eventTitle: newEvent,
                    eventDescription: eventDescription
                };
                console.log(i);
                console.log(updatedEvents);
            }
            return updatedEvents
        })        
    }

    const handleEventClick = () => {

    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const eventInfo = {
            eventTitle:e.target.eventTitle.value,
            eventDescription:e.target.eventDescription.value,
            timeStart:e.target.timeStart.value,
            timeStop:e.target.timeStop.value
        }

        updateEvent(eventInfo.timeStart, eventInfo.timeStop, eventInfo.eventTitle, eventInfo.eventDescription);
    }

    return(
        <div className="daily">
            <form className="dailyForm" onSubmit={handleOnSubmit}>
                <h3>Add Event</h3>

                <label htmlFor="eventTitle">Event Title</label>
                <input id="eventTitle" name="eventTitle"/>

                <label htmlFor="eventDescription">Event Description</label>
                <input id="eventDescription" name="eventDescription"/>

                <label htmlFor="timeStart">Time Start</label>
                <input id="timeStart" name="timeStart"/>

                <label htmlFor="timeStop">Time Stop</label>
                <input id="timeStop" name="timeStop"/>

                <button type="submit">Add</button>

            </form>
            <div className="dailyTable">
                {events.map((event, hour) => (
                    <div key={hour} className="event" onClick={handleEventClick}>
                        <span>{hour}:00 - {hour + 1}:00</span>
                        <span style={{"float":"right"}}>{event.eventTitle}</span>
                    </div>
                ))}
            </div>            
        </div>

    )
}

export default Daily;