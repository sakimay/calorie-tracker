import Form from './components/Form'
import { useReducer } from 'react'
import { activityReducer, initialState } from './reducers/activity-reducer'

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState)

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex flex-col justify-between">
          <h1 className="text-center text-xl font-bold text-white uppercase">
            Contador de calorias
          </h1>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-50">
        <div className="max-w-4xl mx-auto">
          <Form 
            dispatch={dispatch}
          />
        </div>
      </section>

    </>
  )
}

export default App
