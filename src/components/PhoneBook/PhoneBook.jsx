import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/sliceFilter';
import { useEffect } from 'react';

import {Box} from '@mui/material';

import Form from "./Form";
import ContactsList from "./ContactsList";
import Filter from "./Filter/Filter";
import Section from "components/Section";

import { addContacts, deleteContacts, fetchContacts } from '../../redux/contacts/operation';


const PhoneBook = () =>{
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filter);
  
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchContacts())
    },[dispatch])

    const addContact = data => {
        const dublicate = contacts.length > 0 ? contacts.find(contact=> contact.name === data.name) : false;
        if(dublicate){
            alert(`${data.name} is already in name list`);
            
        return
        }
        dispatch(addContacts(data))
    };

    const deleteContact = (id) =>  dispatch(deleteContacts(id))
    
    const changeFilter = ({target}) => dispatch(setFilter(target.value ));

    const getFilteredContacts = () =>{
        const filterText = filter.toLowerCase();
        const filterContacts = contacts.filter(({ name }) => {
        const result = name.toLowerCase().includes(filterText);
            return result
        })
    return filterContacts;
    };

    return(
        <Box p={5}>
            <Section title="PhoneBook">
                <Box component='div'>
                    <Form onSubmit={addContact}/>
                </Box>
            </Section>
            <Section title='Contacts'>
                <Box  component='div'
                       m="auto"
                       p={1}
                       width={700}
                    >
                    <Filter filter={filter} changeFilter={changeFilter}/>
                    <ContactsList contacts={getFilteredContacts()} deleteContacts={deleteContact}/>
                </Box>
            </Section>
        </Box>
    )
};
export default PhoneBook;

