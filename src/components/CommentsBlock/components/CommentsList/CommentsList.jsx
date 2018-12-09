import React from 'react';
import Comment from './Comment';
import styles from './CommentsList.module.css';

const CommentsList = ({ commentsList }) => (
    <div className={styles.commentsList}>
        {commentsList.map((comment, index) => {
            const { text, background } = comment;
            return (
                <Comment
                    key={`comment-${index}`}
                    text={text}
                    background={background}
                />
            )
        })}
    </div>
);

export default CommentsList;
