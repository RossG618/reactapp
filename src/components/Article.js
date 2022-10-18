import React from 'react';
import { useSelector } from 'react-redux';
import { selectArticles } from '../features/articles/articlesSlice';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Articles from './Articles';

export default function Article () {
  const articles = useSelector(selectArticles)
  const { title } = useParams()
  const article = articles[title]

  return article ? (
    <div className='d-flex mt-3'>
      <div className='article-container container'>

      
      <div className='d-flex justify-content-between'>
      <h1 className='article-title'>{article.title}</h1>

      <img className='rounded-3 shadow m-2' src={article.image} alt="" width="160" height="130"/>
      </div>
      <p>By <Link to={`/authors/${article.author}`}>
        {article.author}
      </Link></p>
      <ReactMarkdown>
        {article.body}
      </ReactMarkdown>
    </div>
    <div className=''>
      <Articles/>
    </div>
    </div>
  ) : <p> No article found with that title... </p>
}
