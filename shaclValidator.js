import { Parser } from "n3";
import { readFileSync } from "fs";
import SHACLValidator from "rdf-validate-shacl";
import { Store } from "n3";

export function shaclValidate(reader, writer, shacl) {
  const shapes = new Parser().parse(readFileSync(shacl, { encoding: "utf8" }));
  const validator = new SHACLValidator(new Store(shapes));

  reader.data(async (str) => {
    const data = new Parser().parse(str);
    const store = new Store(data);
    const report = validator.validate(store);
    // Check conformance: `true` or `false`
    console.log("Valid", report.conforms);

    for (const result of report.results) {
      // See https://www.w3.org/TR/shacl/#results-validation-result for details
      // about each property
      console.log("message", result.message);
      console.log("path", result.path);
      console.log("focusNode", result.focusNode);
      console.log("severity", result.severity);
      console.log("cosntraint", result.sourceConstraintComponent);
      console.log("shape", result.sourceShape);
    }

    if (report.conforms) {
      await writer.push(str);
    }
  });
}
