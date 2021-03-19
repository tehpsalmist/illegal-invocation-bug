[Check it out live](https://illegal-invocation-bug.now.sh)

Spin it up locally:

```sh
git clone $url
cd illegal-invocation-bug
npm i
npm start
```

## Reproduce Bug

1. Type something in the search, you should see movie posters show up in the image area.

2. Backspace a character (thus duplicating the search term from 2 keystrokes previous), and the error will show up in the console.