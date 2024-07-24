# Hostfylly Test

<details>
  <summary>Menu</summary>

- [Getting Started](#getting-started)
- [Selected Libs](#selected-libs)
- [Architecture Decisions](#architecture-decisions)
</details>

---

<br />
<br />

## Getting Started

### `npm i`

### To db mock server:

### `npx json-server db.json`

### To run app:

### `npm run start`

### To run test:

### `npm run test`

<br />

## Selected Libs

### Test app:

- Jest - It is the most used lib to test React libs nowadays. For me is a great lib to test component and snapshot tests, there are a lot of documentation on internet and it's the test lib indicated by React.

<br />

### Ensure code quality:

- ESlint - The best lib to ensure the code quality, help the developer to keep syntax perfectly, help the developer to find issues and solve problems related of their code;

- Prettier - The best lib to ensure how the code looks like. It helps the developer to define coomon style to the code.

### Styling:

- Styled components: I selected the styled components to styling my test it's for me a good lib to make it, and what I'm more familiar with. It allows me to easily styling by state.

## Map

- Leaflet: I selected a free lib map only to looks like create my layout.

## Unique Id

- UUID only to generate id without backend.

## Moment

- To format and calculete dates.

## React DatePicker

- To generate a range calendar

<br />

### Architecture Decisions

- I created separate folders for components, interfaces, constants, and page, for me, it is a clearly way to maintain.
- I created constants to emulate a backend data;
- I created a global state to manage that mocks without backend. I choose Context API because it's enough for this project. It doesn't have a lot of complexity to create a complex state control;
- I created a mock imagens to render on the app.
- I named the tsx files as a FunctionalityName and the styles with FuncionalityName.Styles.ts, in that way I separate and keep it in an organized way to maintain it
