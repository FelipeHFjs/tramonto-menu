import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { resolve } from "node:path";

const rootDir = process.cwd();
const distDir = resolve(rootDir, "dist");
const outDir = resolve(rootDir, "tizen-app");

if (!existsSync(distDir)) {
  console.error('Missing dist/ folder. Run "npm run build" first.');
  process.exit(1);
}

const pkg = JSON.parse(readFileSync(resolve(rootDir, "package.json"), "utf8"));
const [major = "1", minor = "0", patch = "0"] = String(
  pkg.version ?? "1.0.0",
).split(".");
const appVersion = `${major}.${minor}.${patch}`;

const configXml = `<?xml version="1.0" encoding="UTF-8"?>
<widget xmlns="http://www.w3.org/ns/widgets" xmlns:tizen="http://tizen.org/ns/widgets" id="https://tramonto.menu/tv" version="${appVersion}" viewmodes="maximized">
  <tizen:application id="TRMNMENU01.menu" package="TRMNMENU01" required_version="2.3" />
  <tizen:profile name="tv-samsung" />
  <content src="index.html" />
  <name>Tramonto Menu</name>
  <description>Restaurant menu board for Samsung TV.</description>
  <feature name="http://tizen.org/feature/screen.size.all" />
  <access origin="*" subdomains="true" />
  <tizen:setting screen-orientation="landscape" context-menu="disable" background-support="disable" encryption="disable" install-location="auto" hwkey-event="disable" />
</widget>
`;

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });
cpSync(distDir, outDir, { recursive: true });
writeFileSync(resolve(outDir, "config.xml"), configXml, "utf8");

console.log("Created tizen-app/ with build output and config.xml");
console.log("Next: package with Tizen CLI from tizen-app/");
