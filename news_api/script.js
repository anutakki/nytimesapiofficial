// Built by LucyBot. www.lucybot.com
function getData(){
    var timesApiKey = "f1bb99ffa47b463e858491a110c726db"
    var timesSearchEndpoint = `http://api.nytimes.com/svc/suggest/v1/timestags?query={search-string}&[optional-param1=value1]&[...]&api-key={f1bb99ffa47b463e858491a110c726db}
`
    fetch(timesSearchEndpoint)
    .then(function(data) {
        return data.json()
    })
    .then(function(json) {
        
    }
    )
}


// var url = "https://api.nytimes.com/svc/suggest/v1/timestags.json";
// url += '?' + $.param({
//     'api-key': "f1bb99ffa47b463e858491a110c726db"
// });
// $.ajax({
//     url: url,
//     method: 'GET',
// }).done(function(result) {
//     console.log(result);
// }).fail(function(err) {
//     throw err;
// });
