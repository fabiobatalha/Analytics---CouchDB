<?
require_once("classCouchDB.php");

// we get a new CouchDB object that will use the 'pastebin' db
$couchdb = new CouchDB('logger','couchdb','80');
try {
    $result = $couchdb->get_all_docs();
} catch(CouchDBException $e) {
    die($e->errorMessage()."\n");
}
// here we get the decoded json from the response
$all_docs = $result->getBody(true);

// then we can iterate through the returned rows and fetch each item using its id.
foreach($all_docs->rows as $r => $row) {
    print_r($couchdb->get_item($row->id));
}

// if we want to find only pastebin items that are currently published, we need to do a little more.
//
// below, we create a view using a javascript function passed in the post data.
/*
$map = <<<MAP
function(doc) {
    if(doc.status == 'published') {
        emit(doc.title, {docTitle: doc.title, docBody: doc.body});
    }
}
MAP;
$view = '{"map":"'.$map.'"}';

// we set the method to POST and send the request to couch db's /_temp_view. the text of the view is passed as post data.
// this javascript function will return documents whose 'status' field contains 'published'.
// note that we set the content type to 'text/javascript' for posts in our couchdb class.
$view_result = $couchdb->send('/_temp_view', 'post', $view);
print $view_result->getBody();
 *
 */
?>