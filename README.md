# BCM Backend Interview

## Requirements

Node > 16.0

## Usability

`node index.js from=DD-MM-YYY to=DD-MM-YYYY format=json|csv`

## Tests

`npm i && npm test`

## INFORMATION

- This is a 2 hours project
- I will try not to use any node_modules

## CONTEXT

- We have access to 3 ENDPOINTS to retrieve power data during a period from some centrals
- In the endpoint responses, the segments aren't the same, the outputs format aren't the same and the property names aren't the same
- We want to aggregate all theses data

## TODOS

- [X] Retrieve command line arguments
- [X] Verify required command line arguments 
- [] Verify command line arguments validity
- [X] Retrieve centrals data
- [X] Format centrals data
- [X] Convert segments to same duration
- [] Fill missing data
- [X] Aggregate segments power
- [X] Output data

## RETEX AFTER 2 HOURS

### GOODS
- Satisfy to have an aggregated output at the end

### BADS
- No tests, should have been a great idea to add some, but it was difficult with the choice not to use any node_modules
- No node_modules, it would have been easier with some like `date-fns` or `node-fetch`
- Not enough comments (JSDOC), I started to write some, but it takes time and i couldn't have finish it. I think variable names are quite evocative, but the project needs some typedef to be more readable

## IMPROVMENTS AFTER 2 HOURS

- [X] Fill missing data
- [X] Add some tests
- [X] Add a little bit of JSdoc

## Author

Simon Boennec