import React, {Component} from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: [
                {
                    id: 1,
                    name: 'Tim', 
                    phone: 1234567890
                },
                {
                    id: 2,
                    name: 'Mark', 
                    phone: 987654321
                }
            ],
            newName: '',
            needsUpdate: false,
            idOfContactToUpdate: null
        };

    }

    componentDidMount() {
        console.log('Component did mount.. Yay!!');
    }

    //invokes when the name changes
    handleNameChange = (event) => {
        this.setState({newName: event.target.value});

    }

    //invokes when the phone changes
    handlePhoneChange = (event) => {
        this.setState({newPhone: event.target.value});
    }

    //invokes when the SAVe button is hit
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.needsUpdate) {
            this.updateContact();
        } else {
            this.createContact();
        }
    }

    //invokes when creating a new contact
    createContact = () => {
        if (this.state.newName && this.state.newPhone && this.state.contacts.length!==0) {
            this.setState((prevState) => (
            {
                contacts: [
                    ...prevState.contacts,

                    {   
                        id: prevState.contacts[prevState.contacts.length-1].id + 1,
                        name: this.state.newName, 
                        phone: this.state.newPhone
                    }
                ],
                newName: '',
                newPhone: ''
            })
            );
        }
        else if (this.state.newName && this.state.newPhone && this.state.contacts.length===0 ) {
        this.setState(() => (
            {
                contacts: [
                    {                              
                        id:  1,
                        name: this.state.newName, 
                        phone: this.state.newPhone
                    }
                ],
                newName: '',
                newPhone: ''
            })
            );
        } 
    }

    //invokes when updating an existing contact
    updateContact = () => {
        let contacts = this.state.contacts;
        let newName = {
            id: this.state.idOfContactToUpdate, 
            name: this.state.newName, 
            phone: this.state.newPhone
        };
        let index = contacts.findIndex((contact) => contact.id === newName.id);
        contacts.splice(index, 1, newName);

        this.setState({
            contacts: contacts,
            needsUpdate: false,
            idOfContactToUpdate: null,
            newName: '',
            newPhone: ''
        });
    }
    //invokes when deleting an existing contact
    deleteContact = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter((contact) => contact.id !== id)
        }));
    }

    //invokes when the user hitys UPDATE button
    handleUpdateContactClick = (id) => {
        const contactToUpdate = this.state.contacts.filter((contact) => contact.id === id)[0];
        this.setState({
            newName: contactToUpdate.name,
            needsUpdate: true,
            idOfContactToUpdate: id, 
            newPhone: contactToUpdate.phone
        });
    }

    componentWillUnmount() {
        console.log('Clean up everything here. Unmounting...  ');
    }

    render() {
        return (
            <div className="viewContact" role="presentation">
                <form onSubmit={this.handleSubmit}>
                    <Input
                        type="text"
                        name='addContact'
                        onChange={this.handleNameChange}
                        value={this.state.newName}
                        placeholder='Enter Name'
                    />
                    <Input
                        type="number"
                        name='newPhone'
                        onChange={this.handlePhoneChange}
                        value={this.state.newPhone}
                        placeholder='Enter Phone Number'
                    />
                    <Button
                        type="submit"
                        className='btn-lg btn-primary mb-2'
                        label='Save contact'
                    >
                    </Button>
                </form>

                <div className="container" role="menu">
                    <ul className="list-group">
                        {this.state.contacts.map((contact) => {
                            return (
                                <li
                                    key={contact.name + contact.phone}
                                    className='list-group-item'
                                >
                                    <p>Name: {contact.name}</p> <br/>
                                    <p>Phone: {contact.phone}</p>
                                    <Button
                                        type="button"
                                        className='btn-sm btn-primary ml-3'
                                        label='Update'

                                        onClick={() => this.handleUpdateContactClick(contact.id)}
                                    >
                                    </Button>
                                    <Button
                                        type="button"
                                        className='btn-sm btn-danger ml-3'
                                        label='Delete'
                                        onClick={() => this.deleteContact(contact.id)}
                                    >
                                    </Button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Contact;
