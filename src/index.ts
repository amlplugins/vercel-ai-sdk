/**
 * @amlplugins/vercel-ai-sdk
 *
 * Thin namespaced re-export of the native ai SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Vercel AI SDK — provider-agnostic LLM toolkit with generateText, streamText, generateObject, tool use, agents.
 */

import * as _sdk from "ai";
export * from "ai";
export { _sdk as sdk };
export default _sdk;
