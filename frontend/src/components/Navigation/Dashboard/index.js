import { useDispatch } from 'react-redux';
import { showBookingControlModal, closeBookingControlModal } from '../../../store/controls'
import { showReviewControlModal, closeReviewControlModal } from '../../../store/controls'
import { showListingControlModal, closeListingControlModal } from '../../../store/controls'
import BookingControl from './Bookingcontrol'  
import ListingControl from './Listingcontrol'  
import ReviewControl from './Reviewcontrol'

export default function Dashboard ({show, toggle})  {  
    const dispatch = useDispatch();  

    if(!show) {  
        return null;
    }
 
    return (
        <div className="Dashboard">  
            <button className="exitDash"
                onClick={() => {
                                if(toggle === 'listing') dispatch(closeListingControlModal());
                                if(toggle === 'booking') dispatch(closeBookingControlModal());
                                if(toggle === 'review') dispatch(closeReviewControlModal()); 
                                }
                            }
                        >
            X
            </button> 
            {/* <button className="listingToggle" onClick={toggle === 'listing' ? 
                                    () => {
                                        dispatch(showListingControlModal())
                                        dispatch(closeBookingControlModal());
                                        dispatch(closeReviewControlModal());
                                    }
            >
                My Listings
            </button>
            <button className="bookingToggle" onClick={toggle === 'booking' ? 
                                    () => {
                                        dispatch(showBookingControlModal())
                                        dispatch(closeListingControlModal());
                                        dispatch(closeReviewControlModal());
                                    }
            >
                My Bookings
            </button>
            <button className="reviewToggle" onClick={toggle === 'review' ? 
                                    () => {
                                        dispatch(showReviewControlModal())
                                        dispatch(closeBookingControlModal());
                                        dispatch(closeListingControlModal());
                                    }
                        >
                My Reviews 
            </button> */}

            <div className="Dash-body">
                    {toggle === 'listing' <ListingControl/> }
                    {toggle === 'booking' <BookingControl/> }  
                    {toggle === 'listing' <ReviewControl/> } 
            </div>
        </div>
    );
}