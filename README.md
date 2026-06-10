# Tramonto Menu TV App

This project can run as a Samsung Tizen TV app so the menu opens without browser bars.

## Local development

```bash
npm install
npm run dev -- --host
```

## Build web bundle

```bash
npm run build
```

## Prepare Samsung TV app files

```bash
npm run build:tizen
```

This creates a `tizen-app/` folder that contains:

- production files from `dist/`
- a generated `config.xml` for Samsung TV profile

## Package a `.wgt` file (requires Tizen Studio CLI)

```bash
npm run package:tizen
```

After packaging, the `.wgt` is written under `tizen-app/.buildResult/`.

## Install on Samsung UN43T5300AF

1. Install Tizen Studio on your computer and include:

- TV Extension
- Certificate Manager

2. Enable developer mode on TV:

- Open Apps
- Press `12345` on remote
- Turn Developer Mode ON
- Enter your computer IP
- Reboot TV

3. Connect TV from Tizen Device Manager and permit the connection.

4. Create a Samsung certificate profile in Tizen Certificate Manager.

5. Install package:

```bash
cd tizen-app
tizen install --name <your-package>.wgt -- .buildResult
```

6. Launch app from TV Apps list.

## Notes

- Browser address/search bar cannot be hidden in Samsung Internet browser.
- Running as a Tizen TV app avoids the browser chrome entirely.
