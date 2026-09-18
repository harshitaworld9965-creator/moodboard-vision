import { useState } from "react";

function SparkForm ({ onAddSpark, onClose}){
    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    const [type, setType] = useState('IDEA')

    function handleSubmit(event){
        event.preventDefault()
        if(!title.trim()|| !description.trim()){
            return
        }
        const newSpark = {
            id: Date.now(),
            type, 
            title,
            description
        }
        onAddSpark(newSpark)
        setTitle('')
        setDescription('')
        setType('IDEA')
    }

    return (
        <form className="spark-form" onSubmit={handleSubmit}>
            <div className="form-header">
                <div>
                    <p className="intro-label">NEW SPARK</p>
                    <h3>Add something interesting.</h3>
                </div>

                <button
                type="button"
                className="close-button"
                onClick={onClose}
                >
                    x
                </button>
            </div>

            <label>
                Type
                <select
                value={type}
                onChange={(e) => setType(e.target.value)}>
                    <option value="IDEA">Idea</option>
                    <option value="QUOTE">Quote</option>
                    <option value="SONG">Song</option>
                    <option value="PLACE">Place</option>
                </select>
            </label>


            <label>
                Title
                <input
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                placeholder="Something worth Remembering..."
                />
            </label>

            <label>
                Description
                <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Tell me a little more"
                rows="4"
                />
            </label>

            <button className="submit-button" type="submit">Add Spark</button>

        </form>
    )
}

export default SparkForm;