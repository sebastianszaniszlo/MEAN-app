import $ from 'jquery';

const baseUrl = 'http://localhost:3000';

class HttpService{
    constructor(){

    }

    Get(urlPart, data){
        const url = baseUrl + urlPart;
        var jqXHR = $.ajax({
          type: 'GET',
          url: url,
          data: data,
          contentType: 'application/json',
          dataType: 'json'
        });

        return jqXHR;
    }

    Post(urlPart, data){
        const url = baseUrl + urlPart;
        var jqXHR = $.ajax({
          type: 'POST',
          url: url,
          data: data,
          contentType: 'application/json',
          dataType: 'json'
        });

        return jqXHR;
    }

    Put(urlPart, data){
        const url = baseUrl + urlPart;
        var jqXHR = $.ajax({
          type: 'PUT',
          url: url,
          data: data,
          contentType: 'application/json',
          dataType: 'json'
        });

        return jqXHR;
    }

    Delete(urlPart, data){
        const url = baseUrl + urlPart;
        var jqXHR = $.ajax({
          type: 'DELETE',
          url: url,
          data: data,
          contentType: 'application/json',
          dataType: 'json'
        });

        return jqXHR;
    }
}

export default new HttpService();
