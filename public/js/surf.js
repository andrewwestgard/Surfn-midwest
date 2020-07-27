// Variables and DOM Elements

//AJAX calls
//grab all the locations

// get these to show in our console locally
const getLocations = () => {
    $.ajax({
        url: '/api/locations',
        method: 'GET',
    }).then(data => {
        console.log(data)
    })
}
// grab all user data 
const getUserData = () => {
    return $.ajax({
        url: 'api/user_data',
        method: 'GET'
    }).then(data => {
        console.log(data)
    })
}
// grab forecast data
const getForecast = () => {
    $.ajax({
        url: '/api/data',
        method: 'GET'
    }).then(data => {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].swell)
            
        }
        console.log(data)
    })
}

const getUserInput = () => {
    $.ajax({
        url: 'api/UserInput',
        method: 'GET'
    }).then(data => {
        console.log(data)
    })
}

//POST ROUTES

/*
if (location == 'michigan') {
    const locationId = 1
} else if (location == 'wisconsin') {
    const location = 2
} else if (location == 'minnesota') {
    const location = 3
}else{
    return error;
} return location

location = ;
locationId = location

**OFFICE HOURS QUESTION
*/

function postUserInput(radFactor, image, comment,LocationId,UserId) {
    $.post("/api/signup", {
      radFactor: radFactor,
      image: image,
      comment: comment,
      location: LocationId,
      userId: UserId
    }).then(results => {
        //append elements to page/writefile
        //copy the brewery app
    })
};


// we want to grab the information that is to be deleted in the object
// ex: (if we want to delete an image) response.image[0] (something like this)
function deleteUserInput (){
    
}