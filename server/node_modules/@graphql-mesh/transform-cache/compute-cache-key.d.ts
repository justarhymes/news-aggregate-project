import { GraphQLResolveInfo } from 'graphql';
export declare function computeCacheKey(options: {
    keyStr: string | undefined;
    args: Record<string, any>;
    info: GraphQLResolveInfo;
}): string;
