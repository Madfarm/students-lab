
import './Score.css'

type ScoresProp = {
    date: string,
    score: number,
}[]


export default function Score(scores:ScoresProp){
    let scoresArr: React.ReactElement[] = [];
    

    for (const score of Object.entries(scores)){
        console.log(score)
        scoresArr.push(
            <p>Score: {score[1].score} | {score[1].date}</p>
        )
    }

    return (
        <div className="Score">
            <h4>Scores</h4>
            {scoresArr}
        </div>
    )
}