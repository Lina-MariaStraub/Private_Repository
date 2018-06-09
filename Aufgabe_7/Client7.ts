namespace L07_Interfaces {
    window.addEventListener( "load", init );

    let address: string = "https://eia2node257767.herokuapp.com/";

    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName( "input" );

    export function init( ): void {
        console.log( "Init" );

        //Enventlistener auf Button �bergeben
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById( "insert" );
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById( "search" );
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById( "refresh" );

        insertButton.addEventListener( "click", insert );
        refreshButton.addEventListener( "click", refresh );
        searchButton.addEventListener( "click", search );
    }

    //Funktion um Daten der Studenten zu speichern
    function insert( _event: Event ): void {

        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById( "male" );
        let matrikel: string = inputs[2].value;
        let studi: Studi;

        //Interface �bergeben
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt( matrikel ),
            age: parseInt( inputs[3].value ),
            gender: genderButton.checked,
            studiengang: document.getElementsByTagName( "select" ).item( 0 ).value,
        };

        let stringifyJSON: string = JSON.stringify( studi );
        console.log( stringifyJSON );

        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open( "GET", address + "?command=insert&data=" + stringifyJSON, true );
        xhr.send();
    }

    function handleChangeInsert( _event: ProgressEvent ): void {
        var xhr: XMLHttpRequest = ( <XMLHttpRequest>_event.target );
        if ( xhr.readyState == XMLHttpRequest.DONE ) {
            alert( xhr.response );

        }
    }

    function refresh( _event: Event ): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open( "GET", address + "?command=findAll", true );
        xhr.onreadystatechange = function (): void {
            if (xhr.readyState == XMLHttpRequest.DONE) {

                let studis: Studi[] = JSON.parse(xhr.responseText);

                console.log(studis);
                let answer: string = "";

                for (let i = 0; i < studis.length; i++) {
                    answer += "Name: " + studis[i].name + ", " + studis[i].firstname + ", Matrikel: " + studis[i].matrikel + ", "
                        + studis[i].studiengang + ", Mann: " + studis[i].gender + ", Alter: " + studis[i].age + "\n";
                }

                document.getElementsByTagName("textarea")[1].value = answer;
            }
        }
        xhr.send();
    }

    function handleChangeRefresh( _event: ProgressEvent ): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName( "textarea" )[1];
        output.value = "";
        var xhr: XMLHttpRequest = ( <XMLHttpRequest>_event.target );
        if ( xhr.readyState == XMLHttpRequest.DONE ) {
            output.value += xhr.response;

        }
    }

    function search( _event: Event ): void {
        let matrikel: string = inputs[6].value;

        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open( "GET", address + "?command=find&data=" + matrikel, true );
        xhr.onreadystatechange = function (): void {
            if (xhr.readyState == XMLHttpRequest.DONE) {

                let studi: Studi = JSON.parse(xhr.responseText);
                console.log(studi);

                let answer: string = "Name: " + studi.name + ", " + studi.firstname + ", Matrikel: " + studi.matrikel + ", "
                        + studi.studiengang + ", Mann: " + studi.gender + ", Alter: " + studi.age + "\n";

                document.getElementsByTagName("textarea")[0].value = answer;
            }
        }
        xhr.send();
    }

    function handleChangeSearch( _event: ProgressEvent ): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName( "textarea" )[0];
        output.value = "";
        var xhr: XMLHttpRequest = ( <XMLHttpRequest>_event.target );
        if ( xhr.readyState == XMLHttpRequest.DONE ) {
            output.value += xhr.response;

        }
    }
}
