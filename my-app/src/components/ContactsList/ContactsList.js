import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BsBackspaceFill } from "react-icons/bs";
import {
  ContactList,
  ListItem,
  Paragraph,
  ContactButton,
} from "./ContactList.styled";

const ContactsList = ({ contacts, onDeleteItem }) => (
  <ContactList>
    {contacts.map(({ id, number, name }) => (
      <ListItem key={id}>
        <HiArrowNarrowRight />
        <Paragraph> {name}</Paragraph>
        <Paragraph> {number}</Paragraph>
        <ContactButton onClick={() => onDeleteItem(id)}>
          Delete <BsBackspaceFill />
        </ContactButton>
      </ListItem>
    ))}
  </ContactList>
);

export default ContactsList;
