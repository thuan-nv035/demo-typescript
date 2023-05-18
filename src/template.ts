interface DOMList {
    ul: HTMLUListElement
}

export default  class ListTemplate implements DOMList {
    ul: HTMLUListElement
    static instance: ListTemplate = new ListTemplate();
    private constructor() {
        this.ul = document.getElementById("listItem") as HTMLUListElement;
    }

    
}