var url = "http://api.openweathermap.org/data/2.5/forecast/daily?lat={{ page.search.lat }}&lon={{ page.search.lon }}&mode=json&units=metric&appid={{ site.apiKey.openweathermap }}"
$.getJSON(url).then(function(data) {
    var result = data.list[0];
    var temp = result.temp;
    var weather = result.weather[0];
    $(".weather").after(
        '<div class="row">'+
        '<div class="col-12 icon"><i class="owf owf-'+weather.id+' owf-5x icon"></i></div>' +
        '<div class="col-12 description">'+weather.description+'</div>' +
        '<div class="col-12 temperature">'+Math.round(temp.day)+'°C</div>' +
        '</div>');
    $(".description").css('textTransform', 'capitalize');
    console.log(data);
});