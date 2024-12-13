/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export type NamespaceId = string | number;

export const QueryParamProvider = {
  Github: "github",
  GithubCustomHost: "github-custom-host",
  Gitlab: "gitlab",
  Bitbucket: "bitbucket",
} as const;
export type QueryParamProvider = ClosedEnum<typeof QueryParamProvider>;

export type SearchRepoRequest = {
  query?: string | undefined;
  namespaceId?: string | number | null | undefined;
  provider?: QueryParamProvider | undefined;
  installationId?: string | undefined;
  /**
   * The custom Git host if using a custom Git provider, like GitHub Enterprise Server
   */
  host?: string | undefined;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
};

export const ResponseBodyProvider = {
  Github: "github",
  GithubCustomHost: "github-custom-host",
  Gitlab: "gitlab",
  Bitbucket: "bitbucket",
} as const;
export type ResponseBodyProvider = ClosedEnum<typeof ResponseBodyProvider>;

export type ResponseBodyNamespaceId = string | number;

export type GitAccount = {
  provider: ResponseBodyProvider;
  namespaceId: string | number | null;
};

export type ResponseBodyId = string | number;

export const SearchRepoResponseBodyProvider = {
  Github: "github",
  GithubCustomHost: "github-custom-host",
  Gitlab: "gitlab",
  Bitbucket: "bitbucket",
} as const;
export type SearchRepoResponseBodyProvider = ClosedEnum<
  typeof SearchRepoResponseBodyProvider
>;

export type SearchRepoResponseBodyId = string | number;

export type Owner = {
  id: string | number;
  name: string;
};

export const ResponseBodyOwnerType = {
  User: "user",
  Team: "team",
} as const;
export type ResponseBodyOwnerType = ClosedEnum<typeof ResponseBodyOwnerType>;

export type Repos = {
  id: string | number;
  provider: SearchRepoResponseBodyProvider;
  url: string;
  name: string;
  slug: string;
  namespace: string;
  owner: Owner;
  ownerType: ResponseBodyOwnerType;
  private: boolean;
  defaultBranch: string;
  updatedAt: number;
};

export type SearchRepoResponseBody2 = {
  gitAccount: GitAccount;
  repos: Array<Repos>;
};

export type SearchRepoResponseBody1 = {};

export type SearchRepoResponseBody =
  | SearchRepoResponseBody1
  | SearchRepoResponseBody2;

/** @internal */
export const NamespaceId$inboundSchema: z.ZodType<
  NamespaceId,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number()]);

/** @internal */
export type NamespaceId$Outbound = string | number;

/** @internal */
export const NamespaceId$outboundSchema: z.ZodType<
  NamespaceId$Outbound,
  z.ZodTypeDef,
  NamespaceId
> = z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NamespaceId$ {
  /** @deprecated use `NamespaceId$inboundSchema` instead. */
  export const inboundSchema = NamespaceId$inboundSchema;
  /** @deprecated use `NamespaceId$outboundSchema` instead. */
  export const outboundSchema = NamespaceId$outboundSchema;
  /** @deprecated use `NamespaceId$Outbound` instead. */
  export type Outbound = NamespaceId$Outbound;
}

/** @internal */
export const QueryParamProvider$inboundSchema: z.ZodNativeEnum<
  typeof QueryParamProvider
> = z.nativeEnum(QueryParamProvider);

/** @internal */
export const QueryParamProvider$outboundSchema: z.ZodNativeEnum<
  typeof QueryParamProvider
> = QueryParamProvider$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamProvider$ {
  /** @deprecated use `QueryParamProvider$inboundSchema` instead. */
  export const inboundSchema = QueryParamProvider$inboundSchema;
  /** @deprecated use `QueryParamProvider$outboundSchema` instead. */
  export const outboundSchema = QueryParamProvider$outboundSchema;
}

