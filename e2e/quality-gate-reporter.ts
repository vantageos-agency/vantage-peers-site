import * as fs from "node:fs";
import type { FullResult, Reporter } from "@playwright/test/reporter";

class QualityGateReporter implements Reporter {
	onEnd(result: FullResult) {
		if (result.status === "passed") {
			fs.writeFileSync("/tmp/.quality-gate-passed", new Date().toISOString());
			console.log("\nQuality gate PASSED — /tmp/.quality-gate-passed created");
		} else {
			console.log(`\nQuality gate FAILED — status: ${result.status}`);
			try {
				fs.unlinkSync("/tmp/.quality-gate-passed");
			} catch {
				// file did not exist, that is fine
			}
		}
	}
}

export default QualityGateReporter;
