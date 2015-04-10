var ViewModel = function () {

    var self = this;
    self.questions = ko.observableArray();
    self.error = ko.observable();
    self.detail = ko.observableArray();

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

    self.getQuestionDetail = function (item) {
        ajaxHelper(questionsUri + item.Id, 'GET').done(function (data) {
            self.detail(data);
        });
    }

    getAllQuestions();

    //Evaluate the selection
    $('button').click(function () {

        if ($(this).attr("value") === $('#correctanswer').attr("value"))
        {
            $(this).addClass('correct');
        }

        else
        {
            $(this).addClass('fail');
        }

    });

};

//Reset CSS changes when bringing up a new question
$('.nav-list').click(function () {
    if ($('button').hasClass('correct'))
    {
        $('button').removeClass('correct');
    }
});

$('.nav-list').click(function () {
    if ($('button').hasClass('fail')) {
        $('button').removeClass('fail');
    }
});

ko.applyBindings(new ViewModel());