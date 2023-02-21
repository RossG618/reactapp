import React from 'react'

export function editOnly()  {
    return ( 
        <div>
             <input type="text" name='rating' placeholder='please enter rate'onChange={handleAddCommentChange}/>
                    <input type="text" name='title' placeholder='please enter title'onChange={handleAddCommentChange}/>
                    <input type="text" name='desc' placeholder='please enter description'onChange={handleAddCommentChange}/>
                    <input type="text" name='name' placeholder='please enter name'onChange={handleAddCommentChange}/>
        </div>
     );
}
 
