# Chrome Extension Boilerplate With Angular  

## 1. Check if Node.js is Installed  

Run the following commands: 

```bash
node -v
npm -v
````

If you see version numbers, Node.js is already installed. 

---

## 2. Install Node.js (If Not Installed)

Download Node.js from:
[https://nodejs.org](https://nodejs.org)

After installation, restart your terminal and verify:

```bash
node -v
npm -v
```

---

## 3. Install Angular CLI

Install Angular CLI globally:

```bash
npm install -g @angular/cli
```

Check installation:

```bash
ng version
```

---

## 4. Install Project Dependencies

Inside your project folder:

```bash
npm install
```

---

## 5. Run Development Server

```bash
ng serve
```

Open in browser:
[http://localhost:4200](http://localhost:4200)

---

## 6. Build the Project

### Production Build

```bash
ng build
```

### Production Optimized Build

```bash
ng build --configuration production
```

---

## 7. Build with Watch Mode

Automatically rebuild on file changes:

```bash
ng build --watch
```



## Common Issue

If `ng` command is not found:

```bash
npm install -g @angular/cli
```

Then restart your terminal.



---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Build and Watch

Run `ng build --watch` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
