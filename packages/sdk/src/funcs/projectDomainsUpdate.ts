/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { VercelCore } from "../core.js";
import { encodeFormQuery, encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import {
  UpdateProjectDomainRequest,
  UpdateProjectDomainRequest$outboundSchema,
  UpdateProjectDomainResponseBody,
  UpdateProjectDomainResponseBody$inboundSchema,
} from "../models/operations/updateprojectdomain.js";
import { Result } from "../types/fp.js";

/**
 * Update a project domain
 *
 * @remarks
 * Update a project domain's configuration, including the name, git branch and redirect of the domain.
 */
export async function projectDomainsUpdate(
  client: VercelCore,
  request: UpdateProjectDomainRequest,
  options?: RequestOptions,
): Promise<
  Result<
    UpdateProjectDomainResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input = request;

  const parsed = safeParse(
    input,
    (value) => UpdateProjectDomainRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.RequestBody, { explode: true });

  const pathParams = {
    domain: encodeSimple("domain", payload.domain, {
      explode: false,
      charEncoding: "percent",
    }),
    idOrName: encodeSimple("idOrName", payload.idOrName, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/v9/projects/{idOrName}/domains/{domain}")(
    pathParams,
  );

  const query = encodeFormQuery({
    "slug": payload.slug,
    "teamId": payload.teamId,
  });

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.bearerToken);
  const securityInput = secConfig == null ? {} : { bearerToken: secConfig };
  const context = {
    operationID: "updateProjectDomain",
    oAuth2Scopes: [],
    securitySource: client._options.bearerToken,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "PATCH",
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "403", "409", "4XX", "5XX"],
    retryConfig: options?.retries
      || client._options.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result] = await M.match<
    UpdateProjectDomainResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, UpdateProjectDomainResponseBody$inboundSchema),
    M.fail([400, 401, 403, 409, "4XX", "5XX"]),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}