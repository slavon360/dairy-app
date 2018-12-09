import React, { PureComponent } from 'react';
import { CommentsArea, CommentsList } from './components';
import styles from './CommentsBlock.module.css';

class CommentsBlock extends PureComponent {
    state = {
        comment: '',
        keyCode: null
    };
    setComment = (e) => {
        const { value } = e.target;
        console.log(e);
        this.setState({ comment: value });
    }
    keyHandler = (e) => {
        const { keyCode } = this.state;
        this.setState({ keyCode: e.keyCode });
        if (keyCode === 17 && e.keyCode === 13) {
            this.onAddComment();
        }
    };
    onAddComment = () => {
      const { selectedItem: { id }, addComment } = this.props;
      const { comment } = this.state;
      const item = { id, comment };
      addComment(item);
      this.setState({ comment: '' });
    };
    render() {
        const { comments } = this.props;
        const { comment } = this.state;
        return (
            <div className={styles.commentsBlock}>
                <h2>Comments #2</h2>
                <CommentsList commentsList={comments}/>
                <CommentsArea
                    keyHandler={this.keyHandler}
                    setComment={this.setComment}
                    comment={comment}
                />
            </div>
        );
    }
}

export default CommentsBlock;
