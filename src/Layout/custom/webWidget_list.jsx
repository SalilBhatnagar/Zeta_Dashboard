export default function WebWidgetList() {
    let greeting = `Hello World,     
    Greetings to all,
    Keep Learning and Practicing!`
    return <>
      <div className="div-dashbord">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                <h1 className="h1-dashHeading">
                   Web Widget List
                </h1>
                </div>
            </div>
        </div>
     </div>
     <hr/>
     {greeting}
    </>
}