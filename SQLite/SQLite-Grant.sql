CREATE ROLE assistant;
GRANT assistant TO martin@localhost;
GRANT SELECT, UPDATE ON books TO assistant;