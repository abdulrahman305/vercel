/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The EdgeConfig.
 */
export type EdgeConfigToken = {
  token: string;
  label: string;
  /**
   * This is not the token itself, but rather an id to identify the token by
   */
  id: string;
  edgeConfigId: string;
  createdAt: number;
};

/** @internal */
export const EdgeConfigToken$inboundSchema: z.ZodType<
  EdgeConfigToken,
  z.ZodTypeDef,
  unknown
> = z.object({
  token: z.string(),
  label: z.string(),
  id: z.string(),
  edgeConfigId: z.string(),
  createdAt: z.number(),
});

/** @internal */
export type EdgeConfigToken$Outbound = {
  token: string;
  label: string;
  id: string;
  edgeConfigId: string;
  createdAt: number;
};

/** @internal */
export const EdgeConfigToken$outboundSchema: z.ZodType<
  EdgeConfigToken$Outbound,
  z.ZodTypeDef,
  EdgeConfigToken
> = z.object({
  token: z.string(),
  label: z.string(),
  id: z.string(),
  edgeConfigId: z.string(),
  createdAt: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EdgeConfigToken$ {
  /** @deprecated use `EdgeConfigToken$inboundSchema` instead. */
  export const inboundSchema = EdgeConfigToken$inboundSchema;
  /** @deprecated use `EdgeConfigToken$outboundSchema` instead. */
  export const outboundSchema = EdgeConfigToken$outboundSchema;
  /** @deprecated use `EdgeConfigToken$Outbound` instead. */
  export type Outbound = EdgeConfigToken$Outbound;
}
