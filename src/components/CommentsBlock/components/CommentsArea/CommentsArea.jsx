import React from 'react';
import styles from './CommentsArea.module.css';

const CommentsArea = ({ setComment, keyHandler, comment }) => (
    <div className={styles.commentsArea}>
        <div className={styles.leftSide}/>
        <div className={styles.rightSide}>
            <textarea
    onKeyPress={keyHandler}
    onChange={setComment}
    value={comment}
    onKeyDown={keyHandler}
    />
        </div>
    </div>
);

export default CommentsArea;
