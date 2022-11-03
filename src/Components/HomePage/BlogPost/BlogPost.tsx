import React from "react";
import "./BlogPost.css"
import post_1 from "../../../imgg/BlogPost/post_1.jpg"
import post_2 from "../../../imgg/BlogPost/post_2.jpg"
import post_3 from "../../../imgg/BlogPost/post_3.jpg"


const BlogPost = () => {
        return(
            <div className="mainContainer-BlogPost">
        <div className="container-BlogPost">
            <div className="BlogPost-heading">
                <div id="BlogPost-heading">
                        <span>Blog Post</span>
                </div>
                <div id="Blogpost-text">
                    <span>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.</span>
                </div>

            </div>
            <div className="BlogPost-Links">
                <div className="BlogPost-Links-cards">
                    <div className="Blogpost-linkcard-image">
                           <a href="#"> <img src={post_1} alt=""/></a>
                    </div>
                    <div className="Blogpost-linkcard-date">
                        <span>
                            May 27, 2021 &#183; 12 Comments

                        </span>
                    </div>
                    <div className="Blogpost-linkcard-heading">
                            <a href="#">Importance of getting a notification</a>
                    </div>
                    <div className="Blogpost-linkcard-text">
                            <span>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.</span>
                    </div>
                    <div className="Blogpost-linkcard-link">
                        <a href="#">Read more &gt;</a>

                    </div>

                </div>
                <div className="BlogPost-Links-cards">
                    <div className="Blogpost-linkcard-image">
                           <a href="#"> <img src={post_2} alt=""/></a>
                    </div>
                    <div className="Blogpost-linkcard-date">
                        <span>
                            May 27, 2021 &#183; 12 Comments

                        </span>
                    </div>
                    <div className="Blogpost-linkcard-heading">
                            <a href="#">Importance of getting a notification</a>
                    </div>
                    <div className="Blogpost-linkcard-text">
                            <span>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.</span>
                    </div>
                    <div className="Blogpost-linkcard-link">
                        <a href="#">Read more &gt;</a>

                    </div>

                </div>
                <div className="BlogPost-Links-cards">
                    <div className="Blogpost-linkcard-image">
                           <a href="#"> <img src={post_3} alt=""/></a>
                    </div>
                    <div className="Blogpost-linkcard-date">
                        <span>
                            May 27, 2021 &#183; 12 Comments

                        </span>
                    </div>
                    <div className="Blogpost-linkcard-heading">
                            <a href="#">Importance of getting a notification</a>
                    </div>
                    <div className="Blogpost-linkcard-text">
                            <span>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.</span>
                    </div>
                    <div className="Blogpost-linkcard-link">
                        <a href="#">Read more &gt;</a>

                    </div>

                </div>

            </div>
       
      </div>
    </div>
        )

}


export default BlogPost;