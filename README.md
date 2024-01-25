# BeepFront

## How to setup the stack ??
```bash
git clone git@github.com:beep-wav/beep-front.git
cd beep-front
npm install
npm start
```
## Prettier
> ⚠️ this will only work on vscode
1. Install the vscode extension of [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
2. Open your settings as json by pressing `ctrl+maj+p` and then typing `Preferences : Open User Settings (JSON)`
3. Add the configuration bellow to your file and then save
```json
"[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```
Basically, it will format your code according to the `.prettierrc` file ! Btw, you are free to tweak your settings but don't edit the `.prettierrc` file without preventing the other members of the team :)
## How to use nx ??
We are using nx to build a modular front-end. The idea is that you'll be able to import our components anywhere and it should work !
To do that : 
```bash
npx nx g @nx/react:library --name=voice --unitTestRunner=vitest --directory=libs
```