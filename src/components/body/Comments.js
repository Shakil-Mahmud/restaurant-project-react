import React from 'react'
import dateFormat from 'dateformat';

const Comments = props =>{
    return(
        props.comments.map(
            comment=>{
                return(
                    <div key={comment.id}>
                        <strong>{comment.author} </strong>
                        <small>{dateFormat(comment.date," mmm dS, yyyy, h:MM TT")}</small>
                        <p>{comment.comment}</p>
                    </div>
                )
            }
        )
    )
}

export default Comments