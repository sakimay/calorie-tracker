import Form from './components/Form'
import { useEffect, useMemo, useReducer } from 'react'
import { activityReducer, initialState } from './reducers/activity-reducer'
import ActivityList from './components/ActivityList'

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState)

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  const canRestartApp = () => useMemo(() => state.activities.length > 0, [state.activities])

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-xl font-bold text-white uppercase">
            Contador de calorias
          </h1>

          <button
            className='bg-gray-800 hover:bg-gray-900 p-2 font-bold text-white cursor-pointer rounded-lg text-sm disabled:opacity-10 uppercase'
            disabled={!canRestartApp()}
            onClick={() => dispatch({ type: 'restart-app' })}
          >Reiniciar App</button>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-50">
        <div className="max-w-4xl mx-auto">
          <Form
            dispatch={dispatch}
            state={state}
          />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList
          activities={state.activities}
          dispatch={dispatch}
        />
      </section>
    </>
  )
}

export default App
