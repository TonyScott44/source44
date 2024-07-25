-- The SELECT Statement
--------------------------------------------------------------------------------------------------------------------------------------         
-- If a DB isn't in bold font, it has not been selected for query.
-- To select a db for query, use the USE keyword
USE sql_store; 

-- Keep in mind, SQL isn't a case sensitive language so it doesn't  really matter,
--  the statements, etc. still get executed.  With that said, it's still good practice
--  to capitalize all characters of a keyword and use lowercase for anything else.

--  Every statement must be terminated with a semi-colon.

--  SELECT *                            Selects all columns 
--  SELECT customer_id, first_name      Selects specific columns

-- MySQL Workbench shortcut to execute query is Shift -> Command -> Enter

-- Give me the full record/row of the customer from the customers table with customer_id  1
SELECT *                   -- Select all columns to return
FROM customers            
WHERE customer_id = 1;     -- Filters by customer_id = 1
-- Output (Dummy Data)
-- customer_id     first_name      last_name       birth_date      phone   address city    state   points
--  1       Babara  MacCaffrey      1986-03-28      781-932-9754    0 Sage Terrace  Waltham MA      2273

-- Give me the full records/rows of all the customers from the customers table and order them in ascending order by customer_id.
SELECT *
FROM customers
ORDER BY customer_id;     -- Specify the columns we want to sort result on
-- Output (Dummy Data)
-- customer_id     first_name      last_name       birth_date      phone   address city    state   points
-- 1       Babara  MacCaffrey      1986-03-28      781-932-9754    0 Sage Terrace  Waltham MA      2273
-- 2       Ines    Brushfield      1986-04-13      804-427-9456    14187 Commercial Trail  Hampton VA      947
-- 3       Freddi  Boagey  1985-02-07      719-724-7869    251 Springs Junction    Colorado Springs        CO      2967
-- 4       Ambur   Roseburgh       1974-04-14      407-231-8017    30 Arapahoe Terrace     Orlando FL      457
-- 5       Clemmie Betchley        1973-11-07      NULL    5 Spohn Circle  Arlington       TX      3675
-- 6       Elka    Twiddell        1991-09-04      312-480-8498    7 Manley Drive  Chicago IL      3073
-- 7       Ilene   Dowson  1964-08-30      615-641-4759    50 Lillian Crossing     Nashville       TN      1672
-- 8       Thacher Naseby  1993-07-17      941-527-3977    538 Mosinee Center      Sarasota        FL      205
-- 9       Romola  Rumgay  1992-05-23      559-181-3744    3520 Ohio Trail Visalia CA      1486
-- 10      Levy    Mynett  1969-10-13      404-246-3370    68 Lawn Avenue  Atlanta GA      796

-- Give me all the cities associate with our customers
SELECT city
FROM customers
ORDER BY customer_id;
-- Output
-- city
-- Waltham
-- Hampton
-- Colorado Springs
-- Orlando
-- Arlington
-- Chicago
-- Nashville
-- Sarasota
-- Visalia
-- Atlanta

-- The main takeaway here is that these clauses/statements must be in order starting with SELECT, FROM, WHERE, & ORDER BY. 
--  If they are out of order,it will generate a syntax error.

-- The SELECT Clause
--------------------------------------------------------------------------------------------------------------------------------------  
