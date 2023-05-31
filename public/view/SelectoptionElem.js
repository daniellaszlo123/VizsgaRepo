class SelectoptionElem{
    constructor(szulo, adat){
        szulo.append(`
            <option value="${adat.id}">${adat.temanev}</option>
        `)
    }
}

export default SelectoptionElem