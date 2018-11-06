

//  sec010b_L88_destructuring.jsx

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_010_Redux\proj_02\Budget-app\zzz_playground\sec010b_L88_destructuring.jsx


//  SEC_010 --- 88. ES6 Object Destructuring 15:49


console.log ("sec010b_L88_destructuring ccc");
console.log ("sec010b L88 destructuring ccc");

const GC_person =
{
    name: "joe",
    age: 22,
    location:
    {
        city: 'Houston',
        temp: 101
    }
}

console.log (`${GC_person.name} is ${GC_person.age}.`)

const { name : firstname = 'anonymous', age } = GC_person;
console.log (` 2 ${firstname} is ${age}.`)

if (GC_person.location.temp && GC_person.location.city)
    console.log (` 3 It's ${GC_person.location.temp} in ${GC_person.location.city}.`)

//  const { temp, city } = GC_person.location;
//  if (temp && city)
//      console.log (` 4 It's ${temp} in ${city}.`)

const { temp: temperature, city } = GC_person.location;
if (temperature && city)
    console.log (` 5 It's ${temperature} in ${city}.`)


const GC_book =
{
    title: "Ego is the Enemy",
    author: 'Ryan Holiday',
    publisher:
    {
        name: 'Penguin'
    }
}

const  { name : publishername = 'self-published' } = GC_book.publisher;

console.log (publishername);


//
//  Array destructuring
//

const GC_address =
[
    '1299 S Juiper Street', 'Philidelphia', 'Pennsylvania', '19147'
];


console.log (`You are in ${GC_address[1]} ${GC_address[2]}`);

//  no renaming syntax
//  const [ L_street, L_city, L_state, L_zipcode ] = GC_address;
const [ , L_city, L_state = 'New York' ] = GC_address;

console.log (` 2 You are in ${L_city} ${L_state}`);

const GC_address_02 = [];

const [ , , L2_state = 'New York' ] = GC_address_02;

console.log (` 3 You are in  ${L2_state}`);


const GC_menu_item = [ 'Coffee (hot)', '$2.00', '$2.50', '$2.75' ];

const [ item_name, , medium_price ] = GC_menu_item;
console.log (` 4 A ${item_name} costs ${medium_price}`);
