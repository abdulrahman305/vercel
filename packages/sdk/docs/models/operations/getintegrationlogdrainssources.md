# GetIntegrationLogDrainsSources

The sources from which logs are currently being delivered to this log drain.

## Example Usage

```typescript
import { GetIntegrationLogDrainsSources } from "@vercel/sdk/models/operations/getintegrationlogdrains.js";

let value: GetIntegrationLogDrainsSources = "lambda";
```

## Values

```typescript
"build" | "edge" | "lambda" | "static" | "external" | "firewall"
```