import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  displayName: string;
  email: string;
}

export interface DeleteRecommendationData {
  recommendation_delete?: Recommendation_Key | null;
}

export interface DeleteRecommendationVariables {
  id: UUIDString;
}

export interface Destination_Key {
  id: UUIDString;
  __typename?: 'Destination_Key';
}

export interface GetDestinationDetailsData {
  destination?: {
    name: string;
    averageCostPerDay?: number | null;
    climateType?: string | null;
  };
}

export interface GetDestinationDetailsVariables {
  id: UUIDString;
}

export interface GetMyProfileData {
  user?: {
    displayName: string;
    email: string;
    travelArchetype?: string | null;
  };
}

export interface GetMyQuizResponsesData {
  quizResponses: ({
    answers: string;
  })[];
}

export interface GetRecommendationsData {
  recommendations: ({
    destination: {
      name: string;
    };
    compatibilityScore: number;
  })[];
}

export interface ListAllDestinationsData {
  destinations: ({
    name: string;
    country: string;
    description: string;
    popularityScore?: number | null;
  })[];
}

export interface ListMySavedDestinationsData {
  savedLists: ({
    destination: {
      name: string;
      country: string;
    };
  })[];
}

export interface QuizResponse_Key {
  id: UUIDString;
  __typename?: 'QuizResponse_Key';
}

export interface Recommendation_Key {
  id: UUIDString;
  __typename?: 'Recommendation_Key';
}

export interface SaveDestinationData {
  savedList_insert: SavedList_Key;
}

export interface SaveDestinationVariables {
  destinationId: UUIDString;
}

export interface SavedList_Key {
  userId: UUIDString;
  destinationId: UUIDString;
  __typename?: 'SavedList_Key';
}

export interface SubmitQuizData {
  quizResponse_insert: QuizResponse_Key;
}

export interface SubmitQuizVariables {
  answers: string;
}

export interface UnsaveDestinationData {
  savedList_delete?: SavedList_Key | null;
}

export interface UnsaveDestinationVariables {
  destinationId: UUIDString;
}

export interface UpdateMyProfileData {
  user_update?: User_Key | null;
}

export interface UpdateMyProfileVariables {
  displayName?: string | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface UpdateMyProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: UpdateMyProfileVariables): MutationRef<UpdateMyProfileData, UpdateMyProfileVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: UpdateMyProfileVariables): MutationRef<UpdateMyProfileData, UpdateMyProfileVariables>;
  operationName: string;
}
export const updateMyProfileRef: UpdateMyProfileRef;

export function updateMyProfile(vars?: UpdateMyProfileVariables): MutationPromise<UpdateMyProfileData, UpdateMyProfileVariables>;
export function updateMyProfile(dc: DataConnect, vars?: UpdateMyProfileVariables): MutationPromise<UpdateMyProfileData, UpdateMyProfileVariables>;

interface GetMyProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyProfileData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyProfileData, undefined>;
  operationName: string;
}
export const getMyProfileRef: GetMyProfileRef;

export function getMyProfile(options?: ExecuteQueryOptions): QueryPromise<GetMyProfileData, undefined>;
export function getMyProfile(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyProfileData, undefined>;

interface SaveDestinationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: SaveDestinationVariables): MutationRef<SaveDestinationData, SaveDestinationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: SaveDestinationVariables): MutationRef<SaveDestinationData, SaveDestinationVariables>;
  operationName: string;
}
export const saveDestinationRef: SaveDestinationRef;

export function saveDestination(vars: SaveDestinationVariables): MutationPromise<SaveDestinationData, SaveDestinationVariables>;
export function saveDestination(dc: DataConnect, vars: SaveDestinationVariables): MutationPromise<SaveDestinationData, SaveDestinationVariables>;

interface UnsaveDestinationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UnsaveDestinationVariables): MutationRef<UnsaveDestinationData, UnsaveDestinationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UnsaveDestinationVariables): MutationRef<UnsaveDestinationData, UnsaveDestinationVariables>;
  operationName: string;
}
export const unsaveDestinationRef: UnsaveDestinationRef;

