export const BASE_URL = "http://localhost:3000/" ;
export const URL_UPLOAD = "http://localhost:3000/uploads/"
export const BASE_API_URL = "http://localhost:3000/api"

export const API_URLS ={
    auth:{
    //Auth API
    register:`${BASE_API_URL}/users/register`,
    login:`${BASE_API_URL}/users/login`,
    role:`${BASE_API_URL}/users/role/`,
    },


    //Users API
    users:{
    allusers:`${BASE_API_URL}/users/allusers/`,
    getUserById:`${BASE_API_URL}/users/user/`,
    editUser:`${BASE_API_URL}/users/editUser/`,
    deleteUser:`${BASE_API_URL}/users/deleteUser/`,
    getVideoFavsByUserId:`${BASE_API_URL}/users/videoFav/`,
     },

    videos:{
    //Videos API
    allVideos:`${BASE_API_URL}/videos/allVideos/`,
    addVideo:`${BASE_API_URL}/videos/addVideo/`,
    editVideo:`${BASE_API_URL}/videos/editVideo/`,
    deleteVideo:`${BASE_API_URL}/videos/deleteVideo/`,
    getVideoById:`${BASE_API_URL}/videos/video/`,
    getVideosByCourseId:`${BASE_API_URL}/videos/videosByCourseId/`,
    videosBySectionId:`${BASE_API_URL}/videos/videosBySectionId/`,    
    VideosByPlaylist:`${BASE_API_URL}/videos/VideosByPlaylist/`,
    totalVideos:`${BASE_API_URL}/videos/count/`,
    getFullVideoById:`${BASE_API_URL}/videos/fullVideos/`,
    toggleLike:`${BASE_API_URL}/videos/toggleLike/`,  // !!!!!!!!!!
    searchVideoByQuerry:`${BASE_API_URL}/videos/search?q=`,
    incrementViews:`${BASE_API_URL}/videos/incrementViews`,


    },

    //Docs API
    docs:{
    addDoc:`${BASE_API_URL}/docs/addDoc/`,
    getAllDocs:`${BASE_API_URL}/docs/allDocs/`,
    deleteDoc:`${BASE_API_URL}/docs/deleteDoc/`,
    editDoc:`${BASE_API_URL}/docs/editDoc/`,
    getDocById:`${BASE_API_URL}/docs/doc/`,
    getDocByCourse:`${BASE_API_URL}/docs/docByCourse/`,
    getDocsBySection:`${BASE_API_URL}/docs/docBySection/`,
    searchDocsByQuerry:`${BASE_API_URL}/docs/search/q=`,
    },

    //Playlists API
    playlists:{
    addPlaylist:`${BASE_API_URL}/playlists/addPlaylist/`,
    allPlaylists:`${BASE_API_URL}/playlists/allPlaylists/`,
    editPlaylist:`${BASE_API_URL}/playlists/editPlaylist/`,
    deletePlaylist:`${BASE_API_URL}/playlists/deletePlaylist/`,
    getPlaylistById:`${BASE_API_URL}/playlists/playlist/`,
    populatePlaylistById:`${BASE_API_URL}/playlists/fullPlaylist/`,
    allPlaylistsWithVideos:`${BASE_API_URL}/playlists/allPlaylistsWithVideos/`,
    },

    //Notes API
    notes:{
    getAllNotes:`${BASE_API_URL}/notes/all-notes/`,
    addNote:`${BASE_API_URL}/notes/add-note/`,
    getNoteById:`${BASE_API_URL}/notes/note/`,
    editNote:`${BASE_API_URL}/notes/edit-note/`,
    deleteNote:`${BASE_API_URL}/notes/delete-note/`,
    getNoteByAuthorId:`${BASE_API_URL}/notes/author/`,
    },

    //Quotes API
    quotes:{
    addQuote:`${BASE_API_URL}/quotes/add-quote/`,
    getRandomeQuote:`${BASE_API_URL}/quotes/random/`,
    editQuote:`${BASE_API_URL}/quotes/edit-quote/`,
    deleteQuote:`${BASE_API_URL}/quotes/delete-quote/`,
    getQuoteById:`${BASE_API_URL}/quotes/quote/`,
    getAllQuotes:`${BASE_API_URL}/quotes/allQuotes/`,
    },

    likes:{
        addLike:`${BASE_API_URL}/likes/likeVideo`,
        removeLike:`${BASE_API_URL}/likes/unlikeVideo`,
        isLiked:`${BASE_API_URL}/likes/isLiked`,


    },

    
    favs:{
        addFav:`${BASE_API_URL}/favs/addToFavorites`,
        removeFav:`${BASE_API_URL}/favs/removeFromFavorites`,
        getFavsByUserId:`${BASE_API_URL}/favs/favsByUser`,
        isFav:`${BASE_API_URL}/favs/isFav`,





    },

    courses:{
        addCourse:`${BASE_API_URL}/courses/add-course/`,
        getCourseById:`${BASE_API_URL}/courses/course/`,
        deleteCourse:`${BASE_API_URL}/courses/delete-course/`,
        updateCourse:`${BASE_API_URL}/courses/edit-course/`,
        allCourses:`${BASE_API_URL}/courses/allCourses/`,
        coursesBySection:`${BASE_API_URL}/courses/coursesBySection/`,
        onSubscribe:`${BASE_API_URL}/courses/subscribe`,
        onUnSubscribe:`${BASE_API_URL}/courses/unsubscribe`,
        isSubscribed:`${BASE_API_URL}/courses/isSubscribed`,


    },

    sections:{
        addSection:`${BASE_API_URL}/sections/add-section/`,
        getSectionById:`${BASE_API_URL}/sections/section/`,
        deleteSection:`${BASE_API_URL}/sections/delete-section/`,
        updateSection:`${BASE_API_URL}/sections/edit-section/`,
        allSections:`${BASE_API_URL}/sections/allsections/`,
        getSectionsByLevel:`${BASE_API_URL}/sections/sectionsByLevel/`,
        

    },

    subscribes:{
        getSubscribesById:`${BASE_API_URL}/subscribes/getSubscribesById`,

    }
   
    
   
}
