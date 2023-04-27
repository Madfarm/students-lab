import './Student.css'

type StudentProp = {
    name: string,
    bio: string,
    scores: {
        date: string,
        score: number
    }[]
}

export default function Student(student:StudentProp){
    return (
        <div className="Student">
            <h3>{student.name}</h3>
            <p></p>
        </div>
    )
}