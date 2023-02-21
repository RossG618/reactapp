import {   faChevronRight, faPlus, faComment, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nanoid } from '@reduxjs/toolkit';
import React, {useState} from 'react';
import { Data } from './preComments';
import './comments.css';
//
export default function CommentsBar(){
    const [Comments, setComments] = useState(Data);
    const [showInput, setShowInput] = useState(false)
    const [commentsVisible, setCommentsVisible] = useState(false)

    const [addCommentData, setAddCommentData] = useState({
        rating: '',
        title: '',
        desc: '',
        name: '',
    })
    const commentsNum = () => {
        const length = Comments.length;
        if (length === 0) {
            return 'No Comments here'
        }
        return length;
    }

    const commentsHide = () =>{
        setCommentsVisible(!commentsVisible)
    }
    const addComment = () => {
        setShowInput(!showInput)

    }
    
    const handleAddCommentChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    
    const newCommentData = {...addCommentData};
    newCommentData[fieldName] = fieldValue;
    setAddCommentData(newCommentData)
    }
    const handleAddCommentSubmit = (event) => {
    event.preventDefault();
    const newComment = {
        id: nanoid(),
        rating: addCommentData.rating,
        title: addCommentData.title,
        desc: addCommentData.desc,
        name: addCommentData.name,
    }
    const newComments = [...Comments, newComment];
    setComments(newComments)
    addComment();
    }

    const handleDelete = (commentId) => {
        const newComments = [...Comments]
        const index = Comments.findIndex((comment) => commentId === comment.id)

        newComments.splice(index, 1)
        setComments(newComments)
    }
    //
    return (
    
        <div className='container-fluid d-flex justify-content-end overflow-hidden '> 
             {commentsVisible && 
             <div className='col-3 container-sm position-absolute shadow h-75 bg-body overflow-scroll' style={{"z-index": "30"}}>
            <div className="d-flex justify-content-around align-items-center mb-3 border-bottom border-primary  shadow-sm">
                    <FontAwesomeIcon icon={faChevronRight}  role="button"   size="lg" onClick={commentsHide}/>
                <div className='d-flex align-items-center gap-3'>
                <h2>Comments</h2>
                <span className='bg-secondary text-white rounded px-2'>{commentsNum()}</span>
                </div>
                <FontAwesomeIcon fade role='button' size='lg' icon={faPlus} onClick={addComment}/>
            </div>
             {showInput && (
             <div >
                <form action="submit" className='d-flex flex-column align-items-center' onSubmit={handleAddCommentSubmit}>
                    <input type="text" name='rating' placeholder='rate'onChange={handleAddCommentChange}/>
                    <input type="text" name='title' placeholder='title'onChange={handleAddCommentChange}/>
                    <input type="text" name='desc' placeholder='description'onChange={handleAddCommentChange}/>
                    <input type="text" name='name' placeholder='name'onChange={handleAddCommentChange}/>
                    
                  <button type="submit" className='form-control btn btn-outline-primary mt-2 w-75'>Submit</button>
                </form>
            </div>) }  
            {Comments.map(item => (
                <div className='px-2 ' key={Comments.id}>
                    <div className='d-flex  justify-content-between'>
                    <div >
                        <span>{item.rating}</span>
                        <h5 className='mt-1 text-capitalize'>{item.title}</h5>
                        <blockquote>  <p className='text-capitalize'>{item.desc}</p> </blockquote>
                    </div>
                    <div className="d-flex justify-content-end flex-column align-items-end">
                       <FontAwesomeIcon className='btn mb-3' icon={faX} onClick={() => handleDelete(Comments.id)}/>
                        <img src={item.image}className="rounded" width="70" alt="" />
                        <p className="text-muted text-capitalize my-2">{item.name}</p>
                        <p className='m-0 lead'>{item.dateOfPost}</p>
                    </div>

                    </div>
                    <hr className=' mx-2 mt-0' />
                </div>
            ))}
        </div>
}
    {commentsVisible ? "" : <span className="d-flex justify-content-end position-absolute">
    <FontAwesomeIcon icon={faComment} size="4x" flip='horizontal' role="button" className='text-primary border rounded' bounce onClick={commentsHide}/>
    </span>
}
        </div>
      
    )
}