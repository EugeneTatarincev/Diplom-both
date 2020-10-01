const city = 'Piter'

citys = {
    Moscow: { lat:55.7522200, lon:37.6155600 },
    Voronezh: { lat:51.6605982, lon:39.2005858 },
    Piter: { lat:59.9311, lon:30.3609 }
}

const {lat, lon} = citys[city]

console.log(lat, lon)
