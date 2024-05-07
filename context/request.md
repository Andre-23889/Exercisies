Create a LanguageContext and wrap the Clock component within its provider.
Add a select tag to the component in which the Clock component is rendered that allows the user to select the language, and pass it as a value to the Provider.
Consume the LanguageContext within the Clock component by using the  hook, and show the "current time" message in the correct language.