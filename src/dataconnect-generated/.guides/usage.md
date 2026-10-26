# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createUser, updateMyProfile, getMyProfile, saveDestination, unsaveDestination, listMySavedDestinations, submitQuiz, getMyQuizResponses, listAllDestinations, getDestinationDetails } from '@dataconnect/generated';


// Operation CreateUser:  For variables, look at type CreateUserVars in ../index.d.ts
const { data } = await CreateUser(dataConnect, createUserVars);

// Operation UpdateMyProfile:  For variables, look at type UpdateMyProfileVars in ../index.d.ts
const { data } = await UpdateMyProfile(dataConnect, updateMyProfileVars);

// Operation GetMyProfile: 
const { data } = await GetMyProfile(dataConnect);

// Operation SaveDestination:  For variables, look at type SaveDestinationVars in ../index.d.ts
const { data } = await SaveDestination(dataConnect, saveDestinationVars);

// Operation UnsaveDestination:  For variables, look at type UnsaveDestinationVars in ../index.d.ts
const { data } = await UnsaveDestination(dataConnect, unsaveDestinationVars);

// Operation ListMySavedDestinations: 
const { data } = await ListMySavedDestinations(dataConnect);

// Operation SubmitQuiz:  For variables, look at type SubmitQuizVars in ../index.d.ts
const { data } = await SubmitQuiz(dataConnect, submitQuizVars);

// Operation GetMyQuizResponses: 
const { data } = await GetMyQuizResponses(dataConnect);

// Operation ListAllDestinations: 
const { data } = await ListAllDestinations(dataConnect);

// Operation GetDestinationDetails:  For variables, look at type GetDestinationDetailsVars in ../index.d.ts
const { data } = await GetDestinationDetails(dataConnect, getDestinationDetailsVars);


```