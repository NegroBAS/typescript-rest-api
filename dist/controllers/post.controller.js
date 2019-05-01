"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const posts = yield conn.query("SELECT * FROM posts");
        return res.json(posts[0]);
    });
}
exports.getPosts = getPosts;
;
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPost = req.body;
        const conn = yield database_1.connect();
        conn.query('INSERT INTO posts SET ?', [newPost]);
        return res.json({
            message: 'Post created'
        });
    });
}
exports.createPost = createPost;
function getPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postID;
        const conn = yield database_1.connect();
        const posts = yield conn.query('SELECT * FROM posts WHERE id = ?', [id]);
        return res.json(posts[0]);
    });
}
exports.getPost = getPost;
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postID;
        const conn = yield database_1.connect();
        yield conn.query('DELETE FROM posts WHERE id = ?', [id]);
        return res.json({
            message: 'Post deleted'
        });
    });
}
exports.deletePost = deletePost;
function updatePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postID;
        const updatePost = req.body;
        const conn = yield database_1.connect();
        yield conn.query('UPDATE posts SET ? WHERE id = ?', [updatePost, id]);
        return res.json({
            message: 'Post updated'
        });
    });
}
exports.updatePost = updatePost;
