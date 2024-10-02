/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { VercelCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
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
  ListDeploymentBuildsRequest,
  ListDeploymentBuildsRequest$outboundSchema,
  ListDeploymentBuildsResponseBody,
  ListDeploymentBuildsResponseBody$inboundSchema,
} from "../models/operations/listdeploymentbuilds.js";
import { Result } from "../types/fp.js";

/**
 * Retrieves the list of builds given their deployment's unique identifier. No longer listed as public API as of May 2023.
 */
export async function listDeploymentBuilds(
  client: VercelCore,
  request: ListDeploymentBuildsRequest,
  options?: RequestOptions,
): Promise<
  Result<
    ListDeploymentBuildsResponseBody,
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
    (value) => ListDeploymentBuildsRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    deploymentId: encodeSimple("deploymentId", payload.deploymentId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/deployments/{deploymentId}/builds")(pathParams);

  const headers = new Headers({
    Accept: "application/json",
  });

  const context = {
    operationID: "listDeploymentBuilds",
    oAuth2Scopes: [],
    securitySource: null,
  };

  const requestRes = client._createRequest(context, {
    method: "GET",
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "403", "404", "4XX", "5XX"],
    retryConfig: options?.retries
      || client._options.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result] = await M.match<
    ListDeploymentBuildsResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, ListDeploymentBuildsResponseBody$inboundSchema),
    M.fail([400, 401, 403, 404, "4XX", "5XX"]),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}