/** @internal */
export const SearchRepoRequest$inboundSchema: z.ZodType<
  SearchRepoRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  query: z.string().optional(),
  namespaceId: z.nullable(z.union([z.string(), z.number()])).optional(),
  provider: QueryParamProvider$inboundSchema.optional(),
  installationId: z.string().optional(),
  host: z.string().optional(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/** @internal */
export type SearchRepoRequest$Outbound = {
  query?: string | undefined;
  namespaceId?: string | number | null | undefined;
  provider?: string | undefined;
  installationId?: string | undefined;
  host?: string | undefined;
  teamId?: string | undefined;
  slug?: string | undefined;
};

/** @internal */
export const SearchRepoRequest$outboundSchema: z.ZodType<
  SearchRepoRequest$Outbound,
  z.ZodTypeDef,
  SearchRepoRequest
> = z.object({
  query: z.string().optional(),
  namespaceId: z.nullable(z.union([z.string(), z.number()])).optional(),
  provider: QueryParamProvider$outboundSchema.optional(),
  installationId: z.string().optional(),
  host: z.string().optional(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchRepoRequest$ {
  /** @deprecated use `SearchRepoRequest$inboundSchema` instead. */
  export const inboundSchema = SearchRepoRequest$inboundSchema;
  /** @deprecated use `SearchRepoRequest$outboundSchema` instead. */
  export const outboundSchema = SearchRepoRequest$outboundSchema;
  /** @deprecated use `SearchRepoRequest$Outbound` instead. */
  export type Outbound = SearchRepoRequest$Outbound;
}

/** @internal */
export const ResponseBodyProvider$inboundSchema: z.ZodNativeEnum<
  typeof ResponseBodyProvider
> = z.nativeEnum(ResponseBodyProvider);

/** @internal */
export const ResponseBodyProvider$outboundSchema: z.ZodNativeEnum<
  typeof ResponseBodyProvider
> = ResponseBodyProvider$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBodyProvider$ {
  /** @deprecated use `ResponseBodyProvider$inboundSchema` instead. */
  export const inboundSchema = ResponseBodyProvider$inboundSchema;
  /** @deprecated use `ResponseBodyProvider$outboundSchema` instead. */
  export const outboundSchema = ResponseBodyProvider$outboundSchema;
}

/** @internal */
export const ResponseBodyNamespaceId$inboundSchema: z.ZodType<
  ResponseBodyNamespaceId,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number()]);

/** @internal */
export type ResponseBodyNamespaceId$Outbound = string | number;

/** @internal */
export const ResponseBodyNamespaceId$outboundSchema: z.ZodType<
  ResponseBodyNamespaceId$Outbound,
  z.ZodTypeDef,
  ResponseBodyNamespaceId
> = z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBodyNamespaceId$ {
  /** @deprecated use `ResponseBodyNamespaceId$inboundSchema` instead. */
  export const inboundSchema = ResponseBodyNamespaceId$inboundSchema;
  /** @deprecated use `ResponseBodyNamespaceId$outboundSchema` instead. */
  export const outboundSchema = ResponseBodyNamespaceId$outboundSchema;
  /** @deprecated use `ResponseBodyNamespaceId$Outbound` instead. */
  export type Outbound = ResponseBodyNamespaceId$Outbound;
}

/** @internal */
export const GitAccount$inboundSchema: z.ZodType<
  GitAccount,
  z.ZodTypeDef,
  unknown
> = z.object({
  provider: ResponseBodyProvider$inboundSchema,
  namespaceId: z.nullable(z.union([z.string(), z.number()])),
});

/** @internal */
export type GitAccount$Outbound = {
  provider: string;
  namespaceId: string | number | null;
};

/** @internal */
export const GitAccount$outboundSchema: z.ZodType<
  GitAccount$Outbound,
  z.ZodTypeDef,
  GitAccount
> = z.object({
  provider: ResponseBodyProvider$outboundSchema,
  namespaceId: z.nullable(z.union([z.string(), z.number()])),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GitAccount$ {
  /** @deprecated use `GitAccount$inboundSchema` instead. */
  export const inboundSchema = GitAccount$inboundSchema;
  /** @deprecated use `GitAccount$outboundSchema` instead. */
  export const outboundSchema = GitAccount$outboundSchema;
  /** @deprecated use `GitAccount$Outbound` instead. */
  export type Outbound = GitAccount$Outbound;
}

/** @internal */
export const ResponseBodyId$inboundSchema: z.ZodType<
  ResponseBodyId,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number()]);

/** @internal */
export type ResponseBodyId$Outbound = string | number;

/** @internal */
export const ResponseBodyId$outboundSchema: z.ZodType<
  ResponseBodyId$Outbound,
  z.ZodTypeDef,
  ResponseBodyId
> = z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBodyId$ {
  /** @deprecated use `ResponseBodyId$inboundSchema` instead. */
  export const inboundSchema = ResponseBodyId$inboundSchema;
  /** @deprecated use `ResponseBodyId$outboundSchema` instead. */
  export const outboundSchema = ResponseBodyId$outboundSchema;
  /** @deprecated use `ResponseBodyId$Outbound` instead. */
  export type Outbound = ResponseBodyId$Outbound;
}

/** @internal */
export const SearchRepoResponseBodyProvider$inboundSchema: z.ZodNativeEnum<
  typeof SearchRepoResponseBodyProvider
> = z.nativeEnum(SearchRepoResponseBodyProvider);

/** @internal */
export const SearchRepoResponseBodyProvider$outboundSchema: z.ZodNativeEnum<
  typeof SearchRepoResponseBodyProvider
> = SearchRepoResponseBodyProvider$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchRepoResponseBodyProvider$ {
  /** @deprecated use `SearchRepoResponseBodyProvider$inboundSchema` instead. */
  export const inboundSchema = SearchRepoResponseBodyProvider$inboundSchema;
  /** @deprecated use `SearchRepoResponseBodyProvider$outboundSchema` instead. */
  export const outboundSchema = SearchRepoResponseBodyProvider$outboundSchema;
}

/** @internal */
export const SearchRepoResponseBodyId$inboundSchema: z.ZodType<
  SearchRepoResponseBodyId,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number()]);

