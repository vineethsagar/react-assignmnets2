import React from 'react'

function Paginations({postsPerPage,totalPosts,paginate}) {
    const pagesNumbers = []

    for(let i =1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pagesNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                {pagesNumbers.map((number)=>
                (<div key={number}>
                        <a href='!#' onClick={()=>{paginate(number)}}>
                            {number}
                        </a>
                    </div>)
                )}
            </ul>
        </nav>
    )
}

export default Paginations
