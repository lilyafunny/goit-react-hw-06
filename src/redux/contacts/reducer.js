import { addContact, deleteContact, searchName } from './actions';
import data from '../../contacts.json';

const initialState = {
    contacts: {
        items: data
    },
    filters: {
        name: "",
    },
};


export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case addContact.type:
            return {
                ...state,
                contacts: {
                    items: [...state.contacts.items, action.payload]
                },
            };

        case deleteContact.type: return {
            ...state,
            contacts: {
                items: state.contacts.items.filter((contact) => contact.id !== action.payload),
            },
        };

        case searchName.type: return {
            ...state,
            filters: {
                ...state.filters,
                name: action.payload, // Оновлення фільтра в стані
            },
        };


        default:
            return state;

    }
};
