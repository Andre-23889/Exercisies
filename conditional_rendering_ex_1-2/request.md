Modify the Welcome component so that the Age component is rendered 5 times. For every time use conditional rendering with one of the following conditions:
- The Age component is rendered only if the age prop is greater than 18.
- The Age component is rendered only if the age prop is present.
- The Age component is rendered only if the age prop is greater than 18 and less than 65.
- The Age component is rendered only if the age prop is greater than 18,
	 less than 65 and the name prop is equal to "John".

exercise 2:
modify the Age component so that the "Your age is " message is rendered only if the age prop is greater than 18. Otherwise render the "You are very young!" message.
(soluzione esercizio 2, aggiungo questa riga: {!!age && age < 18 && <p>You are very young!</p>} )