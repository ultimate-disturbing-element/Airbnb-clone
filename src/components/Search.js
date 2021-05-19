import React,{useState} from 'react';
import './Search.css';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker} from 'react-date-range';
import { People } from '@material-ui/icons';
import { Button } from '@material-ui/core';

export const Search = () => {
    const [startDate,setStartDate]=useState(new Date());
    const [endDate,setEndDate]=useState(new Date());

    const selectionRange = {
        startDate:startDate,
        endDate:endDate,
        key:"selection",
    }

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
            <h2>Number of Guest <People/></h2>
            
            <input min={0} defaultValue={2} type="number"/>
            <Button>search Airbnb</Button>
        </div>
    )
}
