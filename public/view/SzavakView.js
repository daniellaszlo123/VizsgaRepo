import SzoView from "./SzoView.js"

class SzavakView{
    constructor(szulo, tomb){
        szulo.html("")
        szulo.append(`
        <div class="container text-center">
                <div class="row ">
                    <h4 class="col">ANGOL</h4>
                    <h4 class="col">MAGYAR</h4>
                    <h6 class="col">visszajelzés</h6>
                </div>
                <div></div>
        </div>
        `)
        $.each(tomb, function (index, elem) {
            new SzoView(szulo.children(":last-child").children(":last-child"), elem, index)
        })
    }
}
export default SzavakView