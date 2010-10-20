<?php
/**
 * Analytics CouchDB Configuration file.
 *
 * @package     Analytics CouchDB
 * @author      Fabio Batalha C. Santos (fabio.santos@bireme.org)
 * @copyright
 *
 */

/*
 * Edit this file in UTF-8 - Test String "áéíóú"
 */

$ALLOWED_DOMAINS["scl"] = "www.scielo.br";
$ALLOWED_DOMAINS["chl"] = "www.scielo.cl";
$ALLOWED_DOMAINS["tst"] = "vm.analytics.scielo.org";
$ALLOWED_DOMAINS["vmscl"] = "vm.scielo.br";

define(COUCHDB_HOST,"couchdb");
define(COUCHDB_PORT,"5984");
define(COUCHDB_DATABASE,"analytics");
?>
