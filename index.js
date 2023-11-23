const contacts = require("./contacts");
const argv = require('yargs').argv; //пакет для зручного парсу аргументів командного рядка

const invokeAction = async({action, id, name, email, phone}) =>{
    switch(action){
        case "list":
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
        case "get":
            const getById = await contacts.getContactById(id);
            return console.log(getById);
        case "add":
            const addNewContact = await contacts.addContact(name, email, phone);
            return console.log(addNewContact);
        case "remove":
            const removeById = await contacts.removeContact(id);
            return console.log(removeById);
        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

//invokeAction({action: "list"});
//invokeAction({action: "get", id: "rsKkOQUi80UsgVPCcLZZW"});
//invokeAction({action: "add", name:"Vasya2", email:"vasya@gmail,com", phone: "1234567"});
//invokeAction({action: "remove",  id: "JqgxBAFQH9-6FEOKngRIX"});