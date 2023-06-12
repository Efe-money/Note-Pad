let pad =[];
let display = document.getElementById('display');
function displayer(){
    display.innerHTML='';
    pad.forEach((elem)=>{
        display.innerHTML+= `
        <tr>
            <td>${elem.texts}</td>
        
        </tr>
        `;
    });
}
function save(){
    let ttle =document.getElementById('title');
    let notes = document.getElementById('notes')


}