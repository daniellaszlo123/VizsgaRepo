import AjaxOsztaly from "../model/AjaxOsztaly.js"
import SelectOptionElemek from "../view/SelectOptionElemek.js"
import SzavakView from "../view/SzavakView.js"

class SzotarController{
    #token
    constructor(){
        this.#token = $("meta[name='csrf_token'").attr("content")
        const ajax = new AjaxOsztaly(this.#token)

        let pontszam = 0

        const szavakLekerVegpont = "/api/szavak"
        const temakLekerVegpont = "/api/tema"
        const adottTemabanLevoSzavakLekerVegpont = "/api/szavak/tema/"

        ajax.adatLeker(szavakLekerVegpont, this.adatokBetolt)
        ajax.adatLeker(temakLekerVegpont, this.temakBetolt)

        $(window).on("p", (adat)=> {
            if ($(`#${adat.detail.index}`).val() === adat.detail.adat.magyar) {
                adat.detail.visszajelzes.html("✔")
                adat.detail.inputMezo.off("keyup")
                $("#pontszam").html(++pontszam)

            }else{
                adat.detail.visszajelzes.html("❌")
            }
        })

        $("select").on("change", ()=> {
            pontszam = 0
            $("#pontszam").html(pontszam)
            const kivalasztott = $("select option:selected")

            if(kivalasztott.val() == -1){
                ajax.adatLeker(szavakLekerVegpont, this.adatokBetolt)
            }else{
                ajax.adatCsoportLeker(adottTemabanLevoSzavakLekerVegpont, this.adatokBetolt, kivalasztott.val())
            }

        })
    }
    adatokBetolt(tomb){
        const szulo = $("#szotar")
        new SzavakView(szulo, tomb)
    }

    temakBetolt(tomb){
        const szulo = $("select")
        szulo.html("")
        szulo.append(`
            <option value="-1" selected>Válassz témát</option>
        `)
        new SelectOptionElemek(szulo, tomb)
    }

    
}

export default SzotarController