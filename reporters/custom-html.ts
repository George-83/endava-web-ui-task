import fs from 'fs';
import path from 'path';
import type {
    FullConfig,
    FullResult,
    Reporter,
    Suite,
    TestCase,
    TestResult,
} from '@playwright/test/reporter';

class CustomReporter implements Reporter {
    private results: string[] = [];

    onBegin(config: FullConfig, suite: Suite) {
        this.results.push(`<h1>Test Run Started</h1>`);
        this.results.push(`<p>Total tests: ${suite.allTests().length}</p>`);
    }

    onTestBegin(test: TestCase, result: TestResult) {
        this.results.push(`<div><strong>Running:</strong> ${test.title}</div>`);
    }

    onTestEnd(test: TestCase, result: TestResult) {
        const color = result.status === 'passed' ? 'green' : result.status === 'failed' ? 'red' : 'orange';
        this.results.push(
            `<div><strong style="color:${color}">Finished:</strong> ${test.title} – ${result.status}</div>`
        );
    }

    async onEnd(result: FullResult) {
        this.results.push(`<hr><p><strong>Final status:</strong> ${result.status}</p>`);

        const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <title>Custom Test Report</title>
      </head>
      <body>
        ${this.results.join('\n')}
      </body>
      </html>
    `;

        const reportPath = path.resolve('playwright-report/custom.html');
        fs.writeFileSync(reportPath, htmlContent, 'utf-8');
        console.log(`✅ Custom HTML report saved to: ${reportPath}`);
    }
}

export default CustomReporter;
