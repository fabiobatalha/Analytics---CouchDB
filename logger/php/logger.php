<?
 require_once("classCouchDB.php");

 $options['host'] = "couchdb";
 $options['port'] = 5984;

 $couch = new CouchSimple($options); // See if we can make a connection

  // Create a new document in the database test with the id 123 and some data
 $resp = $couch->send("PUT", "/logger/", '{"instance":"scl"}');
 var_dump($resp); // string(42) "{"ok":true,"id":"123","rev":"2039697587"}"

  $resp = $couch->send("GET", "/logger/_all_docs");
 var_dump($resp); // string(27) "{"total_rows":0,"rows":[]}"

?>