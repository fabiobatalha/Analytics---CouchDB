function request (path, method, headers, body, callback) {
  if (!headers) {
    headers = {'Content-Type':'application/json', "Accept":'application/json', "Host":"couchdb:5984"};
  }
  if (!method) {
    method = "GET"
  }
  if (body) {
    if (typeof body !== "string") {
      body = JSON.stringify(body)
    }
  }

  var client = http.createClient(5984, "couchdb");
  var request = client.request(method, path, headers);
  request.addListener("response", function (response) {
    var buffer = ''
    response.addListener("data", function (chunk) {
      buffer += chunk;
    })
    response.addListener("end", function () {
      callback(response, buffer);
    })
  })
  request.write(body)
  request.close()

}

function dbs(){
alert ("starting");
 result = request("/_all_dbs","GET");
alert ("Done");
 alert(result);
}

function logger(val){  
    var db = new CouchDB("logger",headers);
    db.createDb();

    var doc = {"_id" : "Starbuck", "name" : "Kara Thrace"};
    var saved_doc = db.save(doc);
    alert("Done");
}