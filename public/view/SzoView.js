class SzoView{
    constructor(szulo, adat, i){
        this.adat=adat
        this.index = i
        
        
        szulo.append(`
        <div class="row">
            <p class="col">${adat.angol}</p>
            <p class="col"><input type="text" id="${this.index}"></input></td>
            <p class="col"> </p>
        </div>
        `)

        const inp=szulo.children(":last-child").children(":nth-child(2)")
        this.inputMezo = inp
        this.visszajelzes = szulo.children(":last-child").children(":last-child")

        inp.on("keyup", ()=>{
            this.kattintasTrigger("p")
        })

    }
    kattintasTrigger(tipus){
        const e = new CustomEvent(tipus, {detail:this})
        window.dispatchEvent(e)
    }
}
export default SzoView