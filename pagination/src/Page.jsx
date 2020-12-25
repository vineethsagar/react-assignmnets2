import React from 'react'

function Page({posts}) {


    return (
        <ul>
            {posts.map((post)=>(
                <div>
                    {post.title};
                </div>
            ))}
        </ul>
    )
}

export default Page
