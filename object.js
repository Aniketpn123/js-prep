//  object can be cosnider as a cabient with files haivng differnet name for each but have ( key :value )pairs

let user = new Object();    /// empty object

let user2 = {};          //empty cabient  { } is object literal

let fruit = 'apple';
let user3 = {
    name:"john",
    age:38,
    "likes_birds" : true,
    [fruit] : 5,
    [fruit + 'comp'] : 10,
};

console.log(user3.name , user3.age, user3.admin = true,user3.likes_birds);
delete user3.age

//  error user3.likes birds = true;

user3.$an= true;
user3["aniket my name"] =true;
delete user3["aniket my name"] ;

let key = "my name";
user3[key] = true;
console.log(user3[key]);
console.log(user3.apple);
console.log(user3.applecomp);
/// error console.log(user3.key);

function makeUser(name , age,nickName){
    return {
        name : name ,
        age : age,
        nickName : 'ani',
        for : 2,
        let : 1,
        int : 3,
        $:10,
        0:11,

    };
}

let user4 = makeUser('anikt', 32);

console.log(user4.nickName,user4.name,user4.int,user4["0"],user4[0],);


//.....................

let obj ={};

obj.__proto__ = 5;
console.log(obj.__proto__);
