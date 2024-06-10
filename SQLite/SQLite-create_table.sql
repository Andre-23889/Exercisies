
CREATE TABLE books (
	book_id INTEGER PRIMARY KEY AUTOINCREMENT, 
  	title VARCHAR(50) NOT NULL, 
  	author VARCHAR(20) NOT NULL, 
  	genre VARCHAR(20), 
  	published_year INT(4), 
  	isbn INT(13), 
  	price DECIMAL(5,2), 
  	rating DECIMAL(1,1), 
  	stock_count INT
) 
