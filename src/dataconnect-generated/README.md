# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetMyProfile*](#getmyprofile)
  - [*ListMySavedDestinations*](#listmysaveddestinations)
  - [*GetMyQuizResponses*](#getmyquizresponses)
  - [*ListAllDestinations*](#listalldestinations)
  - [*GetDestinationDetails*](#getdestinationdetails)
  - [*GetRecommendations*](#getrecommendations)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*UpdateMyProfile*](#updatemyprofile)
  - [*SaveDestination*](#savedestination)
  - [*UnsaveDestination*](#unsavedestination)
  - [*SubmitQuiz*](#submitquiz)
  - [*DeleteRecommendation*](#deleterecommendation)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetMyProfile
You can execute the `GetMyProfile` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyProfile(options?: ExecuteQueryOptions): QueryPromise<GetMyProfileData, undefined>;

interface GetMyProfileRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyProfileData, undefined>;
}
export const getMyProfileRef: GetMyProfileRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyProfile(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyProfileData, undefined>;

interface GetMyProfileRef {
  ...
  (dc: DataConnect): QueryRef<GetMyProfileData, undefined>;
}
export const getMyProfileRef: GetMyProfileRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyProfileRef:
```typescript
const name = getMyProfileRef.operationName;
console.log(name);
```

### Variables
The `GetMyProfile` query has no variables.
### Return Type
Recall that executing the `GetMyProfile` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyProfileData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMyProfileData {
  user?: {
    displayName: string;
    email: string;
    travelArchetype?: string | null;
  };
}
```
### Using `GetMyProfile`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyProfile } from '@dataconnect/generated';


// Call the `getMyProfile()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyProfile();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyProfile(dataConnect);

console.log(data.user);

// Or, you can use the `Promise` API.
getMyProfile().then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetMyProfile`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyProfileRef } from '@dataconnect/generated';


// Call the `getMyProfileRef()` function to get a reference to the query.
const ref = getMyProfileRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyProfileRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## ListMySavedDestinations
You can execute the `ListMySavedDestinations` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMySavedDestinations(options?: ExecuteQueryOptions): QueryPromise<ListMySavedDestinationsData, undefined>;

interface ListMySavedDestinationsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMySavedDestinationsData, undefined>;
}
export const listMySavedDestinationsRef: ListMySavedDestinationsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMySavedDestinations(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMySavedDestinationsData, undefined>;

interface ListMySavedDestinationsRef {
  ...
  (dc: DataConnect): QueryRef<ListMySavedDestinationsData, undefined>;
}
export const listMySavedDestinationsRef: ListMySavedDestinationsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMySavedDestinationsRef:
```typescript
const name = listMySavedDestinationsRef.operationName;
console.log(name);
```

### Variables
The `ListMySavedDestinations` query has no variables.
### Return Type
Recall that executing the `ListMySavedDestinations` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMySavedDestinationsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMySavedDestinationsData {
  savedLists: ({
    destination: {
      name: string;
      country: string;
    };
  })[];
}
```
### Using `ListMySavedDestinations`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMySavedDestinations } from '@dataconnect/generated';


// Call the `listMySavedDestinations()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMySavedDestinations();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMySavedDestinations(dataConnect);

console.log(data.savedLists);

// Or, you can use the `Promise` API.
listMySavedDestinations().then((response) => {
  const data = response.data;
  console.log(data.savedLists);
});
```

### Using `ListMySavedDestinations`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMySavedDestinationsRef } from '@dataconnect/generated';


// Call the `listMySavedDestinationsRef()` function to get a reference to the query.
const ref = listMySavedDestinationsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMySavedDestinationsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.savedLists);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.savedLists);
});
```

## GetMyQuizResponses
You can execute the `GetMyQuizResponses` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyQuizResponses(options?: ExecuteQueryOptions): QueryPromise<GetMyQuizResponsesData, undefined>;

interface GetMyQuizResponsesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyQuizResponsesData, undefined>;
}
export const getMyQuizResponsesRef: GetMyQuizResponsesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyQuizResponses(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyQuizResponsesData, undefined>;

interface GetMyQuizResponsesRef {
  ...
  (dc: DataConnect): QueryRef<GetMyQuizResponsesData, undefined>;
}
export const getMyQuizResponsesRef: GetMyQuizResponsesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyQuizResponsesRef:
```typescript
const name = getMyQuizResponsesRef.operationName;
console.log(name);
```

### Variables
The `GetMyQuizResponses` query has no variables.
### Return Type
Recall that executing the `GetMyQuizResponses` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyQuizResponsesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMyQuizResponsesData {
  quizResponses: ({
    answers: string;
  })[];
}
```
### Using `GetMyQuizResponses`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyQuizResponses } from '@dataconnect/generated';


// Call the `getMyQuizResponses()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyQuizResponses();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyQuizResponses(dataConnect);

console.log(data.quizResponses);

// Or, you can use the `Promise` API.
getMyQuizResponses().then((response) => {
  const data = response.data;
  console.log(data.quizResponses);
});
```

### Using `GetMyQuizResponses`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyQuizResponsesRef } from '@dataconnect/generated';


// Call the `getMyQuizResponsesRef()` function to get a reference to the query.
const ref = getMyQuizResponsesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyQuizResponsesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.quizResponses);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.quizResponses);
});
```

## ListAllDestinations
You can execute the `ListAllDestinations` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listAllDestinations(options?: ExecuteQueryOptions): QueryPromise<ListAllDestinationsData, undefined>;

interface ListAllDestinationsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllDestinationsData, undefined>;
}
export const listAllDestinationsRef: ListAllDestinationsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAllDestinations(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAllDestinationsData, undefined>;

interface ListAllDestinationsRef {
  ...
  (dc: DataConnect): QueryRef<ListAllDestinationsData, undefined>;
}
export const listAllDestinationsRef: ListAllDestinationsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAllDestinationsRef:
```typescript
const name = listAllDestinationsRef.operationName;
console.log(name);
```

### Variables
The `ListAllDestinations` query has no variables.
### Return Type
Recall that executing the `ListAllDestinations` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAllDestinationsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListAllDestinationsData {
  destinations: ({
    name: string;
    country: string;
    description: string;
    popularityScore?: number | null;
  })[];
}
```
### Using `ListAllDestinations`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAllDestinations } from '@dataconnect/generated';


// Call the `listAllDestinations()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAllDestinations();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAllDestinations(dataConnect);

console.log(data.destinations);

// Or, you can use the `Promise` API.
listAllDestinations().then((response) => {
  const data = response.data;
  console.log(data.destinations);
});
```

### Using `ListAllDestinations`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAllDestinationsRef } from '@dataconnect/generated';


// Call the `listAllDestinationsRef()` function to get a reference to the query.
const ref = listAllDestinationsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAllDestinationsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.destinations);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.destinations);
});
```

## GetDestinationDetails
You can execute the `GetDestinationDetails` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getDestinationDetails(vars: GetDestinationDetailsVariables, options?: ExecuteQueryOptions): QueryPromise<GetDestinationDetailsData, GetDestinationDetailsVariables>;

interface GetDestinationDetailsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetDestinationDetailsVariables): QueryRef<GetDestinationDetailsData, GetDestinationDetailsVariables>;
}
export const getDestinationDetailsRef: GetDestinationDetailsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getDestinationDetails(dc: DataConnect, vars: GetDestinationDetailsVariables, options?: ExecuteQueryOptions): QueryPromise<GetDestinationDetailsData, GetDestinationDetailsVariables>;

interface GetDestinationDetailsRef {
  ...
  (dc: DataConnect, vars: GetDestinationDetailsVariables): QueryRef<GetDestinationDetailsData, GetDestinationDetailsVariables>;
}
export const getDestinationDetailsRef: GetDestinationDetailsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getDestinationDetailsRef:
```typescript
const name = getDestinationDetailsRef.operationName;
console.log(name);
```

### Variables
The `GetDestinationDetails` query requires an argument of type `GetDestinationDetailsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetDestinationDetailsVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetDestinationDetails` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetDestinationDetailsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetDestinationDetailsData {
  destination?: {
    name: string;
    averageCostPerDay?: number | null;
    climateType?: string | null;
  };
}
```
### Using `GetDestinationDetails`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getDestinationDetails, GetDestinationDetailsVariables } from '@dataconnect/generated';

// The `GetDestinationDetails` query requires an argument of type `GetDestinationDetailsVariables`:
const getDestinationDetailsVars: GetDestinationDetailsVariables = {
  id: ..., 
};

// Call the `getDestinationDetails()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getDestinationDetails(getDestinationDetailsVars);
// Variables can be defined inline as well.
const { data } = await getDestinationDetails({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getDestinationDetails(dataConnect, getDestinationDetailsVars);

console.log(data.destination);

// Or, you can use the `Promise` API.
getDestinationDetails(getDestinationDetailsVars).then((response) => {
  const data = response.data;
  console.log(data.destination);
});
```

### Using `GetDestinationDetails`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getDestinationDetailsRef, GetDestinationDetailsVariables } from '@dataconnect/generated';

// The `GetDestinationDetails` query requires an argument of type `GetDestinationDetailsVariables`:
const getDestinationDetailsVars: GetDestinationDetailsVariables = {
  id: ..., 
};

// Call the `getDestinationDetailsRef()` function to get a reference to the query.
const ref = getDestinationDetailsRef(getDestinationDetailsVars);
// Variables can be defined inline as well.
const ref = getDestinationDetailsRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getDestinationDetailsRef(dataConnect, getDestinationDetailsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.destination);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.destination);
});
```

## GetRecommendations
You can execute the `GetRecommendations` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getRecommendations(options?: ExecuteQueryOptions): QueryPromise<GetRecommendationsData, undefined>;

interface GetRecommendationsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetRecommendationsData, undefined>;
}
export const getRecommendationsRef: GetRecommendationsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getRecommendations(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetRecommendationsData, undefined>;

interface GetRecommendationsRef {
  ...
  (dc: DataConnect): QueryRef<GetRecommendationsData, undefined>;
}
export const getRecommendationsRef: GetRecommendationsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getRecommendationsRef:
```typescript
const name = getRecommendationsRef.operationName;
console.log(name);
```

### Variables
The `GetRecommendations` query has no variables.
### Return Type
Recall that executing the `GetRecommendations` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetRecommendationsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetRecommendationsData {
  recommendations: ({
    destination: {
      name: string;
    };
    compatibilityScore: number;
  })[];
}
```
### Using `GetRecommendations`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getRecommendations } from '@dataconnect/generated';


// Call the `getRecommendations()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getRecommendations();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getRecommendations(dataConnect);

console.log(data.recommendations);

// Or, you can use the `Promise` API.
getRecommendations().then((response) => {
  const data = response.data;
  console.log(data.recommendations);
});
```

### Using `GetRecommendations`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getRecommendationsRef } from '@dataconnect/generated';


// Call the `getRecommendationsRef()` function to get a reference to the query.
const ref = getRecommendationsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getRecommendationsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.recommendations);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.recommendations);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation requires an argument of type `CreateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserVariables {
  displayName: string;
  email: string;
}
```
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  displayName: ..., 
  email: ..., 
};

// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser(createUserVars);
// Variables can be defined inline as well.
const { data } = await createUser({ displayName: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect, createUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser(createUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  displayName: ..., 
  email: ..., 
};

// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef(createUserVars);
// Variables can be defined inline as well.
const ref = createUserRef({ displayName: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect, createUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## UpdateMyProfile
You can execute the `UpdateMyProfile` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateMyProfile(vars?: UpdateMyProfileVariables): MutationPromise<UpdateMyProfileData, UpdateMyProfileVariables>;

interface UpdateMyProfileRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: UpdateMyProfileVariables): MutationRef<UpdateMyProfileData, UpdateMyProfileVariables>;
}
export const updateMyProfileRef: UpdateMyProfileRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateMyProfile(dc: DataConnect, vars?: UpdateMyProfileVariables): MutationPromise<UpdateMyProfileData, UpdateMyProfileVariables>;

interface UpdateMyProfileRef {
  ...
  (dc: DataConnect, vars?: UpdateMyProfileVariables): MutationRef<UpdateMyProfileData, UpdateMyProfileVariables>;
}
export const updateMyProfileRef: UpdateMyProfileRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateMyProfileRef:
```typescript
const name = updateMyProfileRef.operationName;
console.log(name);
```

### Variables
The `UpdateMyProfile` mutation has an optional argument of type `UpdateMyProfileVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateMyProfileVariables {
  displayName?: string | null;
}
```
### Return Type
Recall that executing the `UpdateMyProfile` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateMyProfileData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateMyProfileData {
  user_update?: User_Key | null;
}
```
### Using `UpdateMyProfile`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateMyProfile, UpdateMyProfileVariables } from '@dataconnect/generated';

// The `UpdateMyProfile` mutation has an optional argument of type `UpdateMyProfileVariables`:
const updateMyProfileVars: UpdateMyProfileVariables = {
  displayName: ..., // optional
};

// Call the `updateMyProfile()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateMyProfile(updateMyProfileVars);
// Variables can be defined inline as well.
const { data } = await updateMyProfile({ displayName: ..., });
// Since all variables are optional for this mutation, you can omit the `UpdateMyProfileVariables` argument.
const { data } = await updateMyProfile();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateMyProfile(dataConnect, updateMyProfileVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateMyProfile(updateMyProfileVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateMyProfile`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateMyProfileRef, UpdateMyProfileVariables } from '@dataconnect/generated';

// The `UpdateMyProfile` mutation has an optional argument of type `UpdateMyProfileVariables`:
const updateMyProfileVars: UpdateMyProfileVariables = {
  displayName: ..., // optional
};

// Call the `updateMyProfileRef()` function to get a reference to the mutation.
const ref = updateMyProfileRef(updateMyProfileVars);
// Variables can be defined inline as well.
const ref = updateMyProfileRef({ displayName: ..., });
// Since all variables are optional for this mutation, you can omit the `UpdateMyProfileVariables` argument.
const ref = updateMyProfileRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateMyProfileRef(dataConnect, updateMyProfileVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## SaveDestination
You can execute the `SaveDestination` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
saveDestination(vars: SaveDestinationVariables): MutationPromise<SaveDestinationData, SaveDestinationVariables>;

interface SaveDestinationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: SaveDestinationVariables): MutationRef<SaveDestinationData, SaveDestinationVariables>;
}
export const saveDestinationRef: SaveDestinationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
saveDestination(dc: DataConnect, vars: SaveDestinationVariables): MutationPromise<SaveDestinationData, SaveDestinationVariables>;

interface SaveDestinationRef {
  ...
  (dc: DataConnect, vars: SaveDestinationVariables): MutationRef<SaveDestinationData, SaveDestinationVariables>;
}
export const saveDestinationRef: SaveDestinationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the saveDestinationRef:
```typescript
const name = saveDestinationRef.operationName;
console.log(name);
```

### Variables
The `SaveDestination` mutation requires an argument of type `SaveDestinationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface SaveDestinationVariables {
  destinationId: UUIDString;
}
```
### Return Type
Recall that executing the `SaveDestination` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `SaveDestinationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface SaveDestinationData {
  savedList_insert: SavedList_Key;
}
```
### Using `SaveDestination`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, saveDestination, SaveDestinationVariables } from '@dataconnect/generated';

// The `SaveDestination` mutation requires an argument of type `SaveDestinationVariables`:
const saveDestinationVars: SaveDestinationVariables = {
  destinationId: ..., 
};

// Call the `saveDestination()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await saveDestination(saveDestinationVars);
// Variables can be defined inline as well.
const { data } = await saveDestination({ destinationId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await saveDestination(dataConnect, saveDestinationVars);

console.log(data.savedList_insert);

// Or, you can use the `Promise` API.
saveDestination(saveDestinationVars).then((response) => {
  const data = response.data;
  console.log(data.savedList_insert);
});
```

### Using `SaveDestination`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, saveDestinationRef, SaveDestinationVariables } from '@dataconnect/generated';

// The `SaveDestination` mutation requires an argument of type `SaveDestinationVariables`:
const saveDestinationVars: SaveDestinationVariables = {
  destinationId: ..., 
};

// Call the `saveDestinationRef()` function to get a reference to the mutation.
const ref = saveDestinationRef(saveDestinationVars);
// Variables can be defined inline as well.
const ref = saveDestinationRef({ destinationId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = saveDestinationRef(dataConnect, saveDestinationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.savedList_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.savedList_insert);
});
```

## UnsaveDestination
You can execute the `UnsaveDestination` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
unsaveDestination(vars: UnsaveDestinationVariables): MutationPromise<UnsaveDestinationData, UnsaveDestinationVariables>;

interface UnsaveDestinationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UnsaveDestinationVariables): MutationRef<UnsaveDestinationData, UnsaveDestinationVariables>;
}
export const unsaveDestinationRef: UnsaveDestinationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
unsaveDestination(dc: DataConnect, vars: UnsaveDestinationVariables): MutationPromise<UnsaveDestinationData, UnsaveDestinationVariables>;

interface UnsaveDestinationRef {
  ...
  (dc: DataConnect, vars: UnsaveDestinationVariables): MutationRef<UnsaveDestinationData, UnsaveDestinationVariables>;
}
export const unsaveDestinationRef: UnsaveDestinationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the unsaveDestinationRef:
```typescript
const name = unsaveDestinationRef.operationName;
console.log(name);
```

### Variables
The `UnsaveDestination` mutation requires an argument of type `UnsaveDestinationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UnsaveDestinationVariables {
  destinationId: UUIDString;
}
```
### Return Type
Recall that executing the `UnsaveDestination` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UnsaveDestinationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UnsaveDestinationData {
  savedList_delete?: SavedList_Key | null;
}
```
### Using `UnsaveDestination`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, unsaveDestination, UnsaveDestinationVariables } from '@dataconnect/generated';

// The `UnsaveDestination` mutation requires an argument of type `UnsaveDestinationVariables`:
const unsaveDestinationVars: UnsaveDestinationVariables = {
  destinationId: ..., 
};

// Call the `unsaveDestination()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await unsaveDestination(unsaveDestinationVars);
// Variables can be defined inline as well.
const { data } = await unsaveDestination({ destinationId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await unsaveDestination(dataConnect, unsaveDestinationVars);

console.log(data.savedList_delete);

// Or, you can use the `Promise` API.
unsaveDestination(unsaveDestinationVars).then((response) => {
  const data = response.data;
  console.log(data.savedList_delete);
});
```

### Using `UnsaveDestination`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, unsaveDestinationRef, UnsaveDestinationVariables } from '@dataconnect/generated';

// The `UnsaveDestination` mutation requires an argument of type `UnsaveDestinationVariables`:
const unsaveDestinationVars: UnsaveDestinationVariables = {
  destinationId: ..., 
};

// Call the `unsaveDestinationRef()` function to get a reference to the mutation.
const ref = unsaveDestinationRef(unsaveDestinationVars);
// Variables can be defined inline as well.
const ref = unsaveDestinationRef({ destinationId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = unsaveDestinationRef(dataConnect, unsaveDestinationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.savedList_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.savedList_delete);
});
```

## SubmitQuiz
You can execute the `SubmitQuiz` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
submitQuiz(vars: SubmitQuizVariables): MutationPromise<SubmitQuizData, SubmitQuizVariables>;

interface SubmitQuizRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: SubmitQuizVariables): MutationRef<SubmitQuizData, SubmitQuizVariables>;
}
export const submitQuizRef: SubmitQuizRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
submitQuiz(dc: DataConnect, vars: SubmitQuizVariables): MutationPromise<SubmitQuizData, SubmitQuizVariables>;

interface SubmitQuizRef {
  ...
  (dc: DataConnect, vars: SubmitQuizVariables): MutationRef<SubmitQuizData, SubmitQuizVariables>;
}
export const submitQuizRef: SubmitQuizRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the submitQuizRef:
```typescript
const name = submitQuizRef.operationName;
console.log(name);
```

### Variables
The `SubmitQuiz` mutation requires an argument of type `SubmitQuizVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface SubmitQuizVariables {
  answers: string;
}
```
### Return Type
Recall that executing the `SubmitQuiz` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `SubmitQuizData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface SubmitQuizData {
  quizResponse_insert: QuizResponse_Key;
}
```
### Using `SubmitQuiz`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, submitQuiz, SubmitQuizVariables } from '@dataconnect/generated';

// The `SubmitQuiz` mutation requires an argument of type `SubmitQuizVariables`:
const submitQuizVars: SubmitQuizVariables = {
  answers: ..., 
};

// Call the `submitQuiz()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await submitQuiz(submitQuizVars);
// Variables can be defined inline as well.
const { data } = await submitQuiz({ answers: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await submitQuiz(dataConnect, submitQuizVars);

console.log(data.quizResponse_insert);

// Or, you can use the `Promise` API.
submitQuiz(submitQuizVars).then((response) => {
  const data = response.data;
  console.log(data.quizResponse_insert);
});
```

### Using `SubmitQuiz`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, submitQuizRef, SubmitQuizVariables } from '@dataconnect/generated';

// The `SubmitQuiz` mutation requires an argument of type `SubmitQuizVariables`:
const submitQuizVars: SubmitQuizVariables = {
  answers: ..., 
};

// Call the `submitQuizRef()` function to get a reference to the mutation.
const ref = submitQuizRef(submitQuizVars);
// Variables can be defined inline as well.
const ref = submitQuizRef({ answers: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = submitQuizRef(dataConnect, submitQuizVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.quizResponse_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.quizResponse_insert);
});
```

## DeleteRecommendation
You can execute the `DeleteRecommendation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteRecommendation(vars: DeleteRecommendationVariables): MutationPromise<DeleteRecommendationData, DeleteRecommendationVariables>;

interface DeleteRecommendationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteRecommendationVariables): MutationRef<DeleteRecommendationData, DeleteRecommendationVariables>;
}
export const deleteRecommendationRef: DeleteRecommendationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteRecommendation(dc: DataConnect, vars: DeleteRecommendationVariables): MutationPromise<DeleteRecommendationData, DeleteRecommendationVariables>;

interface DeleteRecommendationRef {
  ...
  (dc: DataConnect, vars: DeleteRecommendationVariables): MutationRef<DeleteRecommendationData, DeleteRecommendationVariables>;
}
export const deleteRecommendationRef: DeleteRecommendationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteRecommendationRef:
```typescript
const name = deleteRecommendationRef.operationName;
console.log(name);
```

### Variables
The `DeleteRecommendation` mutation requires an argument of type `DeleteRecommendationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteRecommendationVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteRecommendation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteRecommendationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteRecommendationData {
  recommendation_delete?: Recommendation_Key | null;
}
```
### Using `DeleteRecommendation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteRecommendation, DeleteRecommendationVariables } from '@dataconnect/generated';

// The `DeleteRecommendation` mutation requires an argument of type `DeleteRecommendationVariables`:
const deleteRecommendationVars: DeleteRecommendationVariables = {
  id: ..., 
};

// Call the `deleteRecommendation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteRecommendation(deleteRecommendationVars);
// Variables can be defined inline as well.
const { data } = await deleteRecommendation({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteRecommendation(dataConnect, deleteRecommendationVars);

console.log(data.recommendation_delete);

// Or, you can use the `Promise` API.
deleteRecommendation(deleteRecommendationVars).then((response) => {
  const data = response.data;
  console.log(data.recommendation_delete);
});
```

### Using `DeleteRecommendation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteRecommendationRef, DeleteRecommendationVariables } from '@dataconnect/generated';

// The `DeleteRecommendation` mutation requires an argument of type `DeleteRecommendationVariables`:
const deleteRecommendationVars: DeleteRecommendationVariables = {
  id: ..., 
};

// Call the `deleteRecommendationRef()` function to get a reference to the mutation.
const ref = deleteRecommendationRef(deleteRecommendationVars);
// Variables can be defined inline as well.
const ref = deleteRecommendationRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteRecommendationRef(dataConnect, deleteRecommendationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.recommendation_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.recommendation_delete);
});
```

