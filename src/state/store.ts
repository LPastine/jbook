import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { ActionType } from './action-types';

export const store = createStore(reducers, {}, applyMiddleware(thunk));

// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'code',
//   },
// });

// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'text',
//   },
// });
const secondCellInitialContent: string = `
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h3>Count: {count}</h3>
    </div>
  );
};

// Display any variable or React Component by calling 'show'
show(Counter);
`;

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'code',
    content: secondCellInitialContent,
  },
});

const firstCellInitialContent: string = `
# JBook

This is an interactive coding environment. You can write Javascript, see it executed, and write comprehensive documentation using markdown.

- Click any text cell (including this one) to edit it
- The code in each code editor is all joined together into one file. If you define a variable in cell #1, you can refer to it in any following cell
- You can show any React component, string, number, or anything else by calling the **show** function. This is a function built into this environment. Call show multiple times to show multiple values
- Re-order or delete cells using the buttons on the top right
- Add new cells by hovering on the divider between each cell

All of your changes get saved to the file you opened JBook with. So if you ran **npx jbook serve test.js**, all of the text and code you write will be saved to the **test.js** file.
`;

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'text',
    content: firstCellInitialContent,
  },
});
