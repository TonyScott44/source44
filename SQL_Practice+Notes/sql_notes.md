<h1>#SQL Practice + Notes</h1>
<p>Tools Utilized: MySQL Community Server, MySQL Workbench</p>
<h2>Setup New Connection</h2>
<p>Connection Method: Standard (TCP/IP) is the default method<br>
Hostname: 127.0.0.1 is the address of the local machine<br>
Port: 3306 is the default port for the MySQL server<br>
Username: root is the username for admin<br>
Password: this pw was set during MySQL installation</p>
<h2>Notes on MySQL Workbench's Interface</h2>
<b>Administration tab</b><p>Used to do administrative work such as starting/stopping a server, importing/exporting data, etc.</p>
<b>Schemas tab</b><p>Shows the available databases in the current database server.</p>
<b>Tables</b><p>Where we store data<br>
Every column in a table represents a DB field (ex. customer_id).<br>
Every row in the table is referred to as a record.</p>
<b>Views</b> <p>Virtaul tables (can combine data from multiple tables and put them in a view) that are
used to make reports.</p>
<b>Stored Procedures & Functions</b><p>Little programs that we store inside of our DB for querying data.<br>
Ex. procedue for getting all the customers in a given city, so we call that procedure to get all<br>
the customers in San Francisco, and this will return all the customers in San Francisco.</p>
