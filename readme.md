# pw debugging

Linux

```sh
# api logs
DEBUG=pw:api npx playwright test &> output.txt
# test logs
DEBUG=pw:test npx playwright test &> output.txt
# verbose logging
DEBUG=pw:* npx playwright test &> output.txt
```

Windows

```sh
# api logs
set DEBUG=pw:api
npx playwright test
```
