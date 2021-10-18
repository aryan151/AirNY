import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DateRangePicker } from 'react-date-range';   
import { postBooking } from '../../../store/bookings'
import moment from 'moment'; 
    
function Booking ({price}) {
    const dispatch = useDispatch();  
    const { listingId } = useParams();
    const sessionUser = useSelector(state => state?.session?.user);   
    let userId;   
    

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState(); 

    const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: "selection"
    };
  
    function handleSelect(ranges) {
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const firstdate = `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`
        const lastdate  = `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`

        if (sessionUser) {
            userId = sessionUser.id
          } else {
            alert('Please log in or sign up to make a reservation')
            return;
          }
           
        const booking = {
          userId,
          listingId,
          startTime : firstdate,
          endTime: lastdate
        }
    
        let AddBooking = await dispatch(postBooking(booking))
        if (AddBooking) { 
            alert('You have booked this listing!')  
        }
      }

    return (
      <div className="bookingform" style={{display: 'flex', flexDirection: 'column'}}>  
      <div className="datepickersearch">   
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} minDate={moment().toDate()} />
  
        <button onClick={handleSubmit} disabled={(!startDate && !endDate)}>Book Now</button>
      </div> 
      </div>
    );
  }
  
  export default Booking; 