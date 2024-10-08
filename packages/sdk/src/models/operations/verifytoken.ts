/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The plan for this user's team (pro or hobby).
 */
export const TeamPlan = {
  Pro: "pro",
  Hobby: "hobby",
} as const;
/**
 * The plan for this user's team (pro or hobby).
 */
export type TeamPlan = ClosedEnum<typeof TeamPlan>;

export type VerifyTokenRequest = {
  /**
   * Email to verify the login.
   */
  email?: string | undefined;
  /**
   * The token returned when the login was requested.
   */
  token: string;
  /**
   * The desired name for the token. It will be displayed on the user account details.
   */
  tokenName?: string | undefined;
  /**
   * The SAML Profile ID, when connecting a SAML Profile to a Team member for the first time.
   */
  ssoUserId?: string | undefined;
  /**
   * The name of this user's team.
   */
  teamName?: string | undefined;
  /**
   * The slug for this user's team.
   */
  teamSlug?: string | undefined;
  /**
   * The plan for this user's team (pro or hobby).
   */
  teamPlan?: TeamPlan | undefined;
  /**
   * Referrer to the session.
   */
  sessionReferrer?: string | undefined;
  /**
   * The page on which the user started their session.
   */
  landingPage?: string | undefined;
  /**
   * The page that sent the user to the signup page.
   */
  pageBeforeConversionPage?: string | undefined;
  utmSource?: string | undefined;
  utmMedium?: string | undefined;
  utmCampaign?: string | undefined;
  utmTerm?: string | undefined;
  oppId?: string | undefined;
};

/**
 * The verification was successful.
 */
export type VerifyTokenResponseBody = {
  /**
   * The user authentication token that can be used to perform API requests.
   */
  token: string;
  /**
   * Email address of the authenticated user.
   */
  email: string;
  /**
   * When completing SAML Single Sign-On authentication, this will be the ID of the Team that was authenticated for.
   */
  teamId?: string | undefined;
};

/** @internal */
export const TeamPlan$inboundSchema: z.ZodNativeEnum<typeof TeamPlan> = z
  .nativeEnum(TeamPlan);

/** @internal */
export const TeamPlan$outboundSchema: z.ZodNativeEnum<typeof TeamPlan> =
  TeamPlan$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TeamPlan$ {
  /** @deprecated use `TeamPlan$inboundSchema` instead. */
  export const inboundSchema = TeamPlan$inboundSchema;
  /** @deprecated use `TeamPlan$outboundSchema` instead. */
  export const outboundSchema = TeamPlan$outboundSchema;
}

/** @internal */
export const VerifyTokenRequest$inboundSchema: z.ZodType<
  VerifyTokenRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  email: z.string().optional(),
  token: z.string(),
  tokenName: z.string().optional(),
  ssoUserId: z.string().optional(),
  teamName: z.string().optional(),
  teamSlug: z.string().optional(),
  teamPlan: TeamPlan$inboundSchema.optional(),
  sessionReferrer: z.string().optional(),
  landingPage: z.string().optional(),
  pageBeforeConversionPage: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmTerm: z.string().optional(),
  oppId: z.string().optional(),
});

/** @internal */
export type VerifyTokenRequest$Outbound = {
  email?: string | undefined;
  token: string;
  tokenName?: string | undefined;
  ssoUserId?: string | undefined;
  teamName?: string | undefined;
  teamSlug?: string | undefined;
  teamPlan?: string | undefined;
  sessionReferrer?: string | undefined;
  landingPage?: string | undefined;
  pageBeforeConversionPage?: string | undefined;
  utmSource?: string | undefined;
  utmMedium?: string | undefined;
  utmCampaign?: string | undefined;
  utmTerm?: string | undefined;
  oppId?: string | undefined;
};

/** @internal */
export const VerifyTokenRequest$outboundSchema: z.ZodType<
  VerifyTokenRequest$Outbound,
  z.ZodTypeDef,
  VerifyTokenRequest
> = z.object({
  email: z.string().optional(),
  token: z.string(),
  tokenName: z.string().optional(),
  ssoUserId: z.string().optional(),
  teamName: z.string().optional(),
  teamSlug: z.string().optional(),
  teamPlan: TeamPlan$outboundSchema.optional(),
  sessionReferrer: z.string().optional(),
  landingPage: z.string().optional(),
  pageBeforeConversionPage: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmTerm: z.string().optional(),
  oppId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VerifyTokenRequest$ {
  /** @deprecated use `VerifyTokenRequest$inboundSchema` instead. */
  export const inboundSchema = VerifyTokenRequest$inboundSchema;
  /** @deprecated use `VerifyTokenRequest$outboundSchema` instead. */
  export const outboundSchema = VerifyTokenRequest$outboundSchema;
  /** @deprecated use `VerifyTokenRequest$Outbound` instead. */
  export type Outbound = VerifyTokenRequest$Outbound;
}

/** @internal */
export const VerifyTokenResponseBody$inboundSchema: z.ZodType<
  VerifyTokenResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  token: z.string(),
  email: z.string(),
  teamId: z.string().optional(),
});

/** @internal */
export type VerifyTokenResponseBody$Outbound = {
  token: string;
  email: string;
  teamId?: string | undefined;
};

/** @internal */
export const VerifyTokenResponseBody$outboundSchema: z.ZodType<
  VerifyTokenResponseBody$Outbound,
  z.ZodTypeDef,
  VerifyTokenResponseBody
> = z.object({
  token: z.string(),
  email: z.string(),
  teamId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VerifyTokenResponseBody$ {
  /** @deprecated use `VerifyTokenResponseBody$inboundSchema` instead. */
  export const inboundSchema = VerifyTokenResponseBody$inboundSchema;
  /** @deprecated use `VerifyTokenResponseBody$outboundSchema` instead. */
  export const outboundSchema = VerifyTokenResponseBody$outboundSchema;
  /** @deprecated use `VerifyTokenResponseBody$Outbound` instead. */
  export type Outbound = VerifyTokenResponseBody$Outbound;
}
