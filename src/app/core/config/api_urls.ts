export const BASE_URL = "http://localhost:3000/" ;
export const URL_UPLOAD = "http://localhost:3000/uploads/"
export const BASE_API_URL = "http://localhost:3000/api"

export const API_URLS ={
    
    //Auth API
    register:`${BASE_API_URL}/users/register`,
    login:`${BASE_API_URL}/users/login`,
    role:`${BASE_API_URL}/users/role/`,

    //Users API
    allusers:`${BASE_API_URL}/users/allusers/`,
    getUserById:`${BASE_API_URL}/users/user/`,
    editUser:`${BASE_API_URL}/users/editUser/`,
    deleteUser:`${BASE_API_URL}/users/deleteUser/`,
    addToFavorites:`${BASE_API_URL}/users/addToFavorites/`,
    removeFromFavorites:`${BASE_API_URL}/users/removeFromFavorites/`,
    getVideoFavsByUserId:`${BASE_API_URL}/users/videoFav/`,

    //Videos API
    allVideos:`${BASE_API_URL}/videos/allVideos/`,
    addVideo:`${BASE_API_URL}/videos/addVideo/`,
    editVideo:`${BASE_API_URL}/videos/editVideo/`,
    deleteVideo:`${BASE_API_URL}/videos/deleteVideo/`,
    getVideoById:`${BASE_API_URL}/videos/video/`,
    VideoByCategory:`${BASE_API_URL}/videos/VideoByCategory/`,
    VideosByPlaylist:`${BASE_API_URL}/videos/VideosByPlaylist/`,
    totalVideos:`${BASE_API_URL}/videos/count/`,
    getFullVideoById:`${BASE_API_URL}/videos/count/`,
    toggleLike:`${BASE_API_URL}/videos/toggleLike/`,  //+id
    searchVideoByQuerry:`${BASE_API_URL}/videos/search/`,

    //Docs API
    addDoc:`${BASE_API_URL}/docs/addDoc/`,
    getAllDocs:`${BASE_API_URL}/docs/allDocs/`,
    deleteDoc:`${BASE_API_URL}/docs/deleteDoc/`,
    editDoc:`${BASE_API_URL}/docs/editDoc/`,
    getDocById:`${BASE_API_URL}/docs/doc/`,
    searchDocsByQuerry:`${BASE_API_URL}/docs/search/`,

    //Playlists API
    addPlaylist:`${BASE_API_URL}/playlists/addPlaylist/`,
    allPlaylists:`${BASE_API_URL}/playlists/allPlaylists/`,
    editPlaylist:`${BASE_API_URL}/playlists/editPlaylist/`,
    deletePlaylist:`${BASE_API_URL}/playlists/deletePlaylist/`,
    getPlaylistById:`${BASE_API_URL}/playlists/playlist/`,
    populatePlaylistById:`${BASE_API_URL}/playlists/fullPlaylist/`,
    allPlaylistsWithVideos:`${BASE_API_URL}/playlists/allPlaylistsWithVideos/`,

    //Notes API
    getAllNotes:`${BASE_API_URL}/notes/all-notes/`,
    addNote:`${BASE_API_URL}/notes/add-note/`,
    getNoteById:`${BASE_API_URL}/notes/note/`,
    editNote:`${BASE_API_URL}/notes/edit-note/`,
    deleteNote:`${BASE_API_URL}/notes/delete-note/`,
    getNoteByAuthorId:`${BASE_API_URL}/notes/author/`,

    //Quote API
    addQuote:`${BASE_API_URL}/quotes/add-quote/`,
    getRandomeQuote:`${BASE_API_URL}/quotes/random/`,
    editQuote:`${BASE_API_URL}/quotes/edit-quote/`,
    deleteQuote:`${BASE_API_URL}/quotes/delete-quote/`,
    getQuoteById:`${BASE_API_URL}/quotes/quote/`,
    getAllQuotes:`${BASE_API_URL}/quotes/allQuotes/`,


}
