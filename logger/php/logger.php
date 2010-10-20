<?
/**
 * Logger PHP File, responsible to register the access log into the couchDB.
 *
 * @package     Analytics CouchDB
 * @author      Fabio Batalha C. Santos (fabio.santos@bireme.org)
 * @copyright
 *
 */

/*
 * Edit this file in UTF-8 - Test String "áéíóú"
 */

 require_once("config.php");
 require_once("classCouchDB.php");

 $options['host'] = COUCHDB_HOST;
 $options['port'] = COUCHDB_PORT;

 $couch = new CouchSimple($options); // See if we can make a connection

// Create a new document in the database if the requester domain is allowed
// according to the allowed domains in the configuration file
if ($_REQUEST["host"] === $ALLOWED_DOMAINS[$_REQUEST["instance"]]){
    $register = json_encode($_REQUEST);
    $resp = $couch->send("POST", "/".COUCHDB_DATABASE."/", $register);
    echo "reg".$register;
}
?>