const SHOW_LISTINGCONTROL_MODAL = '/controls/SHOW_LISTINGCONTROL_MODAL';
const CLOSE_LISTINGCONTROL_MODAL = '/controls/CLOSE_LISTINGCONTROL_MODAL';
const SHOW_REVIEWCONTROL_MODAL = '/controls/SHOW_REVIEWCONTROL_MODAL';
const CLOSE_REVIEWCONTROL_MODAL = '/controls/CLOSE_REVIEWCONTROL_MODAL';
const SHOW_BOOKINGCONTROL_MODAL = '/controls/SHOW_BOOKINGCONTROL_MODAL ';
const CLOSE_BOOKINGCONTROL_MODAL = '/controls/CLOSE_BOOKINGCONTROL_MODAL'; 

  
const initialState = {
    showModal: false  
};     


export const showListingControlModal = () => {
    return {
        type: SHOW_LISTINGCONTROL_MODAL
    };
};

export const closeListingControlModal = () => {
    return {
        type: CLOSE_LISTINGCONTROL_MODAL
    };
};

export const showReviewControlModal = () => {
    return {
        type: SHOW_REVIEWCONTROL_MODAL
    };
};

export const closeReviewControlModal = () => {
    return {
        type: CLOSE_REVIEWCONTROL_MODAL
    }
};

export const showBookingControlModal = () => {
    return {
        type: SHOW_BOOKINGCONTROL_MODAL
    };
};

export const closeBookingControlModal = () => {  
    return {
        type: CLOSE_BOOKINGCONTROL_MODAL
    }
}; 


export const listingControlModalReducer = (state=initialState, action) => {
    switch (action.type) {
        case SHOW_LISTINGCONTROL_MODAL: 
            return { showModal: true };
        case CLOSE_LISTINGCONTROL_MODAL: 
            return { showModal: false };
        default:
            return state;  
    }
};

export const reviewControlModalReducer = (state=initialState, action) => {
    switch (action.type) {
        case SHOW_REVIEWCONTROL_MODAL:
            return { showModal: true };
        case CLOSE_REVIEWCONTROL_MODAL:
            return { showModal: false };  
        default:
            return state;
    }
};

export const bookingControlModalReducer = (state=initialState, action) => {
    switch (action.type) {
        case SHOW_BOOKINGCONTROL_MODAL:
            return { showModal: true };
        case CLOSE_BOOKINGCONTROL_MODAL:  
            return { showModal: false };
        default:
            return state;
    }
};  