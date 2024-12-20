import { useState, ChangeEvent } from "react"
import categories from "../data/categories"
export default function Form() {
    const [activity, setActivity] = useState({
        category: 1,
        name: "",
        calories: 0
    })

    const handleChange = (e : ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {        
        setActivity({
            ...activity,
            [e.target.id]: e.target.value
        })
    } 

    return (
        <form className="space-y-5 bg-white shadow p-10 rounded-lg">
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoria:</label>
                <select id="category" className="border border-slate-300 p-2 rounded-lg w-full bg-white" value={activity.category} onChange={handleChange}>
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Actividad:</label>
                <input type="text" id="name" value={activity.name} onChange={handleChange} className="border border-slate-300 p-2 rounded-lg w-full" placeholder="ej. Comida, Zumo de naranja, Ensalada, Ejercicio, Pesas, Bicicleta" />
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorias:</label>
                <input type="number" id="calories" value={activity.calories} onChange={handleChange} className="border border-slate-300 p-2 rounded-lg w-full" placeholder="Calorias ej. 300 o 500" />
            </div>

            <input type="submit" value="Guardar comida o guardar ejericio" className="bg-gray-800 hover:bg-gray-900 text-white p-2 uppercase w-full" />
        </form>
    )
}
