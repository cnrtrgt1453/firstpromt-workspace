const { execFileSync } = require("child_process");

const FORMATTABLE = new Set(["js", "html", "css", "json", "md"]);

let input = "";
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", () => {
  let payload;
  try {
    payload = JSON.parse(input);
  } catch {
    process.exit(0);
  }

  const filePath = payload.tool_input && payload.tool_input.file_path;
  if (!filePath) process.exit(0);

  const ext = filePath.split(".").pop().toLowerCase();
  if (!FORMATTABLE.has(ext)) process.exit(0);

  try {
    execFileSync("npx", ["prettier", "--write", filePath], {
      cwd: process.env.CLAUDE_PROJECT_DIR || process.cwd(),
      stdio: "ignore",
      shell: true,
    });
  } catch {
    // formatting failure should never block the tool call
  }
  process.exit(0);
});
