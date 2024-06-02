import { baseUrl, baseClientUrl, loginUrl, registerUrl, meUrl, posts, postById, postsById, getPostImage, uploadFiles, uploadPostImage, updateProfileData, usersUrl, userById, messageUrl, messageId, messageSearchUrl, deleteMessageUrl, chatIdUrl, uploadStudioVideoUrl, uploadStudioPreviewUrl, studioVideoUrl, videoByIdUrl, commentRepliesUrl, commentSortUrl, commentUrl, shortIdUrl, shortsUrl, videoCommentUrl, videoCommentWithQueryUrl } from "../utils/network";

  
  describe('URL building functions', () => {
    it('correctly constructs the base URL', () => {
      expect(baseUrl).toBe('http://localhost:4444');
    });
  
    it('correctly constructs the base client URL', () => {
      expect(baseClientUrl).toBe('http://localhost:3000');
    });
  
    it('correctly constructs the login URL', () => {
      expect(loginUrl).toBe('http://localhost:4444/auth/login');
    });
  
    it('correctly constructs the register URL', () => {
      expect(registerUrl).toBe('http://localhost:4444/auth/register');
    });
  
    it('correctly constructs the "me" URL', () => {
      expect(meUrl).toBe('http://localhost:4444/auth/me');
    });
  
    it('correctly constructs the posts URL', () => {
      expect(posts).toBe('http://localhost:4444/posts');
    });
  
    it('correctly constructs the post by ID URL', () => {
      const postId = '12345';
      expect(postById(postId)).toBe('http://localhost:4444/post/12345');
    });
  
    it('correctly constructs the posts by ID URL', () => {
      const postId = '12345';
      expect(postsById(postId)).toBe('http://localhost:4444/posts/12345');
    });
  
    it('correctly constructs the get post image URL', () => {
      const postId = '12345';
      expect(getPostImage(postId)).toBe('http://localhost:4444/uploads/12345');
    });
  
    it('correctly constructs the upload files URL', () => {
      const chatId = 'abc123';
      expect(uploadFiles(chatId)).toBe('http://localhost:4444/upload/files/abc123');
    });
  
    it('correctly constructs the upload post image URL', () => {
      expect(uploadPostImage).toBe('http://localhost:4444/upload');
    });
  
    it('correctly constructs the update profile data URL', () => {
      const userId = 'user123';
      expect(updateProfileData(userId)).toBe('http://localhost:4444/profile/user123');
    });
  
    it('correctly constructs the users URL', () => {
      expect(usersUrl).toBe('http://localhost:4444/people');
    });
  
    it('correctly constructs the user by ID URL', () => {
      const userId = 'user123';
      expect(userById(userId)).toBe('http://localhost:4444/people/user123');
    });
  
    it('correctly constructs the message URL', () => {
      expect(messageUrl).toBe('http://localhost:4444/message');
    });
  
    it('correctly constructs the message by ID URL', () => {
      const messageIdtest = 'msg123';
      expect(messageId(messageIdtest)).toBe('http://localhost:4444/message/msg123');
    });
  
    it('correctly constructs the message search URL', () => {
      const query = 'hello';
      expect(messageSearchUrl(query)).toBe('http://localhost:4444/message/search?q=hello&s=NEWEST');
    });
  
    it('correctly constructs the delete message URL', () => {
      const chatId = 'chat123';
      expect(deleteMessageUrl(chatId)).toBe('http://localhost:4444/message/chat123');
    });
  
    it('correctly constructs the chat ID URL', () => {
      const chatId = 'chat123';
      expect(chatIdUrl(chatId)).toBe('http://localhost:4444/chat/chat123');
    });
  
    it('correctly constructs the upload studio video URL', () => {
      expect(uploadStudioVideoUrl).toBe('http://localhost:4444/upload/studio');
    });
  
    it('correctly constructs the upload studio preview URL', () => {
      expect(uploadStudioPreviewUrl).toBe('http://localhost:4444/upload/studio/preview');
    });
  
    it('correctly constructs the studio video URL', () => {
      expect(studioVideoUrl()).toBe('http://localhost:4444/studio/video?page=1&grid=10');
    });
  
    it('correctly constructs the video by ID URL', () => {
      const videoId = 'video123';
      expect(videoByIdUrl(videoId)).toBe('http://localhost:4444/studio/video/video123');
    });
    it('correctly constructs the video comment URL', () => {
        const videoId = 'video123';
        expect(videoCommentUrl(videoId)).toBe('http://localhost:4444/studio/comment/video/video123');
      });
    
      it('correctly constructs the video comment with query URL', () => {
        const videoId = 'video123';
        const from = 0;
        const to = 10;
        expect(videoCommentWithQueryUrl(videoId, from, to)).toBe('http://localhost:4444/studio/comment/video/video123?from=0&to=10');
      });
    
      it('correctly constructs the comment URL', () => {
        const commentId = 'comment123';
        expect(commentUrl(commentId)).toBe('http://localhost:4444/studio/comment/comment123');
      });
    
      it('correctly constructs the comment replies URL', () => {
        const commentId = 'comment123';
        expect(commentRepliesUrl(commentId)).toBe('http://localhost:4444/studio/comment/replies/comment123');
      });
    
      it('correctly constructs the comment sort URL', () => {
        const videoId = 'video123';
        const sortBy = 'likes';
        expect(commentSortUrl(videoId, sortBy)).toBe('http://localhost:4444/studio/comment/video123?sortBy=likes');
      });
    
      it('correctly constructs the shorts URL', () => {
        const from = 0;
        const to = 10;
        expect(shortsUrl(from, to)).toBe('http://localhost:4444/shorts?from=0&to=10');
      });
    
      it('correctly constructs the short by ID URL', () => {
        const videoId = 'short123';
        expect(shortIdUrl(videoId)).toBe('http://localhost:4444/shorts/short123');
      });
})