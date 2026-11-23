// TypeScript variable examples and their usages.
// These are comments for learning purposes; uncomment an example to run it.

// 1. `let`: use when the variable's value will change.
// let retryCount = 0;
// retryCount += 1;
// console.log(retryCount); // 1

// 2. `const`: use when the variable should not be reassigned.
// const baseUrl = 'https://playwright.dev/';
// console.log(baseUrl);

// 3. `var`: function-scoped legacy declaration; prefer `let` or `const`.
// var browserName = 'chromium';
// console.log(browserName);

// 4. Type inference: TypeScript infers the type from the initial value.
// let pageTitle = 'Home'; // inferred as string
// pageTitle = 'Getting started';
// console.log(pageTitle);

// 5. Explicit type annotations.
// let testPassed: boolean = true;
// let timeoutMs: number = 5_000;
// let message: string = 'Test complete';
// console.log(testPassed, timeoutMs, message);

// 6. Union type: allow one of several types.
// let testId: string | number = 'login';
// testId = 101;
// console.log(testId);

// 7. Arrays: store multiple values of the same type.
// const browsers: string[] = ['chromium', 'firefox', 'webkit'];
// console.log(browsers[0]);
// browsers.push('mobile'); // Adds another string

// 8. Alternative array syntax.
// const responseTimes: Array<number> = [120, 98, 105];
// console.log(responseTimes.length);

// 9. Tuple: a fixed sequence of values with known types.
// const userRecord: [string, number] = ['Alex', 7];
// console.log(`${userRecord[0]} has ${userRecord[1]} notifications`);

// 10. Object: group related named values.
// const user = { name: 'Alex', active: true };
// console.log(user.name, user.active);

// 11. Typed object with an inline type annotation.
// const credentials: { username: string; rememberMe: boolean } = {
//   username: 'test-user',
//   rememberMe: false,
// };
// console.log(credentials.username);

// 12. Optional object property: it may be omitted.
// const testOptions: { retries: number; project?: string } = { retries: 2 };
// testOptions.project = 'chromium';
// console.log(testOptions.project ?? 'default project');

// 13. `readonly`: prevent reassignment of an object property.
// const config: { readonly environment: string } = { environment: 'staging' };
// console.log(config.environment);
// config.environment = 'production'; // TypeScript error: readonly property

// 14. `as const`: preserve literal values and make properties readonly.
// const viewport = { width: 1280, height: 720 } as const;
// console.log(viewport.width, viewport.height);

// 15. Destructuring: assign object properties to variables.
// const testUser = { name: 'Sam', role: 'admin' };
// const { name, role } = testUser;
// console.log(`${name} (${role})`);

// 16. Array destructuring: assign array entries to variables.
// const [firstBrowser, secondBrowser] = ['chromium', 'firefox'];
// console.log(firstBrowser, secondBrowser);

// 17. `null` and `undefined`: represent absent values.
// let selectedProject: string | null = null;
// let optionalNote: string | undefined;
// selectedProject = 'firefox';
// console.log(selectedProject, optionalNote);
