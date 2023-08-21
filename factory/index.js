class User {
    constructor(firstName, lastName, email) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// const createUser = ({ firstName, lastName, email }) => ({
//     firstName,
//     lastName,
//     email,
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// })

// const user1 = createUser({ firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com'})
// const user2 = createUser({ firstName: 'John2', lastName: 'Doe2', email: 'johndoe2@gmail.com'})

const user1 = new User('John', 'Doe', 'johndoe@gmail.com');
const user2 = new User('Jane', 'Doe', 'janedoe@gmail.com');

console.log(user1.fullName())
console.log(user2.fullName())