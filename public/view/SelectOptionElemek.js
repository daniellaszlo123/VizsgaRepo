import SelectoptionElem from "./SelectoptionElem.js"

class SelectOptionElemek{
    constructor(szulo, tomb){
        $.each(tomb, function (index, elem) {
            new SelectoptionElem(szulo, elem)
        })
    }
}

export default SelectOptionElemek