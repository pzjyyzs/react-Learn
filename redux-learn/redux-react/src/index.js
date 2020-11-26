import { createStore } from './store';
const appState = {
  title: {
    text: 'react',
    color: 'red',
  },
  content: {
    text: 'react',
    color: 'blue'
  }
}

function renderApp(appState) {
  renderTitle(appState.title)
  renderContent(appState.content)
}

function renderTitle(title) {
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = title.text;
  titleDOM.style.color = title.color
}

function renderContent(content) {
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = content.text;
  contentDOM.style.color = content.color;
}


function stateChanger(state, action) {
  console.log(action)
  if (action.type === 'UPDATE_TITLE_TEXT') {
    state.title.text = action.text
  } else if (action.type === 'UPDATE_TITLE_COLOR') {
    state.title.color = action.color
  }
}

const store = createStore(appState, stateChanger)
store.subscribe(() => renderApp(store.getState()))
renderApp(store.getState())
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'title_text' })
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'orange' })

