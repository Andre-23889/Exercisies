esercizio 1
Create a Counter function component and create a new state variable called counter initialized to 0. The Counter component should render the counter value within an h2 tag, and the counter value should be incremented every time the user clicks on a button.
Tip: use the useState hook. Make it so that the initial value of the counter and the increment amount are passed as props to the component. 
When calling "setter" function to increment the counter, should the parameter be a function or an immediate value? Why?

esercizio 2
Extract the h2 tag showing the counter state variable into a new component called CounterDisplay and render it within the Counter component, passing it the count state variable as a prop.
Add a decrement button and a reset button to the Counter component. The decrement button should decrement the counter by the amount passed as a prop, and the reset button should reset the counter to the initial value passed as a prop.