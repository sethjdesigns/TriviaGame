var ViewModel = function () {

    var self = this;
    self.questions = ko.observableArray();
    self.error = ko.observable();

    var questionsUri = '/api/questions/';

    function ajaxHelper(uri, method, data) {
        self.error(''); // Clear error message
        return $.ajax({
            type: method,
            url: uri,
            dataType: 'json',
            contentType: 'application/json',
            data: data ? JSON.stringify(data) : null
        }).fail(function (jqXHR, textStatus, errorThrown) {
            self.error(errorThrown);
        });
    }

    function getAllQuestions() {
        ajaxHelper(questionsUri, 'GET').done(function (data) {
            self.questions(data);
        });
    }

    getAllQuestions();

};

ko.applyBindings(new ViewModel());