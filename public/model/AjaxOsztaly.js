class AjaxOsztaly{
    #token
    constructor(token){
        this.#token=token
    }

    adatLeker(vegpont, callback){
        const tomb=[]

        $.ajax({
            contentType: "application/json",
            dataType: "json",
            url: vegpont,
            type: "GET",
            success: function (eredmeny) {
                $.each(eredmeny, function (index,  elem) {
                    tomb.push(elem)
                })
                callback(tomb)
            }
        })
    }

    adatCsoportLeker(vegpont, callback, index){
        vegpont += index
        const tomb=[]

        $.ajax({
            contentType: "application/json",
            dataType: "json",
            url: vegpont,
            type: "GET",
            success: function (eredmeny) {
                $.each(eredmeny, function (index,  elem) {
                    tomb.push(elem)
                })
                callback(tomb)
            }
        })
    }

}
export default AjaxOsztaly