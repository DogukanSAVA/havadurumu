const url = 'https://api.openweathermap.org/data/2.5/'
const key = 'f78e34271ac7156d05095b80ada1db41'

const setQuery = (e) => {
          if(e.keyCode == '13')
          getResult(searchBar.value)
}

const getResult = (cityName) => {
        console.log  
}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)