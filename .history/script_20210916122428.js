const url = 'https://api.openweathermap.org/data/2.5/'
const key = 'f78e34271ac7156d05095b80ada1db41'

const setQuery = (e) => {
          if(e.keyCode == '13')
          getResult()
}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)