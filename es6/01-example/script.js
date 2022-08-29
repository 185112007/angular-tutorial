var users = [
    {
        email: 'gafur.hayytbayev@gmail.com',
        password: '123'
    },
    {
        email: 'jasur.hayytbayev@gmail.com',
        password: '123'
    }
];

var tweets = [
    {
        email: 'gafur.hayytbayev@gmail.com',
        tweet: 'gafur tweet'
    },
    {
        email: 'jasur.hayytbayev@gmail.com',
        tweet: 'jasur tweet 1'
    },
    {
        email: 'jasur.hayytbayev@gmail.com',
        tweet: 'jasur tweet 2'
    }
];

var email = prompt('email?');
var password = prompt('password?');

function enter(email, password){
    if(email === users[0].email && password === users[0].password){
        console.log(tweets[0]['tweet']);
    }else if(email === users[1].email && password === users[1].password){
        console.log(tweets[1]['tweet'] + "\n" + tweets[2]['tweet']);
    }else{
        console.log("invalid email & password");
    }
}

enter(email, password);