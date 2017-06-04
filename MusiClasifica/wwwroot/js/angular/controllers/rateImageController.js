rateApp.controller("rateImageController", function ($scope, $http) {

    var serviceUrl = "https://testloopbackvis.mybluemix.net/VisualRec?imageurl=";

    $scope.imageURL = undefined;
    $scope.notAppropiated = false;
    $scope.appropiated = false;

    $scope.rate = function () {
        if ($scope.imageURL === undefined || $scope.imageURL === "") {

            return;
        }

        var uri = serviceUrl + $scope.imageURL;

        $http.get(uri).
            then(function (response) {
                console.log(response.data.images[0].classifiers.length);

                if (response.data.images[0].classifiers.length > 0) {
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
        $scope.imageSource = $scope.imageURL;
    };
});

$(document).ready(function () {
    $("#cover").width(200).height(200);
    $("#notAppropiated").width(200).height(200);
    $("#appropiated").width(200).height(200);
});