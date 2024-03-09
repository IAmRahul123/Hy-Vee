import { useState } from 'react'
import styles from "@/styles/Form.module.css";

const Form = ({ handleSubmit }) => {
    const [name, setName] = useState("")

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await handleSubmit(name)
        setName("")
    }
    return (
        <form onSubmit={onSubmit}>
            <div className={styles.container}>
                <input className={styles.input} type='text' placeholder='Enter a name' value={name} onChange={handleChange} />

                <button type='submit' className={styles.btn} disabled={name.length==0}>Check</button>
            </div>
        </form>
    )
}

export default Form