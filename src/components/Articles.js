import React from "react";
import { useSelector } from "react-redux";
import { selectArticles, filterArticles } from "../features/articles/articlesSlice";
import Search from "./Search";
import { Link, useLocation } from "react-router-dom";
// Import Link from React Router
export default function Articles () {
  const articles = useSelector(selectArticles)
  
  // grab the search value from useLocation()
  const {search} = useLocation();
  // get the queryParams from new URLSearchParams() 
  const queryParams = new URLSearchParams(search);
  const title = queryParams.get('title') // <-- fix me!
  
  const filteredArticles = title ? filterArticles(title, articles) : Object.values(articles)

//   var $ = require(' jquery')
//   $(document).ready( function () {
//     $('#myTable').DataTable();
// } );
  return (
    <main>
      <h1>Articles</h1>
      
      <table className="table table-hover">
        <tbody>

       
        { 
          filteredArticles.map(article => {
            return (
              

              <tr key={article.slug}>
          

                {/* Replace these a tags! */}
               <td> <Link to={`/articles/${article.slug}`}>
                  {article.title}
                </Link></td>
                <td className="col-2">By {article.author}</td>
              </tr>

            )
          })
        }
         </tbody>
      </table>
      <Search />
    </main>
  )
}
