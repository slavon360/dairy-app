import React, { PureComponent } from 'react';
import styles from './Comment.module.css';

class Comment extends PureComponent {
    render() {
        const { text, background } = this.props;
        return (
            <div className={styles.commentWrp}>
                <div className={styles.leftSide}>
                    <div className={styles.rectangle} style={{backgroundColor: background}}/>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.text}>{text}</div>
                </div>
            </div>
        );
    }
}

export default Comment;
