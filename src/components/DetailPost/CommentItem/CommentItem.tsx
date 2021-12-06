import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { GetCommentByPostId } from '../../../features/comment/commentAction';
import { selectCommentsByPostId } from '../../../features/comment/commentSelector';
import { Comment } from '../../../features/comment/interface';
import './CommentItem.css';
import { CommentItemSkeleton } from './CommentItemSkeleton';

interface Props {
  post_id: string;
}
export const CommentItem = ({ post_id }: Props) => {
  const dispatch = useAppDispatch();
  const postComment = useAppSelector(selectCommentsByPostId);
  useEffect(() => {
    dispatch(GetCommentByPostId(post_id));
  }, [post_id]);
  return (
    <div className='dp-cmt-box'>
      <div className='dp-cmt-box-wrapper'>
        <div className='nb-item'>
          {postComment.loading ? (
            <CommentItemSkeleton />
          ) : (
            postComment.postComments.map((comment: Comment) => (
              <div className='dp-cmt-card'>
                <div className='profile-pic'>
                  <img src={`https://source.unsplash.com/random/`} alt='' />
                </div>
                <div className='dp-cmt-detail'>
                  <div>
                    <div className='username'>
                      <strong>{comment.username}</strong>
                      {comment.content}
                    </div>
                  </div>
                  <div className='dp-sub-text'>
                    <i className='ri-heart-3-line'>
                      {comment.comment_like_count}
                    </i>
                    <p>Reply</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