/** @internal */
export type SearchRepoResponseBodyId$Outbound = string | number;

/** @internal */
export const SearchRepoResponseBodyId$outboundSchema: z.ZodType<
  SearchRepoResponseBodyId$Outbound,
  z.ZodTypeDef,
  SearchRepoResponseBodyId
> = z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchRepoResponseBodyId$ {
  /** @deprecated use `SearchRepoResponseBodyId$inboundSchema` instead. */
  export const inboundSchema = SearchRepoResponseBodyId$inboundSchema;
  /** @deprecated use `SearchRepoResponseBodyId$outboundSchema` instead. */
  export const outboundSchema = SearchRepoResponseBodyId$outboundSchema;
  /** @deprecated use `SearchRepoResponseBodyId$Outbound` instead. */
  export type Outbound = SearchRepoResponseBodyId$Outbound;
}

/** @internal */
export const Owner$inboundSchema: z.ZodType<Owner, z.ZodTypeDef, unknown> = z
  .object({
    id: z.union([z.string(), z.number()]),
    name: z.string(),
  });

/** @internal */
export type Owner$Outbound = {
  id: string | number;
  name: string;
};

/** @internal */
export const Owner$outboundSchema: z.ZodType<
  Owner$Outbound,
  z.ZodTypeDef,
  Owner
> = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Owner$ {
  /** @deprecated use `Owner$inboundSchema` instead. */
  export const inboundSchema = Owner$inboundSchema;
  /** @deprecated use `Owner$outboundSchema` instead. */
  export const outboundSchema = Owner$outboundSchema;
  /** @deprecated use `Owner$Outbound` instead. */
  export type Outbound = Owner$Outbound;
}

/** @internal */
export const ResponseBodyOwnerType$inboundSchema: z.ZodNativeEnum<
  typeof ResponseBodyOwnerType
> = z.nativeEnum(ResponseBodyOwnerType);

/** @internal */
export const ResponseBodyOwnerType$outboundSchema: z.ZodNativeEnum<
  typeof ResponseBodyOwnerType
> = ResponseBodyOwnerType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBodyOwnerType$ {
  /** @deprecated use `ResponseBodyOwnerType$inboundSchema` instead. */
  export const inboundSchema = ResponseBodyOwnerType$inboundSchema;
  /** @deprecated use `ResponseBodyOwnerType$outboundSchema` instead. */
  export const outboundSchema = ResponseBodyOwnerType$outboundSchema;
}

/** @internal */
export const Repos$inboundSchema: z.ZodType<Repos, z.ZodTypeDef, unknown> = z
  .object({
    id: z.union([z.string(), z.number()]),
    provider: SearchRepoResponseBodyProvider$inboundSchema,
    url: z.string(),
    name: z.string(),
    slug: z.string(),
    namespace: z.string(),
    owner: z.lazy(() => Owner$inboundSchema),
    ownerType: ResponseBodyOwnerType$inboundSchema,
    private: z.boolean(),
    defaultBranch: z.string(),
    updatedAt: z.number(),
  });

/** @internal */
export type Repos$Outbound = {
  id: string | number;
  provider: string;
  url: string;
  name: string;
  slug: string;
  namespace: string;
  owner: Owner$Outbound;
  ownerType: string;
  private: boolean;
  defaultBranch: string;
  updatedAt: number;
};

/** @internal */
export const Repos$outboundSchema: z.ZodType<
  Repos$Outbound,
  z.ZodTypeDef,
  Repos
