# ASB Market Research - Local Preview

Project folder:

```text
F:\WORK\ASB Market Research
```

Recommended local command:

```bash
npm run dev -- --hostname 127.0.0.1 --port 3053
```

If you want the site to self-check and start only when it is down, use:

```powershell
npm run ensure:site
```

If you want the site to keep checking itself in the background, use:

```powershell
npm run watch:site
```

Recommended local URL:

```text
http://127.0.0.1:3053/es
```

Notes:

- Use `npm run dev` to see the current local source code.
- Avoid relying on old ports such as `3052` if they were started earlier.
- `next start` can show an older production build unless `npm run build` was run after the latest changes.
- `npm run ensure:site` will start the site on `3053` if it is not already responding.
- Windows startup autolaunch is handled by the file in the user's Startup folder:
  `ASB Market Research Site Watchdog.vbs`
