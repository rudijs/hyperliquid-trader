## FEATURE:

[Insert your feature here]

## EXAMPLES:

[Provide and explain examples that you have in the `examples/` folder]

## DOCUMENTATION:

[List out any documentation (web pages, sources for an MCP server like Crawl4AI RAG, etc.) that will need to be referenced during development]

## OTHER CONSIDERATIONS:

[Any other considerations or specific requirements - great place to include gotchas that you see AI coding assistants miss with your projects a lot]

## Testing & Reliability
- **Always create vitest unit tests for new features** (functions, classes, routes, etc).
- **After updating any logic**, check whether existing unit tests need to be updated. If so, do it.
- **Tests should live in a `/tests` folder** mirroring the main app structure from the src/ folder.
  - Include at least:
    - 1 test for expected use
    - 1 edge case
    - 1 failure case
  - Follow the unit test templates provided at:
   - docs/prds/examples/101-unit-testing-exapmle.ts
   - docs/prds/examples/101-unit-testing-exapmle.test.ts

## Development Instructions for LLM
When implementing this project:
1. Ask clarifying questions about any ambiguous requirements
2. Suggest alternative approaches if you see potential improvements
3. Break down complex features into smaller, manageable components
4. Provide code with clear comments and documentation
5. Include error handling and edge case considerations
6. Suggest testing strategies for key functionality
7. Recommend best practices for the chosen tech stack
