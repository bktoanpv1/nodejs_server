function myFunction(){
    var req = new XMLHttpRequest();
    req.open("GET", "http://localhost:3000/", true);
    req.send(null);
    req.req
    console.log(req.status);
    console.log(req.responseText);
    console.log("Nut nhan 1");
}
function myFunction1(){
    var http = new XMLHttpRequest();
    http.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4){
            document.write(this.responseText);
        }
        console.log("Nut nhan 1");
    }
    
}