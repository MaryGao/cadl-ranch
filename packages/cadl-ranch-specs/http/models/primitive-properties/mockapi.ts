import { passOnSuccess, mockapi } from "@azure-tools/cadl-ranch-api";
import { ScenarioMockApi } from "@azure-tools/cadl-ranch-api";

export const Scenarios: Record<string, ScenarioMockApi> = {};

Scenarios.Primitive_Properties = passOnSuccess(
  mockapi.get("/primitive-properties/models", () => {
    return {
      status: 200,
      body: {
        contentType: "application/json",
        rawContent: `"Hello World!"`,
      },
    };
  }),
);
