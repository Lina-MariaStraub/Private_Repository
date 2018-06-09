var L07_Interfaces;
(function (L07_Interfaces) {
    window.addEventListener("load", init);
    var address = "https://eia2node257767.herokuapp.com/";
    var inputs = document.getElementsByTagName("input");
    function init() {
        console.log("Init");
        //Enventlistener auf Button �bergeben
        var insertButton = document.getElementById("insert");
        var searchButton = document.getElementById("search");
        var refreshButton = document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }
    L07_Interfaces.init = init;
    //Funktion um Daten der Studenten zu speichern
    function insert(_event) {
        var genderButton = document.getElementById("male");
        var matrikel = inputs[2].value;
        var studi;
        //Interface �bergeben
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            studiengang: document.getElementsByTagName("select").item(0).value,
        };
        var stringifyJSON = JSON.stringify(studi);
        console.log(stringifyJSON);
        var xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=insert&data=" + stringifyJSON, true);
        xhr.send();
    }
    function handleChangeInsert(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function refresh(_event) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=findAll", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                var studis = JSON.parse(xhr.responseText);
                console.log(studis);
                var answer = "";
                for (var i = 0; i < studis.length; i++) {
                    answer += "Name: " + studis[i].name + ", " + studis[i].firstname + ", Matrikel: " + studis[i].matrikel + ", "
                        + studis[i].studiengang + ", Mann: " + studis[i].gender + ", Alter: " + studis[i].age + "\n";
                }
                document.getElementsByTagName("textarea")[1].value = answer;
            }
        };
        xhr.send();
    }
    function handleChangeRefresh(_event) {
        var output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
    function search(_event) {
        var matrikel = inputs[6].value;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=find&data=" + matrikel, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                var studi = JSON.parse(xhr.responseText);
                console.log(studi);
                var answer = "Name: " + studi.name + ", " + studi.firstname + ", Matrikel: " + studi.matrikel + ", "
                    + studi.studiengang + ", Mann: " + studi.gender + ", Alter: " + studi.age + "\n";
                document.getElementsByTagName("textarea")[0].value = answer;
            }
        };
        xhr.send();
    }
    function handleChangeSearch(_event) {
        var output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
})(L07_Interfaces || (L07_Interfaces = {}));
//# sourceMappingURL=Client7.js.map