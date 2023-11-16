import { useState } from "react";



const AddTile = ({ onAdd }) => {

    const [title, setTitle] = useState('');
    const [weight, setWeight] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validate form inputs
        if(!title || !weight ) {
            alert('please fill all fields');
            return;
        }

        onAdd({ title, weight });

        //Clear form inputs
        setTitle('');
        setWeight('');
    };

    return (
        <div>
            <h2>Add New Tile</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.targetvalue)} />

                </label>
                <br />
                <label>
                    Weight:
                    <textarea value={weight} onChange={(e) => setWeight(e.target.value)} />

                </label>

            </form>
        </div>

    );
}
 
export default AddTile;