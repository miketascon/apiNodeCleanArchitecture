const {attributes} = require('structure')

const User = attributes({
    name: {
        type: String,
        required: true
    },
    lastName : { 
        type: String
    },
})(class User {
    getCompleteName() {
        return this.name + ' ' + this.lastName;
    }
}); 

module.exports = User;