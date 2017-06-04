rateApp.controller("rateLyricsController", function ($scope, $http) {

    var serviceUrl = "https://testlyrics.mybluemix.net/lyrics?lyrics=";

    $scope.lyrics = undefined;
    $scope.notAppropiated = false;
    $scope.appropiated = false;

    $scope.rate = function () {
        if ($scope.lyrics === undefined || $scope.lyrics === "") {
            return;
        }

        var lyricsArray = $scope.lyrics.split("\n");
        var oneLineLyrics = "";
        for (var i = 0; i < lyricsArray.length; i++) {
            oneLineLyrics += lyricsArray[i] + " ";
        }
        var uri = serviceUrl + oneLineLyrics;

        $http.get(uri).
            then(function (response) {

                var anger = response.data.document_tone.tone_categories[0].tones[0].score;
                var fear = response.data.document_tone.tone_categories[0].tones[2].score;
                var sadness = response.data.document_tone.tone_categories[0].tones[4].score;

                if (anger > 0.5 || fear > 0.5 || sadness > 0.5) {
                    $scope.notAppropiated = true;
                    $scope.appropiated = false;
                }
                else {
                    $scope.notAppropiated = false;
                    $scope.appropiated = true;
                }

            },
            function () {
                alert("Error!!");
            });
    };

    $scope.setImage = function () {
        $scope.notAppropiated = false;
        $scope.appropiated = false;
        $scope.imageSource = $scope.lyrics;
    };
});

$(document).ready(function () {
    $("#notAppropiated").width(200).height(200);
    $("#appropiated").width(200).height(200);
});