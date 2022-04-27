var myModule = require('./libraries/mqttClient.js');
myModule.mqttClient_Init();

function get_search(req,res){
    console.log(req.query);
    res.render('search');
}
function get_home(req,res){
    res.render('home');
}
function get_dashboard(req,res){
    res.render('dashboard');
}
function post_search(req,res){
    console.log(req.query.q);
    res.render('search');
}
function get_(req,res){
    res.send('GET request to the homepage');
    myModule.mqttClient_publish("test","hi");
}
module.exports = {
    get_ : get_,
    get_search: get_search,
    get_home : get_home, 
    get_dashboard: get_dashboard,
    post_search: post_search,
};