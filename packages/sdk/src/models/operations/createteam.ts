/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type Utm = {
  /**
   * UTM source
   */
  utmSource?: string | undefined;
  /**
   * UTM medium
   */
  utmMedium?: string | undefined;
  /**
   * UTM campaign
   */
  utmCampaign?: string | undefined;
  /**
   * UTM term
   */
  utmTerm?: string | undefined;
};

/**
 * Attribution information for the session or current page
 */
export type Attribution = {
  /**
   * Session referrer
   */
  sessionReferrer?: string | undefined;
  /**
   * Session landing page
   */
  landingPage?: string | undefined;
  /**
   * Referrer to the signup page
   */
  pageBeforeConversionPage?: string | undefined;
  utm?: Utm | undefined;
};

export type CreateTeamRequestBody = {
  /**
   * The desired slug for the Team
   */
  slug: string;
  /**
   * The desired name for the Team. It will be generated from the provided slug if nothing is provided
   */
  name?: string | undefined;
  /**
   * Attribution information for the session or current page
   */
  attribution?: Attribution | undefined;
};

/**
 * IMPORTANT: If extending Billing, particularly with optional fields, make sure you also update `sync-orb-subscription-to-owner.ts` to handle the items when the object is recreated.
 */
export type Billing = {};

/**
 * The team was created successfully
 */
export type CreateTeamResponseBody = {
  /**
   * Id of the created team
   */
  id: string;
  slug: string;
  /**
   * IMPORTANT: If extending Billing, particularly with optional fields, make sure you also update `sync-orb-subscription-to-owner.ts` to handle the items when the object is recreated.
   */
  billing: Billing;
};

/** @internal */
export const Utm$inboundSchema: z.ZodType<Utm, z.ZodTypeDef, unknown> = z
  .object({
    utmSource: z.string().optional(),
    utmMedium: z.string().optional(),
    utmCampaign: z.string().optional(),
    utmTerm: z.string().optional(),
  });

/** @internal */
export type Utm$Outbound = {
  utmSource?: string | undefined;
  utmMedium?: string | undefined;
  utmCampaign?: string | undefined;
  utmTerm?: string | undefined;
};

/** @internal */
export const Utm$outboundSchema: z.ZodType<Utm$Outbound, z.ZodTypeDef, Utm> = z
  .object({
    utmSource: z.string().optional(),
    utmMedium: z.string().optional(),
    utmCampaign: z.string().optional(),
    utmTerm: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Utm$ {
  /** @deprecated use `Utm$inboundSchema` instead. */
  export const inboundSchema = Utm$inboundSchema;
  /** @deprecated use `Utm$outboundSchema` instead. */
  export const outboundSchema = Utm$outboundSchema;
  /** @deprecated use `Utm$Outbound` instead. */
  export type Outbound = Utm$Outbound;
}

/** @internal */
export const Attribution$inboundSchema: z.ZodType<
  Attribution,
  z.ZodTypeDef,
  unknown
> = z.object({
  sessionReferrer: z.string().optional(),
  landingPage: z.string().optional(),
  pageBeforeConversionPage: z.string().optional(),
  utm: z.lazy(() => Utm$inboundSchema).optional(),
});

/** @internal */
export type Attribution$Outbound = {
  sessionReferrer?: string | undefined;
  landingPage?: string | undefined;
  pageBeforeConversionPage?: string | undefined;
  utm?: Utm$Outbound | undefined;
};

/** @internal */
export const Attribution$outboundSchema: z.ZodType<
  Attribution$Outbound,
  z.ZodTypeDef,
  Attribution
> = z.object({
  sessionReferrer: z.string().optional(),
  landingPage: z.string().optional(),
  pageBeforeConversionPage: z.string().optional(),
  utm: z.lazy(() => Utm$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Attribution$ {
  /** @deprecated use `Attribution$inboundSchema` instead. */
  export const inboundSchema = Attribution$inboundSchema;
  /** @deprecated use `Attribution$outboundSchema` instead. */
  export const outboundSchema = Attribution$outboundSchema;
  /** @deprecated use `Attribution$Outbound` instead. */
  export type Outbound = Attribution$Outbound;
}

/** @internal */
export const CreateTeamRequestBody$inboundSchema: z.ZodType<
  CreateTeamRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  slug: z.string(),
  name: z.string().optional(),
  attribution: z.lazy(() => Attribution$inboundSchema).optional(),
});

/** @internal */
export type CreateTeamRequestBody$Outbound = {
  slug: string;
  name?: string | undefined;
  attribution?: Attribution$Outbound | undefined;
};

/** @internal */
export const CreateTeamRequestBody$outboundSchema: z.ZodType<
  CreateTeamRequestBody$Outbound,
  z.ZodTypeDef,
  CreateTeamRequestBody
> = z.object({
  slug: z.string(),
  name: z.string().optional(),
  attribution: z.lazy(() => Attribution$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTeamRequestBody$ {
  /** @deprecated use `CreateTeamRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateTeamRequestBody$inboundSchema;
  /** @deprecated use `CreateTeamRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateTeamRequestBody$outboundSchema;
  /** @deprecated use `CreateTeamRequestBody$Outbound` instead. */
  export type Outbound = CreateTeamRequestBody$Outbound;
}

/** @internal */
export const Billing$inboundSchema: z.ZodType<Billing, z.ZodTypeDef, unknown> =
  z.object({});

/** @internal */
export type Billing$Outbound = {};

/** @internal */
export const Billing$outboundSchema: z.ZodType<
  Billing$Outbound,
  z.ZodTypeDef,
  Billing
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Billing$ {
  /** @deprecated use `Billing$inboundSchema` instead. */
  export const inboundSchema = Billing$inboundSchema;
  /** @deprecated use `Billing$outboundSchema` instead. */
  export const outboundSchema = Billing$outboundSchema;
  /** @deprecated use `Billing$Outbound` instead. */
  export type Outbound = Billing$Outbound;
}

/** @internal */
export const CreateTeamResponseBody$inboundSchema: z.ZodType<
  CreateTeamResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  slug: z.string(),
  billing: z.lazy(() => Billing$inboundSchema),
});

/** @internal */
export type CreateTeamResponseBody$Outbound = {
  id: string;
  slug: string;
  billing: Billing$Outbound;
};

/** @internal */
export const CreateTeamResponseBody$outboundSchema: z.ZodType<
  CreateTeamResponseBody$Outbound,
  z.ZodTypeDef,
  CreateTeamResponseBody
> = z.object({
  id: z.string(),
  slug: z.string(),
  billing: z.lazy(() => Billing$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTeamResponseBody$ {
  /** @deprecated use `CreateTeamResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateTeamResponseBody$inboundSchema;
  /** @deprecated use `CreateTeamResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateTeamResponseBody$outboundSchema;
  /** @deprecated use `CreateTeamResponseBody$Outbound` instead. */
  export type Outbound = CreateTeamResponseBody$Outbound;
}