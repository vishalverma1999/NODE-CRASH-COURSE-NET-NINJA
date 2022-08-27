const people = ['yoshi', 'chun-li', 'vishal', 'tanu'];
const ages = [20,25,22,18];

console.log(people);

// to explicitly export something
// module.exports = 'hello'        // exporting string
// module.exports = people;    // exporting array
module.exports = {
    people, ages
};      // exporting multiple items