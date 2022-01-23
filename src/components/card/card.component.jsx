import react from "react";


export const Card=(props)=>{
    console.log(props.sitem);
    return <div className="card">
        <img src={props.sitem.image} alt="image" />
        <h2>{props.sitem.title}</h2>
        <div className="description" dangerouslySetInnerHTML={{__html:props.sitem.summary}}/>
    </div>
}