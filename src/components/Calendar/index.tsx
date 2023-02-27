import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Container, Month, Icon, Dialog, Year } from "./style";
const daysWeek = [ 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date()),
        month = currentDate.getMonth(),
        year = currentDate.getFullYear(),
        daysInMonth = new Date(year, month + 1, 0).getDate(),
        firstDayOfMonth = new Date(year, month, 1).getDay();
    const [showDialog, setShowDialog] = useState(false);
   

    const hendleChangeMonth = (key: number) => {
        setCurrentDate(new Date(year, key, 1));
        setShowDialog(false);
    }
    const handlePrevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1))

    }
    const handleNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1))
    }
    return (
        <Container>
            <header>
                <Icon
                    onClick={handlePrevMonth}
                >
                    <BsArrowLeft />

                </Icon>
                <div>
                    <Month
                        onClick={() => setShowDialog(!showDialog)}
                    >
                        {months[month]}
                    </Month>
                    <Year
                        
                    >
                        {year}
                    </Year>
                </div>
                <Icon
                    onClick={handleNextMonth}
                >
                    <BsArrowRight />

                </Icon>
                {showDialog && (
                    <Dialog>
                    {months.map((name, key) => {
                        return (
                            <button key={key}
                            onClick={() => hendleChangeMonth(key)}
                            >
                                {name}
                            </button>
                        )
                    })}
                </Dialog>
                )}
                

            </header>

            <table>
                <thead>
                    <tr>
                        {daysWeek.map((day, key) => {
                            return (
                                <th key={key}>{day}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {
                        [...Array(Math.ceil((daysInMonth + firstDayOfMonth) / 7) )].map((_, index) =>(
                            <tr key={index}>
                                { [...Array(7)].map((_, i) => {
                                    const day = index * 7 + i - firstDayOfMonth + 1;
                                    if (day < 1 || day > daysInMonth) {
                                       
                                            return <td key={i}></td>

                                        
                                    } else {
                                        if(day === 1 || day === 8|| day === 4 || day === 22 || day === 29){
                                            return <td key={i} className="event">{day}</td>
                                        } else {
                                        return <td key={i}>{day}</td>}
                                    }
                                })}
                                </tr>
                        ))}
                   
                </tbody>
            </table>
        </Container>
        

    )
}