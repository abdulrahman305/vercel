# TrustedIps1

## Example Usage

```typescript
import { TrustedIps1 } from "@vercel/sdk/models/operations/updateprojectdatacache.js";

let value: TrustedIps1 = {
  deploymentType: "preview",
  addresses: [
    {
      value: "<value>",
    },
  ],
  protectionMode: "additional",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `deploymentType`                                                                                                                       | [operations.TrustedIpsDeploymentType](../../models/operations/trustedipsdeploymenttype.md)                                             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `addresses`                                                                                                                            | [operations.UpdateProjectDataCacheTrustedIpsAddresses](../../models/operations/updateprojectdatacachetrustedipsaddresses.md)[]         | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `protectionMode`                                                                                                                       | [operations.UpdateProjectDataCacheTrustedIpsProtectionMode](../../models/operations/updateprojectdatacachetrustedipsprotectionmode.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |