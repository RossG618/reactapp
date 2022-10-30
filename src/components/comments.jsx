import { faChainBroken, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nanoid } from '@reduxjs/toolkit';
import React, {useState} from 'react';
import { Data } from './preComments';
import './comment.css';
//
export default function CommentsBar(){
    const [Comments, setComments] = useState(Data);
    const [addCommentData, setAddCommentData] = useState({
        rating: '',
        title: '',
        desc: '',
        name: '',
    })
    const [showInput, setShowInput] = useState(false)
    const [commentsVisible, setCommentsVisible] = useState(false)
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

    return(
        <div className={commentsVisible ? 'col-3 container-sm position-absolute shadow h-75 bg-body overflow-scroll' : 'collapse' }style={{"z-index": "30"}}>
            <div className="d-flex justify-content-around align-items-center mb-3 border-bottom border-primary  shadow-sm">
                    <FontAwesomeIcon icon={commentsVisible ? faChainBroken : faChevronLeft } role="button"   size="lg" />
                <div className='d-flex align-items-center gap-3'>
                <h2>Comments</h2>
                <span className='bg-secondary text-white rounded px-2'>{commentsNum()}</span>
                </div>
                <FontAwesomeIcon bounce role='button' size='lg' icon={faPlus} onClick={addComment}/>
            </div>
             {showInput && (<div >
                <form action="submit" className='d-flex flex-column align-items-center' onSubmit={handleAddCommentSubmit}>
                    <input type="text" name='rating' placeholder='please enter rate'onChange={handleAddCommentChange}/>
                    <input type="text" name='title' placeholder='please enter title'onChange={handleAddCommentChange}/>
                    <input type="text" name='desc' placeholder='please enter description'onChange={handleAddCommentChange}/>
                    <input type="text" name='name' placeholder='please enter name'onChange={handleAddCommentChange}/>
                    
                  <button type="submit" className='form-control btn btn-outline-primary mt-2 w-75'>Submit</button>
                </form>
            </div>) }  
            {Comments.map(item => (
                <div className='px-2 '>
                    <div className='d-flex gap-4 '>
                    <div children>
                        <span>{item.rating}</span>
                        <h5 className='mt-1'>{item.title}</h5>
                        <blockquote className='text-capitalize'>  <p>{item.desc}</p> </blockquote>
                    </div>
                    <div>
                        <img src={item.image}className="rounded" width="70" alt="" />
                        <p className="text-muted text-capitalize my-2">{item.name}</p>
                        <p className='m-0 lead'>{item.dateOfPost}</p>
                    </div>

                    </div>
                    <hr className=' mx-2 mt-0' />
                </div>
            ))}
        </div>
    )
}