// Practical TypeScript variable examples using a browser test run scenario.

// `const` is for values that are not reassigned.
const baseUrl: string = 'https://playwright.dev/';
const environment = 'staging'; // TypeScript infers the string type.

// `let` is for values that need to change.
let attemptCount: number = 0;
attemptCount += 1;

// `var` is function-scoped; prefer `let` or `const` in new code.
var legacyBrowserName = 'chromium';

// Primitive types and a union type for an identifier that can be text or a number.
const isTestPassed: boolean = true;
const timeoutMs: number = 5_000;
let testId: string | number = 'login-check';
testId = 101;

// Arrays hold a list of values; `Array<number>` is another valid array syntax.
const supportedBrowsers: string[] = ['chromium', 'firefox', 'webkit'];
const responseTimes: Array<number> = [120, 98, 105];
const averageResponseTime =
  responseTimes.reduce((total, time) => total + time, 0) / responseTimes.length;

// A tuple has a fixed order and type for each entry.
const testRecord: [string, number] = ['checkout', 200];

// Objects group related values. Optional properties may be left out.
const testUser = { name: 'Alex', active: true };
const credentials: { username: string; rememberMe: boolean } = {
  username: 'qa-user',
  rememberMe: false,
};
const testOptions: { retries: number; project?: string } = { retries: 2 };
testOptions.project = 'chromium';

// `readonly` prevents reassignment of a property.
const runConfig: { readonly environment: string } = { environment };

// `as const` preserves literal values and makes the object's properties readonly.
const viewport = { width: 1280, height: 720 } as const;

// Destructuring assigns object and array values to individual variables.
const { name: userName, active: userIsActive } = testUser;
const [firstBrowser, secondBrowser] = supportedBrowsers;

// `null` and `undefined` represent values that are currently absent.
let selectedProject: string | null = null;
let optionalNote: string | undefined;
selectedProject = testOptions.project ?? null;
optionalNote = 'Login flow smoke test';

console.log('=== Test Run Variables ===');
console.log(`URL: ${baseUrl}`);
console.log(`Environment: ${runConfig.environment}`);
console.log(`Attempt: ${attemptCount}`);
console.log(`Browser (legacy var): ${legacyBrowserName}`);
console.log(`Passed: ${isTestPassed}; timeout: ${timeoutMs} ms`);
console.log(`Test ID: ${testId}`);
console.log(`Supported browsers: ${supportedBrowsers.join(', ')}`);
console.log(`Response times: ${responseTimes.join(', ')} ms`);
console.log(`Average response time: ${averageResponseTime} ms`);
console.log(`Test record: ${testRecord[0]} returned status ${testRecord[1]}`);
console.log(`User: ${userName}; active: ${userIsActive}`);
console.log(`Credentials: ${credentials.username}; remember me: ${credentials.rememberMe}`);
console.log(`Retries: ${testOptions.retries}; project: ${testOptions.project}`);
console.log(`Viewport: ${viewport.width}x${viewport.height}`);
console.log(`First browsers: ${firstBrowser}, ${secondBrowser}`);
console.log(`Selected project: ${selectedProject}; note: ${optionalNote}`);
