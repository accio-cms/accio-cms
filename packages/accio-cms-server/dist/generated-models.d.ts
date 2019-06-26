import { GraphQLResolveInfo } from 'graphql';
import { ModuleContext } from '@graphql-modules/core';
export declare type Maybe<T> = T | null;
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
export declare type Query = {
    __typename?: 'Query';
    user?: Maybe<User>;
};
export declare type QueryUserArgs = {
    id: Scalars['ID'];
};
export declare type User = {
    __typename?: 'User';
    id: Scalars['ID'];
    username: Scalars['String'];
};
export declare type ResolverTypeWrapper<T> = Promise<T> | T;
export declare type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export declare type StitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export declare type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | StitchingResolver<TResult, TParent, TContext, TArgs>;
export declare type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;
export declare type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}
export declare type SubscriptionResolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>) | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export declare type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes>;
export declare type NextResolverFn<T> = () => Promise<T>;
export declare type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export declare type ResolversTypes = {
    Query: ResolverTypeWrapper<{}>;
    ID: ResolverTypeWrapper<Scalars['ID']>;
    User: ResolverTypeWrapper<User>;
    String: ResolverTypeWrapper<Scalars['String']>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};
/** Mapping between all available schema types and the resolvers parents */
export declare type ResolversParentTypes = {
    Query: {};
    ID: Scalars['ID'];
    User: User;
    String: Scalars['String'];
    Boolean: Scalars['Boolean'];
};
export declare type QueryResolvers<ContextType = ModuleContext, ParentType = ResolversParentTypes['Query']> = {
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, QueryUserArgs>;
};
export declare type UserResolvers<ContextType = ModuleContext, ParentType = ResolversParentTypes['User']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};
export declare type Resolvers<ContextType = ModuleContext> = {
    Query?: QueryResolvers<ContextType>;
    User?: UserResolvers<ContextType>;
};
/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export declare type IResolvers<ContextType = ModuleContext> = Resolvers<ContextType>;