export function unsaveDestination(vars: UnsaveDestinationVariables): MutationPromise<UnsaveDestinationData, UnsaveDestinationVariables>;
export function unsaveDestination(dc: DataConnect, vars: UnsaveDestinationVariables): MutationPromise<UnsaveDestinationData, UnsaveDestinationVariables>;

interface ListMySavedDestinationsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMySavedDestinationsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMySavedDestinationsData, undefined>;
  operationName: string;
}
export const listMySavedDestinationsRef: ListMySavedDestinationsRef;

export function listMySavedDestinations(options?: ExecuteQueryOptions): QueryPromise<ListMySavedDestinationsData, undefined>;
export function listMySavedDestinations(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMySavedDestinationsData, undefined>;

interface SubmitQuizRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: SubmitQuizVariables): MutationRef<SubmitQuizData, SubmitQuizVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: SubmitQuizVariables): MutationRef<SubmitQuizData, SubmitQuizVariables>;
  operationName: string;
}
export const submitQuizRef: SubmitQuizRef;

export function submitQuiz(vars: SubmitQuizVariables): MutationPromise<SubmitQuizData, SubmitQuizVariables>;
export function submitQuiz(dc: DataConnect, vars: SubmitQuizVariables): MutationPromise<SubmitQuizData, SubmitQuizVariables>;

interface GetMyQuizResponsesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyQuizResponsesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyQuizResponsesData, undefined>;
  operationName: string;
}
export const getMyQuizResponsesRef: GetMyQuizResponsesRef;

export function getMyQuizResponses(options?: ExecuteQueryOptions): QueryPromise<GetMyQuizResponsesData, undefined>;
export function getMyQuizResponses(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyQuizResponsesData, undefined>;

interface ListAllDestinationsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllDestinationsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAllDestinationsData, undefined>;
  operationName: string;
}
export const listAllDestinationsRef: ListAllDestinationsRef;

export function listAllDestinations(options?: ExecuteQueryOptions): QueryPromise<ListAllDestinationsData, undefined>;
export function listAllDestinations(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAllDestinationsData, undefined>;

interface GetDestinationDetailsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetDestinationDetailsVariables): QueryRef<GetDestinationDetailsData, GetDestinationDetailsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetDestinationDetailsVariables): QueryRef<GetDestinationDetailsData, GetDestinationDetailsVariables>;
  operationName: string;
}
export const getDestinationDetailsRef: GetDestinationDetailsRef;

export function getDestinationDetails(vars: GetDestinationDetailsVariables, options?: ExecuteQueryOptions): QueryPromise<GetDestinationDetailsData, GetDestinationDetailsVariables>;
export function getDestinationDetails(dc: DataConnect, vars: GetDestinationDetailsVariables, options?: ExecuteQueryOptions): QueryPromise<GetDestinationDetailsData, GetDestinationDetailsVariables>;

interface GetRecommendationsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetRecommendationsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetRecommendationsData, undefined>;
  operationName: string;
}
export const getRecommendationsRef: GetRecommendationsRef;

export function getRecommendations(options?: ExecuteQueryOptions): QueryPromise<GetRecommendationsData, undefined>;
export function getRecommendations(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetRecommendationsData, undefined>;

interface DeleteRecommendationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteRecommendationVariables): MutationRef<DeleteRecommendationData, DeleteRecommendationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteRecommendationVariables): MutationRef<DeleteRecommendationData, DeleteRecommendationVariables>;
  operationName: string;
}
export const deleteRecommendationRef: DeleteRecommendationRef;

export function deleteRecommendation(vars: DeleteRecommendationVariables): MutationPromise<DeleteRecommendationData, DeleteRecommendationVariables>;
export function deleteRecommendation(dc: DataConnect, vars: DeleteRecommendationVariables): MutationPromise<DeleteRecommendationData, DeleteRecommendationVariables>;

