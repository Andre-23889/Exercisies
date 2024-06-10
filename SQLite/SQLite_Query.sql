SELECT name FROM tested  WHERE survived = 1 AND sex = 'female' AND age > 30 ORDER BY name DESC
SELECT sex,AVG(age) FROM tested WHERE sex = 'male' and survived = 0
SELECT * from tested WHERE fare < 50 AND fare > 20 and embarked = 'C'
SELECT SUM(survived) from tested WHERE pclass = 1
SELECT * from tested WHERE fare > 75 and embarked = 'C'