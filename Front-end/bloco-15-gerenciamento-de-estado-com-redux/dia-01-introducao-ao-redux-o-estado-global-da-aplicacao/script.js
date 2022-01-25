const ESTADO_INICIAL = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
  };

  function reducer (state = ESTADO_INICIAL, action) {
      switch (action.type) {
          case 'NEXT_COLOR':
              return {
                  ...state,
                  index: state.index === 5 ? 0 : state.index + 1
              };
              default: 
              return state;
  }
}

const store = Redux.createStore(reducer);

store.subscribe(() => {
    const state = store.getState()
    const containerNX = document.getElementById('container')
    const span = document.getElementById('value');

    containerNX.style.backgroundColor = state.colors[state.index]
    span.innerText = state.colors[state.index]
})

const botãoNX = document.getElementById('next')
const containerNX = document.getElementById('container') 

botãoNX.addEventListener('click', () => {
    store.dispatch({type: 'NEXT_COLOR'})
})

console.log(store)