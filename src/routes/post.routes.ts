import { Router } from 'express';
const router = Router();

import { getPosts, createPost, getPost, deletePost, updatePost } from '../controllers/post.controller';

router.route('/')
    .get(getPosts)
    .post(createPost)

router.route('/:postID')
    .get(getPost)
    .delete(deletePost)
    .put(updatePost)

export default router;