> = z.object({
  id: z.union([z.string(), z.number()]),
  provider: SearchRepoResponseBodyProvider$outboundSchema,
  url: z.string(),
  name: z.string(),
  slug: z.string(),
  namespace: z.string(),
  owner: z.lazy(() => Owner$outboundSchema),
  ownerType: ResponseBodyOwnerType$outboundSchema,
  private: z.boolean(),
  defaultBranch: z.string(),
  updatedAt: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Repos$ {
  /** @deprecated use `Repos$inboundSchema` instead. */
  export const inboundSchema = Repos$inboundSchema;
  /** @deprecated use `Repos$outboundSchema` instead. */
  export const outboundSchema = Repos$outboundSchema;
  /** @deprecated use `Repos$Outbound` instead. */
  export type Outbound = Repos$Outbound;
}

/** @internal */
export const SearchRepoResponseBody2$inboundSchema: z.ZodType<
  SearchRepoResponseBody2,
  z.ZodTypeDef,
  unknown
> = z.object({
  gitAccount: z.lazy(() => GitAccount$inboundSchema),
  repos: z.array(z.lazy(() => Repos$inboundSchema)),
});

/** @internal */
export type SearchRepoResponseBody2$Outbound = {
  gitAccount: GitAccount$Outbound;
  repos: Array<Repos$Outbound>;
};

/** @internal */
export const SearchRepoResponseBody2$outboundSchema: z.ZodType<
  SearchRepoResponseBody2$Outbound,
  z.ZodTypeDef,
  SearchRepoResponseBody2
> = z.object({
  gitAccount: z.lazy(() => GitAccount$outboundSchema),
  repos: z.array(z.lazy(() => Repos$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchRepoResponseBody2$ {
  /** @deprecated use `SearchRepoResponseBody2$inboundSchema` instead. */
  export const inboundSchema = SearchRepoResponseBody2$inboundSchema;
  /** @deprecated use `SearchRepoResponseBody2$outboundSchema` instead. */
  export const outboundSchema = SearchRepoResponseBody2$outboundSchema;
  /** @deprecated use `SearchRepoResponseBody2$Outbound` instead. */
  export type Outbound = SearchRepoResponseBody2$Outbound;
}

/** @internal */
export const SearchRepoResponseBody1$inboundSchema: z.ZodType<
  SearchRepoResponseBody1,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SearchRepoResponseBody1$Outbound = {};

/** @internal */
export const SearchRepoResponseBody1$outboundSchema: z.ZodType<
  SearchRepoResponseBody1$Outbound,
  z.ZodTypeDef,
  SearchRepoResponseBody1
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchRepoResponseBody1$ {
  /** @deprecated use `SearchRepoResponseBody1$inboundSchema` instead. */
  export const inboundSchema = SearchRepoResponseBody1$inboundSchema;
  /** @deprecated use `SearchRepoResponseBody1$outboundSchema` instead. */
  export const outboundSchema = SearchRepoResponseBody1$outboundSchema;
  /** @deprecated use `SearchRepoResponseBody1$Outbound` instead. */
  export type Outbound = SearchRepoResponseBody1$Outbound;
}

/** @internal */
export const SearchRepoResponseBody$inboundSchema: z.ZodType<
  SearchRepoResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => SearchRepoResponseBody1$inboundSchema),
  z.lazy(() => SearchRepoResponseBody2$inboundSchema),
]);

/** @internal */
export type SearchRepoResponseBody$Outbound =
  | SearchRepoResponseBody1$Outbound
  | SearchRepoResponseBody2$Outbound;

/** @internal */
export const SearchRepoResponseBody$outboundSchema: z.ZodType<
  SearchRepoResponseBody$Outbound,
  z.ZodTypeDef,
  SearchRepoResponseBody
> = z.union([
  z.lazy(() => SearchRepoResponseBody1$outboundSchema),
  z.lazy(() => SearchRepoResponseBody2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchRepoResponseBody$ {
  /** @deprecated use `SearchRepoResponseBody$inboundSchema` instead. */
  export const inboundSchema = SearchRepoResponseBody$inboundSchema;
  /** @deprecated use `SearchRepoResponseBody$outboundSchema` instead. */
  export const outboundSchema = SearchRepoResponseBody$outboundSchema;
  /** @deprecated use `SearchRepoResponseBody$Outbound` instead. */
  export type Outbound = SearchRepoResponseBody$Outbound;
}