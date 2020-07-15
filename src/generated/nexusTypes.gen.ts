/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  CreatePostResponse: { // root type
    message?: string | null; // String
    posts?: NexusGenRootTypes['Post'][] | null; // [Post!]
    success: boolean; // Boolean!
  }
  CreateUserResponse: { // root type
    message?: string | null; // String
    success: boolean; // Boolean!
    users?: NexusGenRootTypes['User'][] | null; // [User!]
  }
  Mutation: {};
  Post: { // root type
    author?: NexusGenRootTypes['User'] | null; // User
    content?: string | null; // String
    id: string; // ID!
    published: boolean; // Boolean!
    title: string; // String!
  }
  Profile: { // root type
    bio: string; // String!
    id: string; // ID!
    user: NexusGenRootTypes['User']; // User!
  }
  Query: {};
  User: { // root type
    email: string; // String!
    id: string; // ID!
    name?: string | null; // String
    posts?: NexusGenRootTypes['Post'][] | null; // [Post!]
    profile?: NexusGenRootTypes['Profile'] | null; // Profile
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
}

export interface NexusGenFieldTypes {
  CreatePostResponse: { // field return type
    message: string | null; // String
    posts: NexusGenRootTypes['Post'][] | null; // [Post!]
    success: boolean; // Boolean!
  }
  CreateUserResponse: { // field return type
    message: string | null; // String
    success: boolean; // Boolean!
    users: NexusGenRootTypes['User'][] | null; // [User!]
  }
  Mutation: { // field return type
    createPost: NexusGenRootTypes['CreatePostResponse']; // CreatePostResponse!
    createUser: NexusGenRootTypes['CreateUserResponse']; // CreateUserResponse!
  }
  Post: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    content: string | null; // String
    id: string; // ID!
    published: boolean; // Boolean!
    title: string; // String!
  }
  Profile: { // field return type
    bio: string; // String!
    id: string; // ID!
    user: NexusGenRootTypes['User']; // User!
  }
  Query: { // field return type
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
    profiles: NexusGenRootTypes['Profile'][]; // [Profile!]!
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  User: { // field return type
    email: string; // String!
    id: string; // ID!
    name: string | null; // String
    posts: NexusGenRootTypes['Post'][] | null; // [Post!]
    profile: NexusGenRootTypes['Profile'] | null; // Profile
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPost: { // args
      content: string; // String!
      title: string; // String!
    }
    createUser: { // args
      email: string; // String!
      name?: string | null; // String
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "CreatePostResponse" | "CreateUserResponse" | "Mutation" | "Post" | "Profile" | "Query" | "User";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}